import { useEffect, useState } from 'react'
import { external, whatsappLink } from '../lib/links'
import { Icon } from './Icon'

// Botão flutuante discreto. Aparece depois da primeira dobra e se recolhe
// quando a chamada final ou o rodapé estão na tela, para não cobrir outros botões.
export function WhatsAppButton() {
  const [pastHero, setPastHero] = useState(false)
  const [nearEnd, setNearEnd] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const targets = document.querySelectorAll('[data-hide-floating]')
    const visible = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setNearEnd(visible.size > 0)
    })
    targets.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const shown = pastHero && !nearEnd

  return (
    <a
      href={whatsappLink()}
      {...external}
      aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
      title="Agendar pelo WhatsApp"
      data-cta="whatsapp-floating"
      tabIndex={shown ? undefined : -1}
      aria-hidden={shown ? undefined : true}
      className={`fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex size-14 items-center justify-center rounded-pill bg-petrol-700 text-sand-50 shadow-lift ring-1 ring-white/15 transition-[opacity,transform,background-color] duration-500 ease-gentle hover:bg-petrol-800 sm:right-6 sm:bottom-6 ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Icon name="whatsapp" size={26} />
    </a>
  )
}
