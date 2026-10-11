'use client'

import { useMemo, useState } from 'react'
import { countries, type Country, type Region } from '@/lib/countries'
import { SiteHeader } from './site-header'
import { Hero } from './hero'
import { CountrySelector } from './country-selector'
import { CountryOverview } from './country-overview'
import { DetailTabs } from './detail-tabs'
import { SiteFooter } from './site-footer'

export type RegionFilter = 'All' | Region

function matchesQuery(country: Country, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const haystack = [
    country.name,
    country.capital,
    country.region,
    country.tagline,
    ...country.attractions.flatMap((a) => [a.name, a.location, a.category]),
    ...country.food.map((d) => d.name),
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(q)
}

export function TravelGuide() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<RegionFilter>('All')
  const [selectedId, setSelectedId] = useState(countries[0].id)

  const filtered = useMemo(
    () =>
      countries.filter(
        (c) => (region === 'All' || c.region === region) && matchesQuery(c, query),
      ),
    [query, region],
  )

  const selected = countries.find((c) => c.id === selectedId) ?? countries[0]

  function handleSelect(id: string) {
    setSelectedId(id)
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <Hero
          query={query}
          onQueryChange={setQuery}
          region={region}
          onRegionChange={setRegion}
          heroImage={selected.attractions[0].image}
          heroAlt={`${selected.attractions[0].name}, ${selected.name}`}
          resultCount={filtered.length}
        />
        <CountrySelector
          countries={filtered}
          selectedId={selected.id}
          onSelect={handleSelect}
          onReset={() => {
            setQuery('')
            setRegion('All')
          }}
        />
        <section
          id="details"
          aria-label={`${selected.name} travel details`}
          className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-20 sm:px-6 lg:px-8"
        >
          <CountryOverview key={selected.id} country={selected} />
          <DetailTabs country={selected} />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
