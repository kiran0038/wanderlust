export type HomeCurrency = 'USD' | 'EUR'

export const HOME_CURRENCIES: { code: HomeCurrency; symbol: string; label: string }[] = [
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
]

// Indicative sample rates: units of each currency per 1 USD.
export const RATES_PER_USD: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  JPY: 150,
  INR: 83.5,
  THB: 35.5,
  CHF: 0.88,
}

export const CURRENCY_NAMES: Record<string, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  JPY: 'Japanese Yen',
  INR: 'Indian Rupee',
  THB: 'Thai Baht',
  CHF: 'Swiss Franc',
}

export function getCurrencyCode(currencyLabel: string): string {
  return currencyLabel.match(/\(([A-Z]{3})\)/)?.[1] ?? 'USD'
}

export function convert(amount: number, from: string, to: string): number {
  const fromRate = RATES_PER_USD[from] ?? 1
  const toRate = RATES_PER_USD[to] ?? 1
  return (amount / fromRate) * toRate
}

const formatterCache = new Map<string, Intl.NumberFormat>()

export function formatMoney(amount: number, currency: string, precise = false): string {
  const wholeOnly = !precise || currency === 'JPY' || amount >= 1000
  const key = `${currency}-${wholeOnly}`
  let formatter = formatterCache.get(key)
  if (!formatter) {
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: wholeOnly ? 0 : 2,
      maximumFractionDigits: wholeOnly ? 0 : 2,
    })
    formatterCache.set(key, formatter)
  }
  return formatter.format(amount)
}
