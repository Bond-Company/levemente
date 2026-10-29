import { useState } from 'react'
import { Icon } from '../components/Icon'
import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'
import { external, mapsEmbedUrl, mapsLink, whatsappLink } from '../lib/links'

export function LocationSection() {
  const { location } = copy
  const { address } = clinicConfig
  const [showMap, setShowMap] = useState(false)

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-sand-100 py-[var(--spacing-section)]">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow">{location.eyebrow}</p>
          <h2 id="contato-title" className="mt-6 text-headline">
            {location.title}
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">{location.text}</p>

          <address className="mt-10 flex gap-5 not-italic">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-pill bg-petrol-700 text-sand-50">
              <Icon name="pin" size={22} />
            </span>
            <span className="text-[1.0625rem] leading-relaxed text-ink">
              <strong className="block font-display text-xl font-[420] text-petrol-900">{address.building}</strong>
              {address.street}
              <br />
              {address.complement}
              <br />
              {address.neighborhood}, {address.city} – {address.state}
              <br />
              CEP {address.postalCode}
            </span>
          </address>

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

        <div className="lg:col-span-7" data-reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] border border-petrol-900/8 bg-petrol-50 sm:aspect-[16/11]">
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
              <>
                {/* Ilustração abstrata de ruas — não representa a localização exata. */}
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full text-petrol-200"
                  viewBox="0 0 640 440"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g fill="none" stroke="currentColor" strokeLinecap="round">
                    <path strokeWidth="14" d="M-20 300 C120 280 230 250 340 200 S540 110 680 90" />
                    <path strokeWidth="8" d="M120 -20 L190 470" />
                    <path strokeWidth="8" d="M420 -20 L380 470" />
                    <path strokeWidth="5" d="M-20 120 L680 170" />
                    <path strokeWidth="5" d="M-20 400 L680 360" />
                    <path strokeWidth="3" d="M270 -20 L300 470" />
                    <path strokeWidth="3" d="M540 -20 L520 470" />
                  </g>
                  <circle cx="330" cy="205" r="70" fill="#1a6372" opacity=".08" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-full bg-petrol-700 text-sand-50 shadow-lift">
                    <Icon name="pin" size={28} />
                  </span>
                  <button type="button" className="btn btn-light btn-sm shadow-soft" onClick={() => setShowMap(true)}>
                    {location.showMap}
                  </button>
                  <p className="max-w-xs rounded-[var(--radius-sm)] bg-petrol-50/90 px-3 py-1.5 text-sm text-petrol-900/80">{location.mapNotice}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
