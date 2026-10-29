import { Icon } from '../components/Icon'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { copy } from '../content/copy'

export function HeroSection() {
  const { hero } = copy

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="grain relative overflow-hidden pt-28 pb-[var(--spacing-section)] lg:pt-36"
    >
      {/* Forma orgânica de fundo */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-48 -z-10 w-[42rem] max-w-none text-petrol-100/70"
        viewBox="0 0 600 600"
      >
        <path
          fill="currentColor"
          d="M421 76c62 44 118 113 113 186-5 72-71 147-139 196-69 48-140 70-207 48C121 484 58 418 46 344 34 270 72 188 128 133 184 79 259 52 312 47c53-4 66 0 109 29Z"
        />
      </svg>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 xl:gap-20">
        <div className="hero-in max-w-[44rem]">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-6 text-display">
            {hero.titleStart}{' '}
            <em className="font-[350] text-petrol-700 italic">{hero.titleEmphasis}</em>
          </h1>
          <p className="mt-7 max-w-xl text-lead text-ink-soft">{hero.text}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppLink>{hero.primaryCta}</WhatsAppLink>
            <a href="#sobre" className="btn btn-secondary">
              {hero.secondaryCta}
              <Icon name="arrow" size={18} className="btn-arrow" />
            </a>
          </div>

          <ul
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] text-ink-soft"
            aria-label="Modalidades de atendimento"
          >
            <li className="inline-flex items-center gap-2.5">
              <span className="inline-flex size-9 items-center justify-center rounded-pill bg-petrol-50 text-petrol-700">
                <Icon name="door" size={18} />
              </span>
              {hero.modalities[0]}
            </li>
            <li aria-hidden="true" className="hidden h-4 w-px bg-clay-400/70 sm:block" />
            <li className="inline-flex items-center gap-2.5">
              <span className="inline-flex size-9 items-center justify-center rounded-pill bg-petrol-50 text-petrol-700">
                <Icon name="video" size={18} />
              </span>
              {hero.modalities[1]}
            </li>
          </ul>
        </div>

        {/* Logo oficial centralizada num círculo com contorno concêntrico. */}
        <div className="hero-in hero-in-late relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[28rem]">
          <div aria-hidden="true" className="absolute inset-0 rounded-full bg-petrol-50" />
          <div aria-hidden="true" className="absolute -inset-[4%] rounded-full border border-clay-400/50" />
          <img
            src="/Logo.svg"
            alt="LeveMente"
            width={1933}
            height={1605}
            fetchPriority="high"
            className="absolute top-[51.5%] left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  )
}
