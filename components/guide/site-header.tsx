import { Compass } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Compass className="size-5" aria-hidden="true" />
          </span>
          Wanderlust
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm font-medium sm:flex">
          <a href="#destinations" className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            Destinations
          </a>
          <a href="#details" className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            Travel Guide
          </a>
        </nav>
        <a
          href="#destinations"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Start exploring
        </a>
      </div>
    </header>
  )
}
