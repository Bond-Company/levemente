import { clinicConfig } from '../config/clinic'

/** Link oficial do WhatsApp com a mensagem codificada corretamente. */
export function whatsappLink(message: string = clinicConfig.whatsappDefaultMessage): string {
  return `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Endereço em uma linha, usado no mapa, no FAQ e nos dados estruturados. */
export function fullAddress(): string {
  const a = clinicConfig.address
  return `${a.building}, ${a.street}, ${a.complement}, ${a.neighborhood}, ${a.city} – ${a.state}, CEP ${a.postalCode}`
}

/** Consulta de busca do Google Maps: sem andar/sala, que atrapalham a geocodificação. */
function mapsQuery(): string {
  const a = clinicConfig.address
  return `${a.building}, ${a.street}, ${a.neighborhood}, ${a.city} - ${a.state}, ${a.postalCode}, ${a.country}`
}

/** Abre o endereço no Google Maps (app no celular, site no computador). */
export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery())}`
}

/** Mapa incorporável, carregado somente quando o visitante pede. */
export function mapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery())}&output=embed`
}

/** Atributos para links que abrem em nova aba. */
export const external = { target: '_blank', rel: 'noopener noreferrer' } as const
