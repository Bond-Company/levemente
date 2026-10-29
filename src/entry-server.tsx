// Entrada usada apenas no build para pré-renderizar o HTML estático
// (scripts/prerender.mjs). Não é enviada ao navegador.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { clinicConfig, seoConfig } from './config/clinic'
import { routes, type Route } from './lib/routes'
import { whatsappLink } from './lib/links'

export { routes }

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const pageMeta: Record<Route, { title: string; description: string }> = {
  '/': { title: seoConfig.title, description: seoConfig.description },
  '/politica-de-privacidade/': {
    title: `Política de Privacidade | ${clinicConfig.name}`,
    description: `Como o site da ${clinicConfig.name} trata informações pessoais, em conformidade com a LGPD.`,
  },
}

// Dados estruturados apenas com informações confirmadas:
// sem especialidade médica, avaliações ou coordenadas.
function structuredData() {
  const base = clinicConfig.websiteUrl
  const a = clinicConfig.address
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${base}#clinica`,
    name: clinicConfig.name,
    url: base,
    logo: `${base}Logo.png`,
    image: `${base}${seoConfig.ogImage}`,
    description: clinicConfig.description,
    telephone: `+${clinicConfig.whatsappNumber}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.street}, ${a.building}, ${a.complement}`,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.postalCode,
      addressCountry: 'BR',
    },
    areaServed: { '@type': 'City', name: `${a.city} – ${a.state}` },
    sameAs: [clinicConfig.instagramUrl],
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Solicitar agendamento pelo WhatsApp',
      target: whatsappLink(),
    },
  }
}

export function render(path: Route) {
  const html = renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )

  const meta = pageMeta[path]
  const url = new URL(path.slice(1), clinicConfig.websiteUrl).href
  const image = new URL(seoConfig.ogImage, clinicConfig.websiteUrl).href

  const head = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${clinicConfig.name}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Logo da ${clinicConfig.name}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    path === '/'
      ? `<script type="application/ld+json">${JSON.stringify(structuredData()).replace(/</g, '\\u003c')}</script>`
      : '',
  ]
    .filter(Boolean)
    .join('\n    ')

  return { html, head }
}
