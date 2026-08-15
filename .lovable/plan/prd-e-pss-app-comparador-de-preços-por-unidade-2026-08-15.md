# PRD e PSS — App Comparador de Preços por Unidade

Entrega desta etapa: dois documentos em português (Brasil), prontos para download, sem alterar o app ainda.

## O que será gerado

### 1. PRD — Documento de Requisitos de Produto
- Visão, problema e proposta de valor (dona de casa comparando produtos com quantidades diferentes)
- Público-alvo e personas (compra semanal, compra rápida no corredor do mercado)
- Objetivos e métricas de sucesso (instalações, comparações por sessão, retenção 7/30 dias)
- Escopo do MVP: comparar 2 ou mais produtos por preço unitário (preço + quantidade + unidade → preço por unidade base, com destaque do mais barato e do percentual de economia)
- Fora do escopo do MVP, com fila de evolução: lista de compras, histórico, leitor de código de barras, contas de usuário e sincronização, ofertas patrocinadas
- Requisitos funcionais numerados (RF-01…) e regras de conversão de unidades (un, g, kg, ml, L)
- Requisitos não funcionais: velocidade, uso com uma mão, funcionamento sem internet, acessibilidade, tamanho de fonte
- Fluxos de tela e estrutura de navegação do MVP
- Estratégia de monetização: comparativo entre app pago, gratuito com anúncios, patrocínio de ofertas e venda futura do ativo, com recomendação (gratuito com anúncios discretos + dados agregados anônimos como ativo de valor)
- Roadmap por fases: MVP web instalável → lojas → recursos de engajamento
- Riscos e premissas

### 2. PSS — Especificação Técnica de Solução
- Arquitetura: aplicativo web instalável (PWA) primeiro, empacotamento com Capacitor depois para Play Store e App Store
- Stack: React + TypeScript, backend gerenciado (Lovable Cloud) quando entrarem contas e sincronização
- Modelo de dados e algoritmo de normalização de unidades, incluindo tratamento de arredondamento e casos de erro
- Requisitos de PWA: manifesto, ícones, uso offline
- Hospedagem: avaliação da VPS Hostinger versus hospedagem gerenciada, com recomendação (hospedagem gerenciada para o app; a VPS pode ficar para site institucional/e-mail) e comparação de custo, manutenção, SSL, escalabilidade e backup
- Publicação nas lojas: contas de desenvolvedor Google Play e Apple, requisitos de conta, prazos, políticas de anúncios e checklist de submissão
- Domínio e propriedade: registro .com.br, titularidade em nome do proprietário, marca no INPI, propriedade do código e das contas
- LGPD: base legal, dados coletados, política de privacidade, termos de uso, consentimento de anúncios, direitos do titular, prazo de retenção, encarregado (DPO)
- Segurança, monitoramento e plano de backup
- Estimativa de esforço por fase e custos recorrentes previstos

## Formato
Ambos em `.docx` para download, mais versões em Markdown. Após a aprovação e revisão dos documentos, o próximo passo pode ser construir o MVP aqui mesmo.
