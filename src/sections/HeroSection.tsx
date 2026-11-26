import { Icon } from '../components/Icon'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'
import { images } from '../content/images'

// Primeira dobra editorial: o título em escala grande divide a cena com a
// fotografia real. No celular a foto entra entre o título e o texto.
export function HeroSection() {
  const { hero } = copy
  const photo = images.professional

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative pt-28 pb-[var(--spacing-section)] lg:pt-36">
      <div className="container-page grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:gap-y-12 xl:gap-x-16">
        <div className="lg:col-span-7 lg:row-start-1 lg:self-end">
          <p className="hero-deco eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title mt-7 text-display tracking-[-0.035em]">
            {hero.titleStart}{' '}
            <em className="font-[330] whitespace-nowrap text-petrol-700">{hero.titleEmphasis}</em>
          </h1>
        </div>

        {photo && (
          <figure className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <div className="hero-photo relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-sand-200">
              <picture>
                {photo.webpSrcSet && (
                  <source
                    type="image/webp"
                    srcSet={photo.webpSrcSet}
                    sizes="(min-width: 1024px) 36vw, 100vw"
                  />
                )}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  fetchPriority="high"
                  decoding="async"
                  style={{ objectPosition: photo.position }}
                  className="absolute inset-0 size-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="hero-deco mt-4 flex items-baseline justify-between gap-4 text-[0.8125rem] text-ink-soft">
              <span>{clinicConfig.professional.name}</span>
              <span className="tracking-[0.06em] tabular-nums">{clinicConfig.professional.crm}</span>
            </figcaption>
          </figure>
        )}

        <div className="lg:col-span-7 lg:row-start-2">
          <p className="hero-body max-w-xl text-lead text-ink-soft">{hero.text}</p>

          <div className="hero-ctas mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppLink>{hero.primaryCta}</WhatsAppLink>
            <a href="#sobre" className="btn btn-secondary">
              {hero.secondaryCta}
              <Icon name="arrow" size={18} className="btn-arrow" />
            </a>
          </div>

          <p className="hero-deco mt-9 text-[0.875rem] text-ink-soft" aria-label="Modalidades de atendimento">
            {hero.modalities.join('  ·  ')}
          </p>
        </div>
      </div>
    </section>
  )
}
