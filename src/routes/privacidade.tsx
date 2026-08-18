import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — É Preço Hein" },
      {
        name: "description",
        content:
          "Política de privacidade do aplicativo É Preço Hein, em conformidade com a LGPD: quais dados são tratados, finalidades e direitos do titular.",
      },
      { property: "og:title", content: "Política de Privacidade — É Preço Hein" },
      {
        property: "og:description",
        content: "Como o É Preço Hein trata dados pessoais, conforme a LGPD.",
      },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-2xl px-6 py-12">
        <Link to="/" className="text-sm font-medium text-primary hover:underline">
          ← Voltar
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: 18 de agosto de 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="text-lg font-semibold">1. Quem somos</h2>
            <p className="mt-2 text-muted-foreground">
              O É Preço Hein é um aplicativo que compara o preço por unidade de produtos com
              embalagens de tamanhos diferentes. Esta política explica como tratamos dados
              pessoais, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Dados que tratamos</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>
                <strong className="text-foreground">Dados de comparação</strong> (preço,
                quantidade e unidade dos produtos): processados apenas no seu aparelho e não
                enviados para nossos servidores.
              </li>
              <li>
                <strong className="text-foreground">Cadastro:</strong> o aplicativo não exige
                conta, login, nome, e-mail ou telefone para funcionar.
              </li>
              <li>
                <strong className="text-foreground">Dados técnicos anônimos:</strong> podemos
                coletar métricas agregadas de uso (como número de comparações e tipo de
                aparelho) para melhorar o aplicativo, sem identificar você.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Finalidades e base legal</h2>
            <p className="mt-2 text-muted-foreground">
              Tratamos dados para executar a funcionalidade solicitada por você (execução de
              contrato), melhorar o produto e garantir segurança (legítimo interesse). Quando
              houver anúncios personalizados, o tratamento ocorrerá apenas mediante o seu
              consentimento, que pode ser revogado a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. Compartilhamento</h2>
            <p className="mt-2 text-muted-foreground">
              Não vendemos dados pessoais. Podemos compartilhar dados técnicos anônimos com
              provedores de hospedagem, análise de uso e, futuramente, redes de anúncios, sempre
              limitados às finalidades acima.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Armazenamento e retenção</h2>
            <p className="mt-2 text-muted-foreground">
              Os dados das comparações ficam no seu aparelho e podem ser apagados a qualquer
              momento limpando os dados do aplicativo ou desinstalando-o. Métricas anônimas são
              mantidas por até 24 meses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">6. Seus direitos</h2>
            <p className="mt-2 text-muted-foreground">
              Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
              portabilidade, eliminação de dados e revogação de consentimento. Basta entrar em
              contato pelo e-mail abaixo; responderemos em até 15 dias.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Crianças</h2>
            <p className="mt-2 text-muted-foreground">
              O aplicativo não é direcionado a menores de 13 anos e não coleta intencionalmente
              dados dessas pessoas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">8. Contato do encarregado (DPO)</h2>
            <p className="mt-2 text-muted-foreground">
              Dúvidas e solicitações: <strong className="text-foreground">contato@eprecohein.com.br</strong>
            </p>
            <p className="mt-2 text-muted-foreground">
              Alterações nesta política serão publicadas nesta página, com nova data de
              atualização.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}