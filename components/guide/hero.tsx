'use client'

import Image from 'next/image'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { countries } from '@/lib/countries'
import type { RegionFilter } from './travel-guide'

const regions: RegionFilter[] = ['All', 'Asia', 'Europe']

const stats = [
  { label: 'Countries', value: countries.length },
  { label: 'Landmarks', value: countries.reduce((n, c) => n + c.attractions.length, 0) },
  { label: 'Local dishes', value: countries.reduce((n, c) => n + c.food.length, 0) },
]

type HeroProps = {
  query: string
  onQueryChange: (value: string) => void
  region: RegionFilter
  onRegionChange: (value: RegionFilter) => void
  heroImage: string
  heroAlt: string
  resultCount: number
}

export function Hero({
  query,
  onQueryChange,
  region,
  onRegionChange,
  heroImage,
  heroAlt,
  resultCount,
}: HeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-foreground">
        <Image
          key={heroImage}
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="(min-width: 1280px) 1248px, 100vw"
          className="-z-10 animate-in object-cover opacity-60 duration-700 fade-in-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/20"
        />

        <div className="flex flex-col gap-8 px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-background/15 px-3 py-1 text-xs font-semibold tracking-wide text-background uppercase backdrop-blur">
              Your next adventure starts here
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-background sm:text-6xl lg:text-7xl">
              <span className="text-chart-3">Wanderlust</span> Country Guide
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-background/85">
              Iconic landmarks, travel logistics, honest budgets and the dishes locals love — everything you need
              to plan a trip, in one place.
            </p>
          </div>

          <div className="flex max-w-3xl flex-col gap-3">
            <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
              <label htmlFor="country-search" className="sr-only">
                Search countries, cities, landmarks or dishes
              </label>
              <Search
                className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="country-search"
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search “Kyoto”, “Eiffel”, “pad thai”…"
                autoComplete="off"
                className="h-14 w-full rounded-full border-0 bg-card pr-14 pl-13 text-base text-foreground shadow-lg outline-none placeholder:text-muted-foreground focus-visible:ring-4 focus-visible:ring-primary/40 [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => onQueryChange('')}
                  className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" aria-hidden="true" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
            </form>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-background/70">Region:</span>
              {regions.map((r) => (
                <button
                  key={r}
                  type="button"
                  aria-pressed={region === r}
                  onClick={() => onRegionChange(r)}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-semibold transition-colors',
                    region === r
                      ? 'bg-chart-3 text-foreground'
                      : 'bg-background/15 text-background backdrop-blur hover:bg-background/25',
                  )}
                >
                  {r}
                </button>
              ))}
              <span className="ml-auto text-sm text-background/70" aria-live="polite">
                {resultCount} {resultCount === 1 ? 'destination' : 'destinations'}
              </span>
            </div>
          </div>

          <dl className="grid max-w-md grid-cols-3 gap-4 border-t border-background/20 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-background/70">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-background sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
