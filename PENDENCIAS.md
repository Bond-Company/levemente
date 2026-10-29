# Pendências

Informações que ainda não foram fornecidas ou confirmadas. O site está completo
sem elas; quando disponíveis, basta atualizar os arquivos indicados.

## Conteúdo e imagens

- [x] **Fotografia profissional da Dra. Anna Paula Mendes A. Lima** — aplicada na
      seção "A profissional".
- [ ] **Autorização de uso de imagem da pessoa de costas** na foto da profissional,
      caso não seja uma modelo contratada (ela não é identificável, mas vale confirmar).
- [ ] **Fotografias reais do consultório**, para uso futuro. Hoje a primeira dobra
      exibe a logo oficial.
- [ ] **Biografia profissional validada** (formação e trajetória), para ampliar a
      seção "A profissional" (`src/content/copy.ts` → `professional`).
- [ ] **RQE**, se houver. Sem RQE, o site não apresenta a profissional como
      especialista, nem no texto nem nos dados estruturados.
- [ ] **Horários de atendimento.**
- [ ] **Informações adicionais sobre os serviços** (por exemplo, a plataforma de
      teleconsulta e convênios). Nenhuma foi inventada.

## Pontos a confirmar

- [ ] **Atuação em Timon (MA):** o site antigo citava "Teresina e Timon". Isso não
      consta nos dados confirmados e não foi incluído.
- [ ] **Expressões do site antigo** ("Psiquiatria & Saúde Mental", "Equipe
      Especializada", "abordagem integrativa"): não foram reaproveitadas, porque
      dependem de especialidade (RQE) e de uma equipe que não foram confirmadas.
- [ ] **Diretor(a) técnico(a)** da clínica, se a LeveMente for registrada como
      pessoa jurídica: as normas de publicidade médica do CFM exigem a
      identificação. Hoje o rodapé mostra a profissional e o CRM, sem o título de
      diretora técnica.
- [ ] **E-mail institucional** e **encarregado(a) de dados (LGPD)**, que podem ser
      acrescentados à Política de Privacidade.
- [ ] **Validação jurídica** da Política de Privacidade (`src/pages/PrivacyPolicy.tsx`).

## Publicação

- [ ] **Hospedagem atual:** o site antigo parece usar Next.js. Confirme onde ele
      está hospedado e configure o deploy da pasta `dist/` (comando
      `npm run build`). Não é preciso alterar DNS.
- [ ] **Google Search Console:** enviar `https://www.levemente.med.br/sitemap.xml`.
- [ ] **Perfil da Empresa no Google (Google Business Profile)**, com o mesmo nome,
      endereço e telefone do site, para fortalecer a presença local.
- [ ] Se a hospedagem redirecionar `levemente.med.br` (sem www), confirme que o
      redirecionamento aponta para `https://www.levemente.med.br/` (a URL canônica).

## Melhorias técnicas opcionais

- [ ] No Lighthouse mobile (simulação de rede lenta), o LCP ficou em 2,5 s. A maior
      economia estimada está no CSS bloqueante (~48 KB). Inlinear o CSS crítico pode
      reduzir esse tempo, se necessário.
