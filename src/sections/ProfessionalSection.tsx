import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function ProfessionalSection() {
  const { professional } = copy
  const photo = images.professional

  return (
    <section aria-labelledby="profissional-title" className="py-[var(--spacing-section)]">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Fotografia profissional (src/content/images.ts); sem foto, usa uma composição gráfica. */}
        <div className="lg:col-span-5" data-reveal>
          <figure className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-xl)] bg-sand-200 shadow-soft lg:max-w-none">
            {photo ? (
              <picture>
                {photo.webpSrcSet && (
                  <source
                    type="image/webp"
                    srcSet={photo.webpSrcSet}
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 24rem, 100vw"
                  />
                )}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: photo.position }}
                  className="absolute inset-0 size-full object-cover"
                />
              </picture>
            ) : (
              <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_30%_20%,rgb(250_247_242/0.7),transparent_70%)]" />
                <div className="absolute -right-[18%] -bottom-[12%] w-[95%] text-petrol-700/12">
                  <div className="brand-symbol w-full" />
                </div>
                <div className="absolute top-8 left-8 font-display text-[5.5rem] leading-none font-[300] text-petrol-700/80 italic sm:text-[7rem]">
                  AP
                </div>
                <div className="absolute bottom-8 left-8 h-px w-16 bg-clay-400" />
              </div>
            )}
          </figure>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-reveal>
          <p className="eyebrow">{professional.eyebrow}</p>
          <h2 id="profissional-title" className="mt-6 text-headline">
            {professional.title}
          </h2>

          <div className="mt-10 border-l border-clay-400 pl-6">
            <p className="font-display text-[clamp(1.5rem,1.25rem+1vw,2rem)] leading-tight text-petrol-900">
              {clinicConfig.professional.name}
            </p>
            <p className="mt-3 inline-flex items-center rounded-pill border border-petrol-700/25 px-3.5 py-1 text-sm font-semibold tracking-[0.06em] text-petrol-800">
              {clinicConfig.professional.crm}
            </p>
          </div>

          <p className="mt-8 max-w-lg text-lead text-ink-soft">{professional.text}</p>
        </div>
      </div>
    </section>
  )
}
