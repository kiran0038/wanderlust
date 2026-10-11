import { Compass } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 font-display font-semibold text-foreground">
          <Compass className="size-4 text-primary" aria-hidden="true" />
          Wanderlust Country Guide
        </p>
        <p className="max-w-xl text-pretty leading-relaxed">
          Budgets are approximate per-person daily estimates; exchange rates are indicative samples. Visa rules change often — always confirm
          with official government sources before you travel. Photos via Wikimedia Commons.
        </p>
      </div>
    </footer>
  )
}
