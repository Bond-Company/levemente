// Textos institucionais da página. Edite aqui sem mexer nos componentes.
// Dados como nome, CRM, endereço e contatos vêm de src/config/clinic.ts.

export const copy = {
  hero: {
    eyebrow: 'LeveMente · Teresina – PI',
    titleStart: 'Um cuidado que respeita você',
    titleEmphasis: 'por inteiro.',
    text: 'Um espaço de acolhimento, escuta e atenção à saúde, com atendimento individualizado e respeito à história de cada pessoa.',
    primaryCta: 'Agendar consulta pelo WhatsApp',
    secondaryCta: 'Conheça a LeveMente',
    modalities: ['Consulta presencial', 'Teleconsulta'],
  },

  about: {
    eyebrow: 'Sobre',
    title: 'Um espaço para cuidar de você.',
    text: 'A LeveMente acredita que o cuidado com a saúde começa com atenção, respeito e escuta. Nosso propósito é oferecer um ambiente acolhedor, onde cada pessoa possa receber atendimento com seriedade, sensibilidade e atenção às suas necessidades.',
    pillars: ['Atenção', 'Respeito', 'Escuta'],
  },

  services: {
    eyebrow: 'Atendimento',
    title: 'Duas formas de ser atendido.',
    intro: 'Escolha a modalidade mais adequada à sua rotina. A disponibilidade é informada diretamente pela equipe.',
    items: [
      {
        id: 'presencial',
        icon: 'door',
        title: 'Consulta presencial',
        text: 'Atendimento realizado no consultório da LeveMente, localizado no Centro de Teresina.',
        cta: 'Solicitar informações',
        message:
          'Olá! Conheci a LeveMente pelo site e gostaria de obter informações sobre a consulta presencial.',
      },
      {
        id: 'teleconsulta',
        icon: 'video',
        title: 'Teleconsulta',
        text: 'Modalidade de atendimento remoto, com informações sobre disponibilidade e agendamento fornecidas diretamente pela equipe.',
        cta: 'Solicitar informações',
        message:
          'Olá! Conheci a LeveMente pelo site e gostaria de obter informações sobre a teleconsulta.',
      },
    ],
  },

  professional: {
    eyebrow: 'A profissional',
    title: 'Cuidado com atenção e respeito.',
    text: 'Um atendimento pautado pela atenção individualizada, pelo respeito e pelo compromisso com o cuidado de cada paciente.',
  },

  values: {
    eyebrow: 'O que nos orienta',
    items: [
      'Seu cuidado merece atenção.',
      'Cada pessoa tem sua própria história.',
      'Acolhimento e respeito em cada etapa.',
    ],
  },

  howToBook: {
    eyebrow: 'Como agendar',
    title: 'Simples, do primeiro contato à consulta.',
    steps: [
      {
        title: 'Entre em contato pelo WhatsApp',
        text: 'Toque no botão de agendamento e a conversa abrirá com uma mensagem pronta.',
      },
      {
        title: 'Informe que deseja agendar',
        text: 'Conte se prefere a consulta presencial ou a teleconsulta.',
      },
      {
        title: 'Confirme com a equipe',
        text: 'Data, horário e demais informações são confirmados diretamente na conversa.',
      },
    ],
    note: 'O site apenas inicia o contato. Nenhum horário é reservado automaticamente: a confirmação é sempre feita pela equipe.',
    cta: 'Quero agendar minha consulta',
  },

  location: {
    eyebrow: 'Contato',
    title: 'Onde estamos',
    text: 'O consultório fica no Centro de Teresina, no Edifício Di Cavalcanti.',
    cta: 'Como chegar',
    showMap: 'Mostrar mapa',
    mapNotice: 'O mapa é fornecido pelo Google e só é carregado quando você solicita.',
  },

  faq: {
    eyebrow: 'Dúvidas',
    title: 'Perguntas frequentes',
    // O endereço da segunda resposta é montado a partir da configuração.
    items: [
      {
        question: 'Como faço para agendar uma consulta?',
        answer:
          'Entre em contato com a LeveMente pelo WhatsApp para obter informações e solicitar seu agendamento.',
      },
      {
        question: 'Onde fica a LeveMente?',
        answer: 'ADDRESS',
      },
      {
        question: 'A LeveMente oferece teleconsulta?',
        answer:
          'Sim. A LeveMente oferece atendimento presencial e por teleconsulta. Entre em contato pelo WhatsApp para obter informações sobre disponibilidade e agendamento.',
      },
      {
        question: 'Como posso saber mais sobre os atendimentos?',
        answer:
          'Entre em contato diretamente pelo WhatsApp para esclarecer suas dúvidas e obter informações sobre as modalidades de atendimento.',
      },
    ],
  },

  finalCta: {
    title: 'Seu cuidado pode começar com uma conversa.',
    text: 'Entre em contato com a LeveMente para obter informações e solicitar seu agendamento.',
    cta: 'Agendar pelo WhatsApp',
  },

  footer: {
    description:
      'Um espaço de acolhimento, escuta e atenção à saúde, com atendimento presencial em Teresina e por teleconsulta.',
  },
} as const
