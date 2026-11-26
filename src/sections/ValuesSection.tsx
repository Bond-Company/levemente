import { copy } from '../content/copy'

// Capítulo escuro: três frases em escala máxima, uma por "página".
// Cada uma fica nítida conforme sobe na tela (ver .value-line em index.css).
export function ValuesSection() {
  const { values } = copy

  return (
    <section aria-label={values.eyebrow} className="on-dark bg-petrol-950 py-[var(--spacing-section)] text-sand-50">
      <div className="container-page">
        <p className="eyebrow">{values.eyebrow}</p>
        <ul className="mt-16 space-y-[clamp(5rem,3rem+10vh,11rem)] lg:mt-24">
          {values.items.map((value, index) => (
            <li key={value} className={`value-line ${index % 2 === 1 ? 'lg:ml-[33%]' : ''}`}>
              <p className="serif max-w-[15ch] text-monument font-[320] tracking-[-0.03em] text-sand-50">{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
