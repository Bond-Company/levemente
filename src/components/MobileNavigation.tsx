import { useEffect, useRef } from 'react'
import { clinicConfig, navigation } from '../config/clinic'
import { WhatsAppLink } from './WhatsAppLink'

type MobileNavigationProps = {
  open: boolean
  onClose: (restoreFocus?: boolean) => void
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const { body } = document
    const previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose(true)
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 64rem)').matches) onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open, onClose])

  return (
    <div
      id="menu-mobile"
      ref={panelRef}
      inert={!open}
      className={`fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto bg-sand-50 transition-[opacity,transform,visibility] lg:hidden ${
        open
          ? 'visible translate-y-0 opacity-100 duration-300 ease-[var(--ease-drawer)]'
          : 'invisible -translate-y-2 opacity-0 duration-200 ease-gentle'
      }`}
    >
      <nav aria-label="Menu" className="container-page flex min-h-full flex-col pt-6 pb-10">
        <ul className="divide-y divide-petrol-900/10 border-y border-petrol-900/10">
          {navigation.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => onClose()}
                className="flex items-baseline justify-between py-4 font-display text-[1.75rem] leading-tight text-petrol-900"
              >
                {item.label}
                <span className="font-sans text-xs tracking-[0.2em] text-clay-600" aria-hidden="true">
                  0{index + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 pt-10">
          <WhatsAppLink className="w-full">Agendar consulta pelo WhatsApp</WhatsAppLink>
          <p className="text-center text-sm text-ink-soft">
            {clinicConfig.address.building} · {clinicConfig.address.neighborhood}, {clinicConfig.address.city} – {clinicConfig.address.state}
          </p>
        </div>
      </nav>
    </div>
  )
}
