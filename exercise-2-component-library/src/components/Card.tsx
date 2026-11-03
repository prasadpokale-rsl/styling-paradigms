import type { HTMLAttributes } from 'react'
import * as styles from './Card.css'

type CardProps = HTMLAttributes<HTMLElement>

function Card({ children, className, ...props }: CardProps) {
  return (
    <article
      className={[styles.card, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </article>
  )
}

export default Card
