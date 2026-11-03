import type { HTMLAttributes } from 'react'
import * as styles from './Badge.css'

export type BadgeVariant = 'success' | 'warning' | 'error'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

function Badge({
  children,
  className,
  variant = 'success',
  ...props
}: BadgeProps) {
  return (
    <span
      className={[styles.base, styles.variants[variant], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
