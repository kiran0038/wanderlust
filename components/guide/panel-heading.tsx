import type { LucideIcon } from 'lucide-react'

type PanelHeadingProps = {
  icon: LucideIcon
  title: string
  description: string
  children?: React.ReactNode
}

export function PanelHeading({ icon: Icon, title, description, children }: PanelHeadingProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      {children}
    </div>
  )
}
