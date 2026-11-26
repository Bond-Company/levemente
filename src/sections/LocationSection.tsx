import { useState } from 'react'
import { Icon } from '../components/Icon'
import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'
import { external, mapsEmbedUrl, mapsLink, whatsappLink } from '../lib/links'

// O endereço em tipografia grande é a peça principal. O mapa do Google
// continua carregando apenas quando o visitante pede (privacidade).
export function LocationSection() {
  const { location } = copy
  const { address } = clinicConfig
  const [showMap, setShowMap] = useState(false)

  return (
    <section id="contato" aria-labelledby="contato-title" className="pb-[var(--spacing-section)]">
      <div className="container-page">
        <div className="grid gap-12 border-t hairline pt-10 lg:grid-cols-12 lg:gap-16 lg:pt-14">
          <div className="lg:col-span-6">
            <p className="eyebrow">{location.eyebrow}</p>
            <h2 id="contato-title" className="mt-6 text-headline">
              {location.title}
            </h2>

            <address className="serif mt-10 text-[clamp(1.4rem,1.15rem+1vw,2rem)] leading-[1.3] font-[340] text-petrol-900 not-italic">
              <em className="text-petrol-700">{address.building}</em>
              <br />
              {address.street}
              <br />
              {address.complement}
              <br />
              {address.neighborhood}, {address.city} – {address.state}
            </address>
            <p className="mt-4 text-sm text-ink-soft tabular-nums">CEP {address.postalCode}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={mapsLink()} {...external} className="btn btn-primary">
                <Icon name="map" />
                {location.cta}
                <span className="sr-only"> (abre o Google Maps em nova aba)</span>
              </a>
              <a href={whatsappLink()} {...external} className="btn btn-secondary">
                <Icon name="whatsapp" />
                {clinicConfig.whatsappDisplay}
                <span className="sr-only"> (WhatsApp, abre em nova aba)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border hairline bg-sand-100">
              {showMap ? (
                <iframe
                  title={`Mapa: ${address.building}, ${address.street}, ${address.city}`}
                  src={mapsEmbedUrl()}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-start justify-between p-7 sm:p-10">
                  <p className="text-sm text-ink-soft">{location.text}</p>
                  <div>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowMap(true)}>
                      <Icon name="pin" size={18} />
                      {location.showMap}
                    </button>
                    <p className="mt-4 max-w-xs text-[0.8125rem] text-ink-soft">{location.mapNotice}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
