import type { CSSProperties } from 'react'
import { copy } from '../content/copy'

export function AboutSection() {
  const { about } = copy

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-[var(--spacing-section)]">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="sobre-title" className="mt-6 text-headline">
            {about.title}
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-14" data-reveal style={{ '--reveal-delay': 120 } as CSSProperties}>
          <p className="font-display text-[clamp(1.3rem,1.1rem+0.8vw,1.7rem)] leading-[1.5] font-[340] text-petrol-900">
            {about.text}
          </p>

          <ul className="mt-12 grid grid-cols-3 border-t border-clay-400/50" aria-label="Princípios do atendimento">
            {about.pillars.map((pillar, index) => (
              <li key={pillar} className="border-clay-400/50 pt-5 pr-3 [&:not(:first-child)]:border-l [&:not(:first-child)]:pl-4 sm:[&:not(:first-child)]:pl-6">
                <span className="block text-xs tracking-[0.2em] text-clay-600">0{index + 1}</span>
                <span className="mt-2 block text-[1.0625rem] font-medium text-petrol-900">{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
