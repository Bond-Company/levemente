import type { ReactNode } from 'react'
import { external, whatsappLink } from '../lib/links'
import { Icon } from './Icon'

type WhatsAppLinkProps = {
  children: ReactNode
  message?: string
  variant?: 'primary' | 'secondary' | 'light'
  size?: 'md' | 'sm'
  className?: string
  /** Texto extra para leitores de tela (ex.: o link abre em nova aba). */
  srHint?: string
}

// Botão único de agendamento: todos os CTAs do site usam este componente,
// garantindo o mesmo número e a mesma codificação da mensagem.
export function WhatsAppLink({
  children,
  message,
  variant = 'primary',
  size = 'md',
  className = '',
  srHint = '(abre o WhatsApp em nova aba)',
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappLink(message)}
      {...external}
      className={`btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`}
      data-cta="whatsapp"
    >
      <Icon name="whatsapp" size={size === 'sm' ? 18 : 20} />
      <span>{children}</span>
      <span className="sr-only"> {srHint}</span>
    </a>
  )
}
