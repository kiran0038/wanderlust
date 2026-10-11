import Image from 'next/image'
import { Banknote, CalendarDays, Clock, Landmark, Languages } from 'lucide-react'
import type { Country } from '@/lib/countries'

export function CountryOverview({ country }: { country: Country }) {
  const facts = [
    { icon: Landmark, label: 'Capital', value: country.capital },
    { icon: Banknote, label: 'Currency', value: country.currency },
    { icon: Languages, label: 'Language', value: country.language },
    { icon: CalendarDays, label: 'Best time', value: country.bestTime },
    { icon: Clock, label: 'Time zone', value: country.timezone },
  ]

  return (
    <div className="animate-in duration-500 fade-in-0 slide-in-from-bottom-3">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="relative block h-8 w-11 overflow-hidden rounded-md shadow-sm ring-1 ring-foreground/10">
              <Image src={country.flag} alt={`Flag of ${country.name}`} fill sizes="44px" className="object-cover" />
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              {country.region}
            </span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {country.name}
          </h2>
          <p className="mt-1 font-display text-xl font-medium text-primary">{country.tagline}</p>
          <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">{country.intro}</p>
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {facts.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="text-sm font-semibold">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}
