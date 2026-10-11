'use client'

import { cn } from '@/lib/utils'
import { HOME_CURRENCIES, type HomeCurrency } from '@/lib/currency'

type CurrencyToggleProps = {
  value: HomeCurrency
  onChange: (value: HomeCurrency) => void
}

export function CurrencyToggle({ value, onChange }: CurrencyToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Display currency"
      className="flex items-center gap-1 rounded-full border border-border bg-card p-1.5"
    >
      {HOME_CURRENCIES.map((c) => {
        const active = c.code === value
        return (
          <button
            key={c.code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(c.code)}
            className={cn(
              'flex h-8 w-18 items-center justify-center gap-1 rounded-full text-sm font-bold transition-colors duration-200',
              active ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            <span aria-hidden="true">{c.symbol}</span>
            {c.code}
          </button>
        )
      })}
    </div>
  )
}
