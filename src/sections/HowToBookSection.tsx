import type { CSSProperties } from 'react'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { copy } from '../content/copy'

export function HowToBookSection() {
  const { howToBook } = copy

  return (
    <section aria-labelledby="agendar-title" className="py-[var(--spacing-section)]">
      <div className="container-page">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{howToBook.eyebrow}</p>
          <h2 id="agendar-title" className="mt-6 text-headline">
            {howToBook.title}
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-12">
          {howToBook.steps.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              style={{ '--reveal-delay': index * 120 } as CSSProperties}
              className="relative border-t border-clay-400/60 pt-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-[4.5rem] leading-none font-[300] text-petrol-700/25 italic"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 font-sans text-xl font-semibold tracking-normal text-petrol-900">
                <span className="sr-only">Etapa {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        <div
          className="mt-16 flex flex-col gap-8 rounded-[var(--radius-lg)] bg-petrol-50 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between"
          data-reveal
        >
          <p className="max-w-xl text-petrol-900">{howToBook.note}</p>
          <WhatsAppLink className="shrink-0">{howToBook.cta}</WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
