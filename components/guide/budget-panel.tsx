'use client'

import { useState } from 'react'
import { Minus, Plus, Wallet } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BudgetTier, Country } from '@/lib/countries'
import { convert, formatMoney, getCurrencyCode, type HomeCurrency } from '@/lib/currency'
import { PanelHeading } from './panel-heading'
import { CurrencyToggle } from './currency-toggle'
import { CurrencyConverter } from './currency-converter'

const categories: { key: keyof Pick<BudgetTier, 'stay' | 'food' | 'transport' | 'activities'>; label: string; color: string }[] = [
  { key: 'stay', label: 'Stay', color: 'bg-chart-1' },
  { key: 'food', label: 'Food', color: 'bg-chart-2' },
  { key: 'transport', label: 'Transport', color: 'bg-chart-3' },
  { key: 'activities', label: 'Activities', color: 'bg-chart-4' },
]

const MIN_DAYS = 1
const MAX_DAYS = 30

export function BudgetPanel({ country }: { country: Country }) {
  const [days, setDays] = useState(7)
  const [currency, setCurrency] = useState<HomeCurrency>('USD')
  const money = (usdAmount: number) => formatMoney(convert(usdAmount, 'USD', currency), currency)

  return (
    <div>
      <PanelHeading
        icon={Wallet}
        title="Budget Estimation"
        description={`Approximate per-person costs in ${currency}, excluding international flights.`}
      >
        <div className="flex flex-wrap items-center gap-3">
        <CurrencyToggle value={currency} onChange={setCurrency} />
        <div className="flex items-center gap-3 rounded-full border border-border bg-card p-1.5 pl-4">
          <span id="trip-length-label" className="text-sm font-medium">
            Trip length
          </span>
          <div role="group" aria-labelledby="trip-length-label" className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setDays((d) => Math.max(MIN_DAYS, d - 1))}
              disabled={days <= MIN_DAYS}
              className="flex size-8 items-center justify-center rounded-full bg-muted transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <Minus className="size-4" aria-hidden="true" />
              <span className="sr-only">Fewer days</span>
            </button>
            <output aria-live="polite" className="w-16 text-center text-sm font-bold tabular-nums">
              {days} {days === 1 ? 'day' : 'days'}
            </output>
            <button
              type="button"
              onClick={() => setDays((d) => Math.min(MAX_DAYS, d + 1))}
              disabled={days >= MAX_DAYS}
              className="flex size-8 items-center justify-center rounded-full bg-muted transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <Plus className="size-4" aria-hidden="true" />
              <span className="sr-only">More days</span>
            </button>
          </div>
        </div>
        </div>
      </PanelHeading>

      <ul className="grid gap-5 md:grid-cols-3">
        {country.budget.map((tier) => {
          const featured = tier.level === 'Mid-range'
          return (
            <li
              key={tier.level}
              className={cn(
                'relative flex flex-col rounded-3xl border p-6 transition-shadow hover:shadow-lg',
                featured ? 'border-foreground bg-foreground text-background' : 'border-border bg-card',
              )}
            >
              {featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-chart-3 px-3 py-1 text-xs font-bold text-foreground">
                  Most popular
                </span>
              )}
              <h4 className="font-display text-lg font-bold">{tier.level}</h4>
              <p className={cn('mt-1 text-sm', featured ? 'text-background/70' : 'text-muted-foreground')}>
                {tier.description}
              </p>

              <p className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold tracking-tight">{money(tier.perDay)}</span>
                <span className={cn('text-sm', featured ? 'text-background/70' : 'text-muted-foreground')}>/ day</span>
              </p>
              <p className={cn('mt-1 text-sm', featured ? 'text-background/80' : 'text-muted-foreground')}>
                <span className="font-semibold">{money(tier.perDay * days)}</span> for {days}{' '}
                {days === 1 ? 'day' : 'days'}
              </p>

              <div
                className={cn(
                  'mt-6 flex h-3 w-full gap-0.5 overflow-hidden rounded-full',
                  featured && '[&>.bg-chart-4]:bg-background/60',
                )}
                role="img"
                aria-label={`Daily breakdown: ${categories.map((c) => `${c.label} ${money(tier[c.key])}`).join(', ')}`}
              >
                {categories.map((c) => (
                  <span
                    key={c.key}
                    className={c.color}
                    style={{ width: `${(tier[c.key] / tier.perDay) * 100}%` }}
                  />
                ))}
              </div>

              <dl
                className={cn(
                  'mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm',
                  featured && '[&_.bg-chart-4]:bg-background/60',
                )}
              >
                {categories.map((c) => (
                  <div key={c.key} className="flex items-center justify-between gap-2">
                    <dt className={cn('flex items-center gap-2', featured ? 'text-background/80' : 'text-muted-foreground')}>
                      <span aria-hidden="true" className={cn('size-2.5 rounded-full', c.color)} />
                      {c.label}
                    </dt>
                    <dd className="font-semibold tabular-nums">{money(tier[c.key])}</dd>
                  </div>
                ))}
              </dl>
            </li>
          )
        })}
      </ul>

      <CurrencyConverter
        key={country.id}
        homeCurrency={currency}
        localCurrency={getCurrencyCode(country.currency)}
        countryName={country.name}
      />
    </div>
  )
}
