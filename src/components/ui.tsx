import type { ReactNode } from 'react'
import { cx } from './cx'
import { Icon, type IconName } from './Icon'

/* Buttons — Figma "Button / *": pill, 6/6/6/22 padding, 15px label, 40px arrow disc */
type ButtonVariant = 'primary' | 'dark' | 'outline' | 'glass'

const buttonStyles: Record<ButtonVariant, { root: string; disc: string; icon: string }> = {
  primary: { root: 'bg-solar-500 text-navy-900 hover:bg-[#ffc71a]', disc: 'bg-navy-900', icon: 'text-white' },
  dark: { root: 'bg-navy-900 text-white hover:bg-navy-800', disc: 'bg-solar-500', icon: 'text-navy-900' },
  outline: {
    root: 'border border-navy-900 text-navy-900 hover:bg-navy-900/5',
    disc: 'bg-navy-900',
    icon: 'text-white',
  },
  glass: { root: 'border border-white bg-white text-ink-80 hover:bg-surface', disc: 'bg-white', icon: 'text-navy-900' },
}

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  type?: 'button' | 'submit'
  className?: string
}

export function Button({ children, variant = 'primary', href, type = 'button', className }: ButtonProps) {
  const s = buttonStyles[variant]
  const classes = cx(
    'group inline-flex shrink-0 items-center gap-3.5 rounded-full py-1.5 pr-1.5 pl-[22px] t-button whitespace-nowrap transition-colors',
    s.root,
    className,
  )
  const inner = (
    <>
      <span>{children}</span>
      <span className={cx('grid size-10 shrink-0 place-items-center rounded-full', s.disc)}>
        <Icon
          name="arrow-up-right"
          size={18}
          className={cx(s.icon, 'transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5')}
        />
      </span>
    </>
  )
  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} className={cx(classes, 'cursor-pointer')}>
      {inner}
    </button>
  )
}

/* Eyebrow pill — 7/14/7/12 padding, 7px solar dot, 12px uppercase label */
export function Eyebrow({ children, tone = 'light', className }: { children: ReactNode; tone?: 'light' | 'onDark'; className?: string }) {
  return (
    <span
      className={cx(
        'inline-flex w-fit items-center gap-2 rounded-full border py-[7px] pr-3.5 pl-3 t-eyebrow',
        tone === 'light' ? 'border-line bg-white text-navy-900' : 'border-white bg-white text-ink-80',
        className,
      )}
    >
      <span className="size-[7px] shrink-0 rounded-full bg-solar-500" aria-hidden="true" />
      {children}
    </span>
  )
}

/* Square icon badge — sizes from Figma "Icon badge" frames */
type BadgeSize = 40 | 44 | 48 | 52
const badgeBox: Record<BadgeSize, string> = {
  40: 'size-10 rounded-xl',
  44: 'size-11 rounded-xl',
  48: 'size-12 rounded-[14px]',
  52: 'size-[52px] rounded-[14px]',
}

export function IconBadge({
  icon,
  size = 44,
  iconSize = 22,
  className = 'bg-solar-100 text-navy-900',
}: {
  icon: IconName
  size?: BadgeSize
  iconSize?: number
  className?: string
}) {
  return (
    <span className={cx('grid shrink-0 place-items-center', badgeBox[size], className)}>
      <Icon name={icon} size={iconSize} />
    </span>
  )
}

/* Round check used in package features and the CTA checklist */
export function CheckDot({ className }: { className: string }) {
  return (
    <span className={cx('grid size-[22px] shrink-0 place-items-center rounded-full', className)}>
      <Icon name="check" size={13} />
    </span>
  )
}
