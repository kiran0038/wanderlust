'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { MapPin, Plane, UtensilsCrossed, Wallet } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Country } from '@/lib/countries'
import { AttractionsPanel } from './attractions-panel'
import { TransportPanel } from './transport-panel'
import { BudgetPanel } from './budget-panel'
import { FoodPanel } from './food-panel'

const tabs = [
  { id: 'attractions', label: 'Top Attractions', short: 'Sights', icon: MapPin },
  { id: 'transport', label: 'How to Get There', short: 'Travel', icon: Plane },
  { id: 'budget', label: 'Budget Estimation', short: 'Budget', icon: Wallet },
  { id: 'food', label: 'Food & Cuisine', short: 'Food', icon: UtensilsCrossed },
] as const

type TabId = (typeof tabs)[number]['id']

export function DetailTabs({ country }: { country: Country }) {
  const [active, setActive] = useState<TabId>('attractions')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const index = tabs.findIndex((t) => t.id === active)
    let next = index
    if (e.key === 'ArrowRight') next = (index + 1) % tabs.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = tabs.length - 1
    else return
    e.preventDefault()
    setActive(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label={`${country.name} guide sections`}
        onKeyDown={handleKeyDown}
        className="sticky top-16 z-30 -mx-4 grid grid-cols-4 gap-1 border-b border-border bg-background/90 px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-full sm:border sm:bg-card sm:p-1.5 sm:shadow-sm"
      >
        {tabs.map((tab, i) => {
          const Icon = tab.icon
          const selected = tab.id === active
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={cn(
                'flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-semibold transition-all duration-300 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none sm:flex-row sm:gap-2 sm:rounded-full sm:px-4 sm:py-2.5 sm:text-sm',
                selected
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="sm:hidden">{tab.short}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <div
        key={`${country.id}-${active}`}
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
        className="mt-8 animate-in duration-500 fade-in-0 slide-in-from-bottom-4 focus-visible:outline-none"
      >
        {active === 'attractions' && <AttractionsPanel country={country} />}
        {active === 'transport' && <TransportPanel country={country} />}
        {active === 'budget' && <BudgetPanel country={country} />}
        {active === 'food' && <FoodPanel country={country} />}
      </div>
    </div>
  )
}
