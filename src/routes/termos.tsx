import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — É Preço Hein" },
      {
        name: "description",
        content:
          "Termos de uso do aplicativo É Preço Hein: regras de utilização, limitações de responsabilidade e propriedade intelectual.",
      },
      { property: "og:title", content: "Termos de Uso — É Preço Hein" },
      {
        property: "og:description",
        content: "Regras de uso do aplicativo É Preço Hein.",
      },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-2xl px-6 py-12">
        <Link to="/" className="text-sm font-medium text-primary hover:underline">
          ← Voltar
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Termos de Uso</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: 18 de agosto de 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="text-lg font-semibold">1. Aceitação</h2>
            <p className="mt-2 text-muted-foreground">
              Ao usar o É Preço Hein você concorda com estes termos. Se não concordar, não
              utilize o aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. O que o aplicativo faz</h2>
            <p className="mt-2 text-muted-foreground">
              O aplicativo calcula o preço por unidade base (unidade, grama, quilo, mililitro ou
              litro) a partir das informações que você digita, e indica qual opção sai mais
              barata. O uso é gratuito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Responsabilidade pelos dados informados</h2>
            <p className="mt-2 text-muted-foreground">
              Os resultados dependem inteiramente dos preços e quantidades digitados por você.
              Não garantimos a exatidão de valores praticados por estabelecimentos comerciais e
              não nos responsabilizamos por decisões de compra baseadas no resultado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. Uso permitido</h2>
            <p className="mt-2 text-muted-foreground">
              É proibido copiar, modificar, descompilar ou distribuir o aplicativo, bem como
              usá-lo para fins ilícitos ou que prejudiquem seu funcionamento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Propriedade intelectual</h2>
            <p className="mt-2 text-muted-foreground">
              A marca, a identidade visual, o código-fonte e os conteúdos do É Preço Hein
              pertencem ao seu titular. Nenhum direito é transferido pelo simples uso do
              aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">6. Publicidade</h2>
            <p className="mt-2 text-muted-foreground">
              O aplicativo poderá exibir anúncios e ofertas de parceiros. Eventuais relações
              comerciais entre você e anunciantes são de responsabilidade das partes envolvidas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Alterações e contato</h2>
            <p className="mt-2 text-muted-foreground">
              Estes termos podem ser atualizados a qualquer momento, com publicação nesta
              página. Foro: comarca do domicílio do titular, conforme a legislação brasileira.
              Contato: <strong className="text-foreground">contato@eprecohein.com.br</strong>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}