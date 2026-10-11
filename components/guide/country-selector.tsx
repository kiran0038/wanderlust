'use client'

import Image from 'next/image'
import { Check, SearchX } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Country } from '@/lib/countries'

type CountrySelectorProps = {
  countries: Country[]
  selectedId: string
  onSelect: (id: string) => void
  onReset: () => void
}

export function CountrySelector({ countries, selectedId, onSelect, onReset }: CountrySelectorProps) {
  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">Top destinations</p>
          <h2 id="destinations-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Where to next?
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">Pick a country to explore its guide.</p>
      </div>

      {countries.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border bg-card px-6 py-14 text-center">
          <SearchX className="size-8 text-muted-foreground" aria-hidden="true" />
          <p className="font-semibold">No destinations match your search.</p>
          <button
            type="button"
            onClick={onReset}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {countries.map((country) => {
            const active = country.id === selectedId
            return (
              <li key={country.id}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => onSelect(country.id)}
                  className={cn(
                    'group relative flex h-full w-full flex-col items-start gap-3 rounded-2xl border-2 bg-card p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none',
                    active ? 'border-primary shadow-lg shadow-primary/10' : 'border-transparent shadow-sm',
                  )}
                >
                  <span className="relative block h-9 w-12 overflow-hidden rounded-md shadow-sm ring-1 ring-foreground/10">
                    <Image src={country.flag} alt="" fill sizes="48px" className="object-cover" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-lg font-bold">{country.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {country.capital} · {country.region}
                    </span>
                  </span>
                  <span className="line-clamp-2 text-sm leading-snug text-muted-foreground">{country.tagline}</span>
                  {active && (
                    <span className="absolute top-3 right-3 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
