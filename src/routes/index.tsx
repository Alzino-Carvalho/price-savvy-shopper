import { createFileRoute, Link } from "@tanstack/react-router";

import logo from "@/assets/logo-e-preco-hein.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "É Preço Hein — qual produto sai mais barato?" },
      {
        name: "description",
        content:
          "Compare produtos com quantidades diferentes e veja na hora qual é o mais barato por unidade, grama, quilo, litro ou mililitro.",
      },
      { property: "og:title", content: "É Preço Hein" },
      {
        property: "og:description",
        content: "Compare preços por unidade e economize no mercado.",
      },
    ],
  }),
  component: Index,
});

const beneficios = [
  {
    titulo: "Compare em segundos",
    texto: "Informe preço e quantidade de cada produto e veja o valor por unidade base.",
  },
  {
    titulo: "Simples de usar",
    texto: "Feito para o corredor do mercado: poucos toques, resultado claro.",
  },
  {
    titulo: "Funciona no celular",
    texto: "Android, iPhone ou navegador — sem instalar nada para começar.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center">
        <img
          src={logo.url}
          alt="É Preço Hein — calculadora com lupa sobre o preço R$ 5,90"
          className="w-full max-w-md"
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Qual produto sai mais barato de verdade?
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Embalagens com tamanhos diferentes confundem qualquer um. O É Preço Hein calcula o
          preço por unidade, grama, quilo, litro ou mililitro e mostra o vencedor na hora.
        </p>
        <Link
          to="/comparar"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Comparar produtos
        </Link>
      </section>

      <section className="mx-auto grid max-w-4xl gap-4 px-6 pb-20 sm:grid-cols-3">
        {beneficios.map((b) => (
          <div key={b.titulo} className="rounded-2xl border border-border bg-card p-5 text-left">
            <h2 className="text-base font-semibold text-card-foreground">{b.titulo}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{b.texto}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
