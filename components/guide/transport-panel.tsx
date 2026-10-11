import { BusFront, FileCheck, Info, Plane, Ticket, TrainFront } from 'lucide-react'
import type { Country, TransitOption } from '@/lib/countries'
import { PanelHeading } from './panel-heading'

const transitIcons: Record<TransitOption['mode'], typeof TrainFront> = {
  train: TrainFront,
  metro: Ticket,
  bus: BusFront,
}

export function TransportPanel({ country }: { country: Country }) {
  const { airports, visa, visaTips, transit } = country.travel

  return (
    <div>
      <PanelHeading
        icon={Plane}
        title="How to Get There"
        description={`Airports, entry requirements and getting around ${country.name}.`}
      />

      <div className="grid gap-5 lg:grid-cols-5">
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-3">
          <h4 className="flex items-center gap-2 font-display text-lg font-bold">
            <Plane className="size-5 text-primary" aria-hidden="true" />
            International airports
          </h4>
          <ul className="mt-4 flex flex-col gap-3">
            {airports.map((ap) => (
              <li key={ap.code} className="flex items-center gap-4 rounded-2xl bg-muted p-3">
                <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-foreground font-mono text-lg font-bold tracking-wider text-background">
                  {ap.code}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{ap.name}</p>
                  <p className="text-sm text-muted-foreground">{ap.city}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-3xl bg-primary p-6 text-primary-foreground lg:col-span-2">
          <h4 className="flex items-center gap-2 font-display text-lg font-bold">
            <FileCheck className="size-5" aria-hidden="true" />
            Visa guidelines
          </h4>
          <p className="mt-3 leading-relaxed">{visa}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {visaTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-primary-foreground/90">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-chart-3" />
                {tip}
              </li>
            ))}
          </ul>
          <p className="mt-auto flex items-start gap-2 pt-5 text-xs text-primary-foreground/75">
            <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
            Entry rules change frequently. Confirm with official government sources before booking.
          </p>
        </div>
      </div>

      <h4 className="mt-10 mb-4 font-display text-lg font-bold">Getting around locally</h4>
      <ul className="grid gap-5 md:grid-cols-3">
        {transit.map((t) => {
          const Icon = transitIcons[t.mode]
          return (
            <li key={t.title} className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-xs font-semibold tracking-wide text-primary uppercase">
                {t.mode === 'train' ? 'Trains' : t.mode === 'metro' ? 'Metro & passes' : 'Buses & more'}
              </p>
              <h5 className="mt-1 font-display text-lg font-bold">{t.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
