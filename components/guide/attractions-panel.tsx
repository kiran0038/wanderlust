import Image from 'next/image'
import { CalendarDays, Check, MapPin } from 'lucide-react'
import type { Country } from '@/lib/countries'
import { PanelHeading } from './panel-heading'

export function AttractionsPanel({ country }: { country: Country }) {
  return (
    <div>
      <PanelHeading
        icon={MapPin}
        title="Top Tourist Attractions"
        description={`The landmarks you shouldn’t miss in ${country.name}.`}
      />
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {country.attractions.map((a) => (
          <li
            key={a.name}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={a.image}
                alt={`${a.name} in ${a.location}`}
                fill
                sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <h4 className="font-display text-lg leading-tight font-bold">{a.name}</h4>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" aria-hidden="true" />
                  {a.location}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              <ul className="flex flex-col gap-1.5">
                {a.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-2 rounded-2xl bg-chart-3/25 px-3 py-2 text-sm">
                <CalendarDays className="size-4 shrink-0 text-foreground" aria-hidden="true" />
                <span>
                  <span className="sr-only">Best season: </span>
                  <span className="font-semibold">{a.bestSeason}</span>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
