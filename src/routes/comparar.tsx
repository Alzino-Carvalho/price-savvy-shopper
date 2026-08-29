import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Trash2, Trophy, RotateCcw } from "lucide-react";

import logo from "@/assets/logo-e-preco-hein.jpg.asset.json";
import {
  UNIDADES,
  calcular,
  formatarMoeda,
  type Produto,
  type UnidadeId,
} from "@/lib/comparador";

export const Route = createFileRoute("/comparar")({
  head: () => ({
    meta: [
      { title: "Comparar preços por unidade — É Preço Hein" },
      {
        name: "description",
        content:
          "Informe preço, quantidade e unidade de cada produto e descubra na hora qual sai mais barato por quilo, litro ou unidade.",
      },
      { property: "og:title", content: "Comparar preços por unidade — É Preço Hein" },
      {
        property: "og:description",
        content: "Calcule o preço por unidade base e veja quanto você economiza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Comparar,
});

const ROTULOS = ["Opção A", "Opção B", "Opção C", "Opção D", "Opção E", "Opção F"];

let contador = 0;
function novoProduto(unidade: UnidadeId = "g"): Produto {
  contador += 1;
  return { id: `p${contador}`, nome: "", preco: "", quantidade: "", unidade };
}

function Comparar() {
  const [produtos, setProdutos] = useState<Produto[]>(() => [novoProduto(), novoProduto()]);

  const { resultados, vencedorId, economiaPercentual } = useMemo(
    () => calcular(produtos, ROTULOS),
    [produtos],
  );

  const atualizar = (id: string, campo: keyof Produto, valor: string) =>
    setProdutos((atual) =>
      atual.map((p) => (p.id === id ? { ...p, [campo]: valor } : p)),
    );

  const remover = (id: string) =>
    setProdutos((atual) => (atual.length <= 2 ? atual : atual.filter((p) => p.id !== id)));

  const limpar = () => setProdutos([novoProduto(), novoProduto()]);

  const vencedor = resultados.find((r) => r.id === vencedorId);

  return (
    <main className="min-h-screen bg-background pb-28">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="É Preço Hein" className="h-9 w-auto rounded" />
            <span className="text-sm font-semibold text-foreground">É Preço Hein</span>
          </Link>
          <button
            type="button"
            onClick={limpar}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Limpar
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Qual sai mais barato?
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Preencha preço e quantidade de cada produto. O cálculo é feito na hora, no seu
          celular.
        </p>

        <div className="mt-6 space-y-4">
          {produtos.map((produto, indice) => {
            const resultado = resultados[indice];
            const ehVencedor = vencedorId === produto.id;

            return (
              <section
                key={produto.id}
                className={`rounded-2xl border bg-card p-4 transition-colors ${
                  ehVencedor ? "border-primary ring-2 ring-primary/30" : "border-border"
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    value={produto.nome}
                    onChange={(e) => atualizar(produto.id, "nome", e.target.value)}
                    placeholder={ROTULOS[indice] ?? `Opção ${indice + 1}`}
                    aria-label={`Nome do produto ${indice + 1}`}
                    className="min-w-0 flex-1 bg-transparent text-base font-semibold text-card-foreground outline-none placeholder:text-muted-foreground"
                  />
                  {ehVencedor && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                      Mais barato
                    </span>
                  )}
                  {produtos.length > 2 && (
                    <button
                      type="button"
                      onClick={() => remover(produto.id)}
                      aria-label={`Remover ${produto.nome || ROTULOS[indice]}`}
                      className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs font-medium text-muted-foreground">Preço (R$)</span>
                    <input
                      value={produto.preco}
                      onChange={(e) => atualizar(produto.id, "preco", e.target.value)}
                      inputMode="decimal"
                      placeholder="0,00"
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-lg font-semibold text-foreground outline-none focus:border-primary"
                    />
                  </label>

                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Quantidade</span>
                    <div className="mt-1 flex gap-2">
                      <input
                        value={produto.quantidade}
                        onChange={(e) => atualizar(produto.id, "quantidade", e.target.value)}
                        inputMode="decimal"
                        placeholder="0"
                        aria-label={`Quantidade do produto ${indice + 1}`}
                        className="w-full min-w-0 rounded-xl border border-input bg-background px-3 py-3 text-lg font-semibold text-foreground outline-none focus:border-primary"
                      />
                      <select
                        value={produto.unidade}
                        onChange={(e) => atualizar(produto.id, "unidade", e.target.value)}
                        aria-label={`Unidade do produto ${indice + 1}`}
                        className="rounded-xl border border-input bg-background px-2 py-3 text-base font-semibold text-foreground outline-none focus:border-primary"
                      >
                        {UNIDADES.map((u) => (
                          <option key={u.id} value={u.id}>
                            {u.rotulo}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {resultado?.valido && resultado.precoBase !== null ? (
                    <>
                      <span
                        className={`text-base font-bold ${
                          ehVencedor ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {formatarMoeda(resultado.precoBase)}
                      </span>{" "}
                      por {resultado.rotuloBase}
                    </>
                  ) : (
                    "Informe preço e quantidade para calcular."
                  )}
                </p>
              </section>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setProdutos((atual) => [...atual, novoProduto()])}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Adicionar produto
        </button>

        <section className="mt-8 rounded-2xl border border-border bg-card p-4">
          <h2 className="text-base font-bold text-card-foreground">Como calculamos?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            O É Preço Hein converte a quantidade de cada produto para uma unidade comum e
            divide o preço por essa quantidade. Assim, todos os produtos passam a ser
            comparados pela mesma medida:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Produtos por peso: preço por quilo (kg)</li>
            <li>Produtos por volume: preço por litro (L)</li>
            <li>Produtos por unidade: preço por unidade</li>
          </ul>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Exemplo: um pacote de 500 g por R$ 12,90 custa R$ 25,80 por quilo. O produto com
            o menor valor na mesma unidade-base é o mais barato.
          </p>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-card/95 backdrop-blur">
        <div className="mx-auto max-w-2xl px-4 py-4 text-center">
          {vencedor && vencedor.precoBase !== null ? (
            <>
              <p className="text-base font-bold text-foreground">
                {vencedor.nome} é mais barato por {vencedor.rotuloBase}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {formatarMoeda(vencedor.precoBase)} por {vencedor.rotuloBase}
                {economiaPercentual && economiaPercentual > 0
                  ? ` — economia de até ${economiaPercentual.toLocaleString("pt-BR", {
                      maximumFractionDigits: 1,
                    })}%`
                  : ""}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                O cálculo divide o preço pela quantidade convertida para uma unidade comum.
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Preencha ao menos dois produtos com a mesma medida (peso, volume ou unidade).
            </p>
          )}
        </div>
      </div>
    </main>
  );
}