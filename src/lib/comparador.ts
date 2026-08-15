export type UnidadeId = "un" | "g" | "kg" | "ml" | "l";

export type Familia = "unidade" | "massa" | "volume";

export const UNIDADES: {
  id: UnidadeId;
  rotulo: string;
  familia: Familia;
  /** quantos da unidade base essa unidade representa */
  fator: number;
}[] = [
  { id: "un", rotulo: "un", familia: "unidade", fator: 1 },
  { id: "g", rotulo: "g", familia: "massa", fator: 1 },
  { id: "kg", rotulo: "kg", familia: "massa", fator: 1000 },
  { id: "ml", rotulo: "ml", familia: "volume", fator: 1 },
  { id: "l", rotulo: "L", familia: "volume", fator: 1000 },
];

export const BASE_POR_FAMILIA: Record<Familia, { rotulo: string; multiplicador: number }> = {
  // preço por 1 unidade
  unidade: { rotulo: "unidade", multiplicador: 1 },
  // preço por 1 kg (1000 g)
  massa: { rotulo: "kg", multiplicador: 1000 },
  // preço por 1 L (1000 ml)
  volume: { rotulo: "litro", multiplicador: 1000 },
};

export function unidadePorId(id: UnidadeId) {
  return UNIDADES.find((u) => u.id === id) ?? UNIDADES[0];
}

export type Produto = {
  id: string;
  nome: string;
  preco: string;
  quantidade: string;
  unidade: UnidadeId;
};

export type Resultado = {
  id: string;
  nome: string;
  precoBase: number | null;
  rotuloBase: string;
  valido: boolean;
};

function paraNumero(valor: string): number | null {
  const limpo = valor.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
  if (limpo === "") return null;
  const n = Number(limpo);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

export function calcular(produtos: Produto[], rotulos: string[]): {
  resultados: Resultado[];
  vencedorId: string | null;
  economiaPercentual: number | null;
} {
  const resultados: Resultado[] = produtos.map((p, i) => {
    const preco = paraNumero(p.preco);
    const quantidade = paraNumero(p.quantidade);
    const unidade = unidadePorId(p.unidade);
    const base = BASE_POR_FAMILIA[unidade.familia];
    const nome = p.nome.trim() || rotulos[i] || `Opção ${i + 1}`;

    if (preco === null || quantidade === null) {
      return { id: p.id, nome, precoBase: null, rotuloBase: base.rotulo, valido: false };
    }

    const quantidadeNaUnidadeMinima = quantidade * unidade.fator;
    const precoBase = (preco / quantidadeNaUnidadeMinima) * base.multiplicador;
    return { id: p.id, nome, precoBase, rotuloBase: base.rotulo, valido: true };
  });

  const validos = resultados.filter((r) => r.valido && r.precoBase !== null);
  if (validos.length < 2) {
    return { resultados, vencedorId: null, economiaPercentual: null };
  }

  // Só faz sentido eleger vencedor quando todos comparam a mesma base
  const bases = new Set(validos.map((r) => r.rotuloBase));
  if (bases.size > 1) {
    return { resultados, vencedorId: null, economiaPercentual: null };
  }

  const ordenados = [...validos].sort((a, b) => (a.precoBase ?? 0) - (b.precoBase ?? 0));
  const melhor = ordenados[0];
  const pior = ordenados[ordenados.length - 1];
  const economia =
    pior.precoBase && melhor.precoBase
      ? ((pior.precoBase - melhor.precoBase) / pior.precoBase) * 100
      : null;

  return { resultados, vencedorId: melhor.id, economiaPercentual: economia };
}

export function formatarMoeda(valor: number): string {
  const casas = valor < 1 ? 3 : 2;
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
}