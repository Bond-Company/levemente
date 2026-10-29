// Fonte única dos dados institucionais da LeveMente.
// Todos os componentes, links e metadados leem daqui — altere somente neste arquivo.
// São dados públicos: não coloque segredos ou credenciais aqui.

export const clinicConfig = {
  name: 'LeveMente',
  websiteUrl: 'https://www.levemente.med.br/',
  description:
    'Atendimento médico em Teresina – PI, com consulta presencial e teleconsulta.',

  whatsappNumber: '5586994529256',
  whatsappDisplay: '(86) 99452-9256',
  whatsappDefaultMessage:
    'Olá! Conheci a LeveMente pelo site e gostaria de obter informações sobre o agendamento de uma consulta.',

  instagramUrl: 'https://www.instagram.com/levementepsiquiatria',
  instagramHandle: '@levementepsiquiatria',

  address: {
    building: 'Edifício Di Cavalcanti',
    street: 'Rua Coelho Rodrigues, 1999',
    complement: '1º andar, sala 113',
    neighborhood: 'Centro',
    city: 'Teresina',
    state: 'PI',
    postalCode: '64000-080',
    country: 'Brasil',
  },

  professional: {
    name: 'Dra. Anna Paula Mendes A. Lima',
    crm: 'CRM-PI 4426',
  },

  services: {
    inPerson: true,
    teleconsultation: true,
  },
} as const

export const seoConfig = {
  title: 'LeveMente | Atendimento Médico em Teresina – PI',
  description:
    'Conheça a LeveMente, em Teresina – PI. Atendimento presencial e por teleconsulta. Entre em contato pelo WhatsApp para obter informações e solicitar seu agendamento.',
  ogImage: 'og-image.jpg',
  themeColor: '#1A6372',
} as const

export const navigation = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Atendimento', href: '/#atendimento' },
  { label: 'Dúvidas', href: '/#duvidas' },
  { label: 'Contato', href: '/#contato' },
] as const
