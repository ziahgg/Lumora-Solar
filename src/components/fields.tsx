import { useId, type ReactNode } from 'react'
import { Icon, type IconName } from './Icon'
import { cx } from './cx'

/* Figma "Form Field": 14px label, 8px gap, 52px input with 12px radius and line border */
const inputClass =
  'h-[52px] w-full rounded-xl border border-line bg-white px-4 t-body text-navy-900 placeholder:text-muted transition-colors focus:border-navy-900 focus:outline-none'

type FieldProps = {
  label: string
  name: string
  placeholder: string
  type?: string
  autoComplete?: string
  inputMode?: 'text' | 'numeric' | 'email' | 'tel'
  pattern?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
}

export function TextField({ label, onChange, ...props }: FieldProps) {
  const id = useId()
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="t-label text-navy-900">
        {label}
      </label>
      <input
        id={id}
        {...props}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={inputClass}
      />
    </div>
  )
}

type SelectProps = {
  label: string
  name: string
  placeholder: string
  options: string[]
  required?: boolean
  value?: string
  onChange?: (value: string) => void
}

export function SelectField({ label, placeholder, options, value, onChange, ...props }: SelectProps) {
  const id = useId()
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="t-label text-navy-900">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          {...props}
          value={value ?? ''}
          onChange={(e) => onChange?.(e.target.value)}
          className={cx(inputClass, 'cursor-pointer appearance-none pr-11', !value && 'text-muted')}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-navy-900">
              {o}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          size={18}
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
        />
      </div>
    </div>
  )
}

/* Figma "Segmented control": surface track, 4px padding, active option in navy */
export function Segmented<T extends string>({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string
  name: string
  options: { value: T; label: string; icon: IconName }[]
  value: T
  onChange: (value: T) => void
}) {
  return (
    <fieldset className="flex flex-col">
      <legend className="mb-2 t-label text-navy-900">{label}</legend>
      <div className="flex gap-1 rounded-xl bg-surface p-1">
        {options.map((o) => {
          const active = o.value === value
          return (
            <label
              key={o.value}
              className={cx(
                'flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-[9px] t-label transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-solar-500',
                active ? 'bg-navy-900 text-white' : 'text-body hover:bg-white/70',
              )}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={active}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              <Icon name={o.icon} size={16} className={active ? 'text-solar-500' : 'text-body'} />
              {o.label}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

export function FormNote({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx('t-small text-muted', className)}>{children}</p>
}
