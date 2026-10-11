'use client'

import { useId, useState } from 'react'
import { ArrowLeftRight, Coins } from 'lucide-react'
import { CURRENCY_NAMES, convert, formatMoney, type HomeCurrency } from '@/lib/currency'

const QUICK_AMOUNTS = [10, 50, 100, 500]

type CurrencyConverterProps = {
  homeCurrency: HomeCurrency
  localCurrency: string
  countryName: string
}

export function CurrencyConverter({ homeCurrency, localCurrency, countryName }: CurrencyConverterProps) {
  const inputId = useId()
  const [amount, setAmount] = useState('100')
  const [reversed, setReversed] = useState(false)

  const sameCurrency = homeCurrency === localCurrency
  const target = sameCurrency ? (homeCurrency === 'USD' ? 'EUR' : 'USD') : localCurrency
  const from = reversed ? target : homeCurrency
  const to = reversed ? homeCurrency : target

  const numeric = Number.parseFloat(amount)
  const valid = Number.isFinite(numeric) && numeric >= 0
  const result = valid ? convert(numeric, from, to) : 0
  const unitRate = convert(1, from, to)

  return (
    <section
      aria-labelledby={`${inputId}-title`}
      className="mt-6 overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:gap-8">
        <div className="md:w-56 md:shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-chart-3 text-foreground">
              <Coins className="size-5" aria-hidden="true" />
            </span>
            <h4 id={`${inputId}-title`} className="font-display text-lg font-bold leading-tight">
              Quick Currency Converter
            </h4>
          </div>
          <p className="mt-3 text-sm text-muted-foreground text-pretty">
            {sameCurrency
              ? `${countryName} uses the ${CURRENCY_NAMES[localCurrency]}, so no exchange is needed. Compare with ${CURRENCY_NAMES[target]} instead.`
              : `Estimate prices in ${countryName} at indicative sample rates.`}
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center rounded-2xl border border-input bg-background px-4 focus-within:ring-2 focus-within:ring-ring">
              <label htmlFor={inputId} className="sr-only">
                Amount in {CURRENCY_NAMES[from]}
              </label>
              <input
                id={inputId}
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-14 w-full min-w-0 bg-transparent font-display text-2xl font-bold tabular-nums outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <span className="ml-2 rounded-full bg-muted px-2.5 py-1 text-xs font-bold">{from}</span>
            </div>

            <button
              type="button"
              onClick={() => setReversed((r) => !r)}
              className="flex size-11 shrink-0 items-center justify-center self-center rounded-full border border-border bg-background transition-transform duration-300 hover:rotate-180 hover:bg-muted"
            >
              <ArrowLeftRight className="size-4" aria-hidden="true" />
              <span className="sr-only">Swap conversion direction</span>
            </button>

            <div className="flex flex-1 items-center rounded-2xl bg-foreground px-4 text-background">
              <output
                htmlFor={inputId}
                aria-live="polite"
                className="flex h-14 w-full min-w-0 items-center truncate font-display text-2xl font-bold tabular-nums"
              >
                {valid ? formatMoney(result, to, true) : '—'}
              </output>
              <span className="ml-2 rounded-full bg-background/15 px-2.5 py-1 text-xs font-bold">{to}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Quick amounts">
              {QUICK_AMOUNTS.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAmount(String(value))}
                  aria-pressed={numeric === value}
                  className="rounded-full border border-border px-3 py-1 text-sm font-semibold tabular-nums transition-colors hover:bg-muted aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-background"
                >
                  {formatMoney(value, from)}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground tabular-nums">
              1 {from} = {unitRate < 0.01 ? unitRate.toFixed(4) : unitRate.toFixed(2)} {to}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
