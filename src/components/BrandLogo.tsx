type BrandLogoProps = {
  /** inline: símbolo + nome lado a lado (cabeçalho). stacked: logo oficial completa. */
  variant?: 'inline' | 'stacked'
  tone?: 'brand' | 'light'
  className?: string
}

// Os arquivos em public/brand/ são gerados a partir de public/Logo.svg
// (npm run assets) sem alterar desenho nem proporções.
export function BrandLogo({ variant = 'inline', tone = 'brand', className = '' }: BrandLogoProps) {
  if (variant === 'stacked') {
    return (
      <img
        src={tone === 'light' ? '/brand/logo-light.svg' : '/Logo.svg'}
        alt="LeveMente"
        width={1933}
        height={1605}
        loading="lazy"
        decoding="async"
        className={className}
      />
    )
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/logo-symbol.svg"
        alt=""
        width={1088}
        height={1177}
        decoding="async"
        className="h-full w-auto"
      />
      <img
        src={tone === 'light' ? '/brand/logo-wordmark-light.svg' : '/brand/logo-wordmark.svg'}
        alt="LeveMente"
        width={1901}
        height={274}
        decoding="async"
        className="h-[42%] w-auto"
      />
    </span>
  )
}
