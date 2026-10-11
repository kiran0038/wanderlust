import {
  Beef,
  CakeSlice,
  Candy,
  Citrus,
  Coffee,
  Cookie,
  CookingPot,
  Croissant,
  CupSoda,
  Drumstick,
  Egg,
  Fish,
  Flame,
  IceCreamCone,
  MapPin,
  Pizza,
  Salad,
  Sandwich,
  Soup,
  UtensilsCrossed,
  Wheat,
  Wine,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Country, Dish, FoodIcon } from '@/lib/countries'
import { PanelHeading } from './panel-heading'

const icons: Record<FoodIcon, LucideIcon> = {
  fish: Fish,
  soup: Soup,
  flame: Flame,
  egg: Egg,
  'ice-cream': IceCreamCone,
  pizza: Pizza,
  wheat: Wheat,
  cake: CakeSlice,
  coffee: Coffee,
  drumstick: Drumstick,
  pot: CookingPot,
  sandwich: Sandwich,
  croissant: Croissant,
  wine: Wine,
  cookie: Cookie,
  salad: Salad,
  cup: CupSoda,
  citrus: Citrus,
  beef: Beef,
  candy: Candy,
}

const kindStyles: Record<Dish['kind'], { badge: string; icon: string }> = {
  'Signature dish': { badge: 'bg-secondary text-secondary-foreground', icon: 'bg-primary text-primary-foreground' },
  'Street food': { badge: 'bg-accent/20 text-foreground', icon: 'bg-accent text-accent-foreground' },
  Dessert: { badge: 'bg-chart-3/30 text-foreground', icon: 'bg-chart-3 text-foreground' },
  Drink: { badge: 'bg-chart-4/15 text-chart-4', icon: 'bg-chart-4 text-background' },
}

export function FoodPanel({ country }: { country: Country }) {
  return (
    <div>
      <PanelHeading
        icon={UtensilsCrossed}
        title="Famous Food & Cuisine"
        description={`Must-try dishes and street eats from ${country.name}.`}
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {country.food.map((dish) => {
          const Icon = icons[dish.icon]
          const style = kindStyles[dish.kind]
          return (
            <li
              key={dish.name}
              className="flex gap-4 rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={cn('flex size-14 shrink-0 items-center justify-center rounded-2xl', style.icon)}>
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-display text-lg leading-tight font-bold">{dish.name}</h4>
                  <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-semibold', style.badge)}>{dish.kind}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
                <p className="flex items-center gap-1 text-xs font-medium">
                  <MapPin className="size-3 text-primary" aria-hidden="true" />
                  Try it: {dish.tryAt}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
