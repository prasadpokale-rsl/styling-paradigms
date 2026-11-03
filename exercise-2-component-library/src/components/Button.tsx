import type { ButtonHTMLAttributes } from 'react'
import * as styles from './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'small' | 'large'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

function Button({
  children,
  className,
  size = 'large',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[styles.base, styles.variants[variant], styles.sizes[size], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
