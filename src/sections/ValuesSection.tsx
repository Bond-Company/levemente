import type { CSSProperties } from 'react'
import { copy } from '../content/copy'

export function ValuesSection() {
  const { values } = copy

  return (
    <section
      aria-label={values.eyebrow}
      className="on-dark relative overflow-hidden bg-petrol-900 py-[var(--spacing-section)] text-sand-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 w-[38rem] -translate-y-1/2 text-petrol-800/70 sm:-right-24"
      >
        <div className="brand-symbol w-full" />
      </div>

      <div className="container-page relative">
        <p className="eyebrow" data-reveal>
          {values.eyebrow}
        </p>
        <ul className="mt-10 divide-y divide-sand-50/12 border-y border-sand-50/12 lg:mt-14">
          {values.items.map((value, index) => (
            <li
              key={value}
              data-reveal
              style={{ '--reveal-delay': index * 110 } as CSSProperties}
              className="flex items-baseline gap-6 py-7 sm:gap-10 sm:py-9"
            >
              <span className="w-8 shrink-0 text-sm tracking-[0.2em] text-clay-400">0{index + 1}</span>
              <p className="font-display text-[clamp(1.6rem,1.1rem+2.2vw,3rem)] leading-[1.12] font-[340] text-sand-50">
                {value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
