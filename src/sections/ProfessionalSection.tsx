import { useEffect, useRef } from 'react'
import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'
import { images } from '../content/images'

// A profissional: recorte de detalhe da foto (mãos e caderno) e o nome em
// escala grande. A imagem se revela uma única vez ao entrar na tela.
export function ProfessionalSection() {
  const { professional } = copy
  const photo = images.detail
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    if (!('IntersectionObserver' in window)) {
      frame.classList.add('is-revealed')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        frame.classList.add('is-revealed')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-labelledby="profissional-title" className="pb-[var(--spacing-section)]">
      <div className="container-page grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
        {photo && (
          <figure className="lg:col-span-5">
            <div
              ref={frameRef}
              className="img-reveal relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-md)] bg-sand-200 lg:max-w-none"
            >
              <picture>
                {photo.webpSrcSet && (
                  <source
                    type="image/webp"
                    srcSet={photo.webpSrcSet}
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 28rem, 100vw"
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
            </div>
          </figure>
        )}

        <div className="lg:col-span-6 lg:col-start-7 lg:pb-4">
          <p className="eyebrow">{professional.eyebrow}</p>
          <h2 id="profissional-title" className="mt-7 text-headline">
            {clinicConfig.professional.name}
          </h2>
          <p className="mt-5 text-sm font-semibold tracking-[0.08em] text-clay-600 tabular-nums">
            {clinicConfig.professional.crm}
          </p>

          <div className="mt-10 border-t hairline pt-8">
            <p className="serif text-[clamp(1.35rem,1.15rem+0.8vw,1.85rem)] leading-[1.3] font-[330] text-petrol-900 italic">
              {professional.title}
            </p>
            <p className="mt-5 max-w-lg text-ink-soft">{professional.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
