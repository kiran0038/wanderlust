export type Region = 'Asia' | 'Europe'

export type FoodIcon =
  | 'fish'
  | 'soup'
  | 'flame'
  | 'egg'
  | 'ice-cream'
  | 'pizza'
  | 'wheat'
  | 'cake'
  | 'coffee'
  | 'drumstick'
  | 'pot'
  | 'sandwich'
  | 'croissant'
  | 'wine'
  | 'cookie'
  | 'salad'
  | 'cup'
  | 'citrus'
  | 'beef'
  | 'candy'

export type Attraction = {
  name: string
  location: string
  image: string
  description: string
  highlights: string[]
  bestSeason: string
  category: string
}

export type Airport = {
  name: string
  code: string
  city: string
}

export type TransitOption = {
  mode: 'train' | 'metro' | 'bus'
  title: string
  description: string
}

export type BudgetTier = {
  level: 'Budget' | 'Mid-range' | 'Luxury'
  perDay: number
  stay: number
  food: number
  transport: number
  activities: number
  description: string
}

export type Dish = {
  name: string
  description: string
  kind: 'Signature dish' | 'Street food' | 'Dessert' | 'Drink'
  icon: FoodIcon
  tryAt: string
}

export type Country = {
  id: string
  name: string
  flag: string
  region: Region
  tagline: string
  intro: string
  capital: string
  currency: string
  language: string
  bestTime: string
  timezone: string
  attractions: Attraction[]
  travel: {
    airports: Airport[]
    visa: string
    visaTips: string[]
    transit: TransitOption[]
  }
  budget: BudgetTier[]
  food: Dish[]
}

export const countries: Country[] = [
  {
    id: 'japan',
    name: 'Japan',
    flag: '/flags/jp.svg',
    region: 'Asia',
    tagline: 'Ancient temples meet neon futures',
    intro:
      'From the serene shrines of Kyoto to the electric streets of Tokyo, Japan blends centuries-old tradition with cutting-edge modernity, all wrapped in impeccable hospitality.',
    capital: 'Tokyo',
    currency: 'Japanese Yen (JPY)',
    language: 'Japanese',
    bestTime: 'Mar–May, Oct–Nov',
    timezone: 'GMT+9',
    attractions: [
      {
        name: 'Fushimi Inari Taisha',
        location: 'Kyoto',
        image: '/images/fushimi-inari.jpg',
        description:
          'Thousands of vermilion torii gates wind up the forested slopes of sacred Mount Inari.',
        highlights: ['10,000+ torii gates', 'Free entry, open 24/7', 'Sunrise hike to the summit'],
        bestSeason: 'Spring & Autumn',
        category: 'Shrine',
      },
      {
        name: 'Mount Fuji',
        location: 'Yamanashi & Shizuoka',
        image: '/images/mount-fuji.jpg',
        description:
          'Japan’s iconic 3,776 m volcano, revered in art and poetry and visible from Tokyo on clear days.',
        highlights: ['Climbing season Jul–Sep', 'Views from Lake Kawaguchi', 'Chureito Pagoda photo spot'],
        bestSeason: 'Jul–Sep (climb), Nov–Feb (views)',
        category: 'Nature',
      },
      {
        name: 'Kinkaku-ji',
        location: 'Kyoto',
        image: '/images/kinkaku-ji.jpg',
        description:
          'The Golden Pavilion, covered in gold leaf, shimmers over a perfectly still mirror pond.',
        highlights: ['Gold-leaf Zen temple', 'Classic stroll garden', 'Arrive at opening'],
        bestSeason: 'November (autumn colors)',
        category: 'Temple',
      },
      {
        name: 'Shibuya Crossing',
        location: 'Tokyo',
        image: '/images/shibuya.jpg',
        description:
          'The world’s busiest pedestrian scramble, pulsing with neon signs and city energy.',
        highlights: ['Thousands cross at once', 'Shibuya Sky rooftop deck', 'Hachiko statue'],
        bestSeason: 'Year-round, after dark',
        category: 'City',
      },
    ],
    travel: {
      airports: [
        { name: 'Narita International', code: 'NRT', city: 'Tokyo' },
        { name: 'Haneda Airport', code: 'HND', city: 'Tokyo' },
        { name: 'Kansai International', code: 'KIX', city: 'Osaka' },
      ],
      visa: 'Visa-free short stays (typically up to 90 days) for 70+ countries including the US, UK, EU, Canada and Australia.',
      visaTips: [
        'Passport must be valid for your entire stay',
        'Register on Visit Japan Web for faster immigration & customs',
        'Carry proof of onward travel',
      ],
      transit: [
        {
          mode: 'train',
          title: 'Shinkansen & JR Pass',
          description:
            'Bullet trains link Tokyo, Kyoto, Osaka and Hiroshima in hours. Compare a JR Pass against individual tickets for your route.',
        },
        {
          mode: 'metro',
          title: 'Tokyo Metro & Toei',
          description:
            'Spotless, punctual subway lines. Tap in with a Suica or PASMO IC card, also usable at convenience stores.',
        },
        {
          mode: 'bus',
          title: 'City & Highway Buses',
          description:
            'Kyoto’s city buses reach most temples; overnight highway buses are a budget alternative between cities.',
        },
      ],
    },
    budget: [
      {
        level: 'Budget',
        perDay: 60,
        stay: 25,
        food: 18,
        transport: 10,
        activities: 7,
        description: 'Hostels & capsule hotels, konbini meals, local trains.',
      },
      {
        level: 'Mid-range',
        perDay: 150,
        stay: 70,
        food: 40,
        transport: 25,
        activities: 15,
        description: 'Business hotels, izakaya dinners, some Shinkansen rides.',
      },
      {
        level: 'Luxury',
        perDay: 400,
        stay: 220,
        food: 100,
        transport: 50,
        activities: 30,
        description: 'Ryokan with kaiseki dinners, Green Car trains, private guides.',
      },
    ],
    food: [
      {
        name: 'Sushi',
        description: 'Vinegared rice topped with impossibly fresh fish, best enjoyed at the counter.',
        kind: 'Signature dish',
        icon: 'fish',
        tryAt: 'Toyosu Market, Tokyo',
      },
      {
        name: 'Ramen',
        description: 'Rich broth, springy noodles and chashu pork. Every region has its own style.',
        kind: 'Signature dish',
        icon: 'soup',
        tryAt: 'Ramen Street, Tokyo Station',
      },
      {
        name: 'Takoyaki',
        description: 'Crispy-gooey octopus balls drizzled with sauce, mayo and bonito flakes.',
        kind: 'Street food',
        icon: 'flame',
        tryAt: 'Dotonbori, Osaka',
      },
      {
        name: 'Okonomiyaki',
        description: 'A savory cabbage pancake grilled on a teppan with your choice of fillings.',
        kind: 'Street food',
        icon: 'egg',
        tryAt: 'Hiroshima & Osaka',
      },
      {
        name: 'Matcha Sweets',
        description: 'Earthy green tea in soft-serve, parfaits and delicate wagashi.',
        kind: 'Dessert',
        icon: 'ice-cream',
        tryAt: 'Uji, near Kyoto',
      },
      {
        name: 'Tempura',
        description: 'Seafood and vegetables in a whisper-light, crisp batter.',
        kind: 'Signature dish',
        icon: 'drumstick',
        tryAt: 'Asakusa, Tokyo',
      },
    ],
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '/flags/it.svg',
    region: 'Europe',
    tagline: 'La dolce vita, one piazza at a time',
    intro:
      'Ancient ruins, Renaissance masterpieces, sun-drenched coastlines and the world’s most beloved cuisine — Italy rewards slow travel and big appetites.',
    capital: 'Rome',
    currency: 'Euro (EUR)',
    language: 'Italian',
    bestTime: 'Apr–Jun, Sep–Oct',
    timezone: 'GMT+1',
    attractions: [
      {
        name: 'Colosseum',
        location: 'Rome',
        image: '/images/colosseum.jpg',
        description:
          'The 2,000-year-old amphitheatre where gladiators once fought before 50,000 spectators.',
        highlights: ['Book timed tickets ahead', 'Combo with Roman Forum', 'Underground guided tours'],
        bestSeason: 'Apr–May, Sep–Oct',
        category: 'History',
      },
      {
        name: 'Grand Canal',
        location: 'Venice',
        image: '/images/venice.jpg',
        description:
          'Venice’s main waterway, lined with palazzi and crossed by the iconic Rialto Bridge.',
        highlights: ['Vaporetto Line 1 ride', 'Rialto Bridge & market', 'Sunset gondola ride'],
        bestSeason: 'Apr–Jun',
        category: 'City',
      },
      {
        name: 'Leaning Tower of Pisa',
        location: 'Pisa, Tuscany',
        image: '/images/pisa.jpg',
        description:
          'The famously tilting bell tower in the Piazza dei Miracoli, a UNESCO World Heritage Site.',
        highlights: ['Climb 251 steps', 'Piazza dei Miracoli', 'Easy day trip from Florence'],
        bestSeason: 'Mar–May',
        category: 'Landmark',
      },
      {
        name: 'Amalfi Coast',
        location: 'Campania',
        image: '/images/amalfi.jpg',
        description:
          'Pastel villages tumble down cliffs into the glittering Tyrrhenian Sea.',
        highlights: ['Positano & Ravello', 'Path of the Gods hike', 'Boat trips to Capri'],
        bestSeason: 'May–Jun, Sep',
        category: 'Coast',
      },
    ],
    travel: {
      airports: [
        { name: 'Leonardo da Vinci–Fiumicino', code: 'FCO', city: 'Rome' },
        { name: 'Milan Malpensa', code: 'MXP', city: 'Milan' },
        { name: 'Venice Marco Polo', code: 'VCE', city: 'Venice' },
      ],
      visa: 'Part of the Schengen Area. Many nationalities can visit visa-free for up to 90 days within any 180-day period.',
      visaTips: [
        'Check whether ETIAS pre-authorization applies to you',
        'Passport valid 3+ months beyond departure',
        'Entry/Exit System (EES) records biometrics at the border',
      ],
      transit: [
        {
          mode: 'train',
          title: 'Frecciarossa & Italo',
          description:
            'High-speed trains connect Rome, Florence, Venice, Milan and Naples. Book early for the best fares.',
        },
        {
          mode: 'metro',
          title: 'City Metros & Trams',
          description:
            'Rome and Milan have metro systems — tap a contactless card at the gates. Validate paper tickets on trams.',
        },
        {
          mode: 'bus',
          title: 'Vaporetto & Coastal Buses',
          description:
            'Venice runs on water buses; SITA buses and ferries hop between Amalfi Coast towns.',
        },
      ],
    },
    budget: [
      {
        level: 'Budget',
        perDay: 75,
        stay: 30,
        food: 22,
        transport: 12,
        activities: 11,
        description: 'Hostels, pizza al taglio, regional trains.',
      },
      {
        level: 'Mid-range',
        perDay: 180,
        stay: 90,
        food: 50,
        transport: 20,
        activities: 20,
        description: 'Boutique B&Bs, trattoria dinners, high-speed rail.',
      },
      {
        level: 'Luxury',
        perDay: 500,
        stay: 300,
        food: 120,
        transport: 45,
        activities: 35,
        description: 'Palazzo hotels, Michelin dining, private boat tours.',
      },
    ],
    food: [
      {
        name: 'Neapolitan Pizza',
        description: 'Blistered, wood-fired crust with San Marzano tomatoes and fior di latte.',
        kind: 'Signature dish',
        icon: 'pizza',
        tryAt: 'Naples',
      },
      {
        name: 'Carbonara',
        description: 'Roman pasta with guanciale, egg yolk, pecorino and black pepper — no cream.',
        kind: 'Signature dish',
        icon: 'wheat',
        tryAt: 'Trastevere, Rome',
      },
      {
        name: 'Gelato',
        description: 'Dense, silky and intensely flavored. Look for muted colors and metal tubs.',
        kind: 'Dessert',
        icon: 'ice-cream',
        tryAt: 'Florence',
      },
      {
        name: 'Arancini',
        description: 'Golden fried rice balls stuffed with ragù, peas and melting mozzarella.',
        kind: 'Street food',
        icon: 'flame',
        tryAt: 'Palermo, Sicily',
      },
      {
        name: 'Tiramisu',
        description: 'Espresso-soaked ladyfingers layered with mascarpone and cocoa.',
        kind: 'Dessert',
        icon: 'cake',
        tryAt: 'Treviso, Veneto',
      },
      {
        name: 'Espresso',
        description: 'Drunk standing at the bar, quickly — and never a cappuccino after noon.',
        kind: 'Drink',
        icon: 'coffee',
        tryAt: 'Any local bar',
      },
    ],
  },
  {
    id: 'india',
    name: 'India',
    flag: '/flags/in.svg',
    region: 'Asia',
    tagline: 'A thousand cultures, one unforgettable journey',
    intro:
      'Marble mausoleums, desert forts, sacred rivers and tropical backwaters — India is a sensory feast where every state feels like a new country.',
    capital: 'New Delhi',
    currency: 'Indian Rupee (INR)',
    language: 'Hindi & English',
    bestTime: 'Oct–Mar',
    timezone: 'GMT+5:30',
    attractions: [
      {
        name: 'Taj Mahal',
        location: 'Agra, Uttar Pradesh',
        image: '/images/taj-mahal.jpg',
        description:
          'An ivory-white marble mausoleum and enduring symbol of love, built by Shah Jahan.',
        highlights: ['Closed on Fridays', 'Sunrise for soft light', 'Sunset view from Mehtab Bagh'],
        bestSeason: 'Oct–Mar',
        category: 'Monument',
      },
      {
        name: 'Amber Fort',
        location: 'Jaipur, Rajasthan',
        image: '/images/amber-fort.jpg',
        description:
          'A honey-colored hilltop fort blending Rajput and Mughal styles above Maota Lake.',
        highlights: ['Sheesh Mahal mirror palace', 'Evening light & sound show', 'On the Golden Triangle'],
        bestSeason: 'Nov–Feb',
        category: 'Fort',
      },
      {
        name: 'Ghats of Varanasi',
        location: 'Varanasi, Uttar Pradesh',
        image: '/images/varanasi.jpg',
        description:
          'Stone steps descend to the sacred Ganges in one of the world’s oldest living cities.',
        highlights: ['Ganga Aarti ceremony', 'Sunrise boat ride', 'Winding old-city lanes'],
        bestSeason: 'Oct–Mar',
        category: 'Spiritual',
      },
      {
        name: 'Kerala Backwaters',
        location: 'Alleppey, Kerala',
        image: '/images/kerala.jpg',
        description:
          'A tranquil network of palm-fringed lagoons and canals, best explored by houseboat.',
        highlights: ['Overnight houseboat stay', 'Village canal kayaking', 'Fresh Kerala seafood'],
        bestSeason: 'Sep–Mar',
        category: 'Nature',
      },
    ],
    travel: {
      airports: [
        { name: 'Indira Gandhi International', code: 'DEL', city: 'New Delhi' },
        { name: 'Chhatrapati Shivaji Maharaj Intl', code: 'BOM', city: 'Mumbai' },
        { name: 'Kempegowda International', code: 'BLR', city: 'Bengaluru' },
      ],
      visa: 'Most visitors need a visa. The e-Visa is available to 160+ nationalities and is applied for online before travel.',
      visaTips: [
        'Apply on the official Indian e-Visa portal only',
        'Apply at least 4 days before arrival',
        'Tourist e-Visas come in 30-day, 1-year and 5-year options',
      ],
      transit: [
        {
          mode: 'train',
          title: 'Indian Railways',
          description:
            'One of the world’s largest rail networks. Book AC classes on IRCTC well ahead, especially in peak season.',
        },
        {
          mode: 'metro',
          title: 'Delhi & City Metros',
          description:
            'Modern, air-conditioned metros run in Delhi, Mumbai, Bengaluru and more. Women-only coaches available.',
        },
        {
          mode: 'bus',
          title: 'Buses, Autos & Ride-hailing',
          description:
            'State and private sleeper buses cover long routes; auto-rickshaws, Uber and Ola handle short hops.',
        },
      ],
    },
    budget: [
      {
        level: 'Budget',
        perDay: 30,
        stay: 12,
        food: 8,
        transport: 5,
        activities: 5,
        description: 'Guesthouses, street food, sleeper-class trains.',
      },
      {
        level: 'Mid-range',
        perDay: 80,
        stay: 40,
        food: 20,
        transport: 10,
        activities: 10,
        description: 'Heritage hotels, sit-down restaurants, AC trains.',
      },
      {
        level: 'Luxury',
        perDay: 300,
        stay: 200,
        food: 50,
        transport: 30,
        activities: 20,
        description: 'Palace hotels, private drivers, curated experiences.',
      },
    ],
    food: [
      {
        name: 'Butter Chicken',
        description: 'Tandoor-grilled chicken simmered in a velvety tomato, butter and cream sauce.',
        kind: 'Signature dish',
        icon: 'drumstick',
        tryAt: 'Old Delhi',
      },
      {
        name: 'Masala Dosa',
        description: 'A crisp, fermented rice crêpe filled with spiced potato, served with sambar.',
        kind: 'Signature dish',
        icon: 'wheat',
        tryAt: 'Bengaluru & Chennai',
      },
      {
        name: 'Pani Puri',
        description: 'Hollow crisp shells filled with tangy tamarind water, potato and chickpeas.',
        kind: 'Street food',
        icon: 'flame',
        tryAt: 'Mumbai street stalls',
      },
      {
        name: 'Hyderabadi Biryani',
        description: 'Fragrant basmati layered with marinated meat and saffron, slow-cooked dum style.',
        kind: 'Signature dish',
        icon: 'pot',
        tryAt: 'Hyderabad',
      },
      {
        name: 'Vada Pav',
        description: 'Mumbai’s favorite snack: a spiced potato fritter tucked into a soft bun.',
        kind: 'Street food',
        icon: 'sandwich',
        tryAt: 'Mumbai',
      },
      {
        name: 'Masala Chai',
        description: 'Milky black tea brewed with cardamom, ginger and cinnamon, sold on every corner.',
        kind: 'Drink',
        icon: 'coffee',
        tryAt: 'Everywhere',
      },
    ],
  },
  {
    id: 'france',
    name: 'France',
    flag: '/flags/fr.svg',
    region: 'Europe',
    tagline: 'Art, wine and joie de vivre',
    intro:
      'Grand boulevards, world-class museums, fairytale abbeys and vineyards stretching to the horizon — France sets the gold standard for culture and cuisine.',
    capital: 'Paris',
    currency: 'Euro (EUR)',
    language: 'French',
    bestTime: 'Apr–Jun, Sep–Oct',
    timezone: 'GMT+1',
    attractions: [
      {
        name: 'Eiffel Tower',
        location: 'Paris',
        image: '/images/eiffel.jpg',
        description:
          'Gustave Eiffel’s wrought-iron icon, offering sweeping views from its 276 m summit deck.',
        highlights: ['Summit at 276 m', 'Sparkles hourly after dark', 'Book lift tickets online'],
        bestSeason: 'Apr–Jun',
        category: 'Landmark',
      },
      {
        name: 'Mont-Saint-Michel',
        location: 'Normandy',
        image: '/images/mont-saint-michel.jpg',
        description:
          'A medieval abbey crowning a tidal island, surrounded by some of Europe’s highest tides.',
        highlights: ['Dramatic tidal bay', 'Gothic abbey', 'Guided bay walks at low tide'],
        bestSeason: 'May–Sep',
        category: 'Heritage',
      },
      {
        name: 'Palace of Versailles',
        location: 'Versailles',
        image: '/images/versailles.jpg',
        description:
          'The opulent royal residence of Louis XIV with its legendary gardens and fountains.',
        highlights: ['Hall of Mirrors', 'Musical fountain shows', 'Closed on Mondays'],
        bestSeason: 'Apr–Oct',
        category: 'Palace',
      },
      {
        name: 'Louvre Museum',
        location: 'Paris',
        image: '/images/louvre.jpg',
        description:
          'The world’s most visited museum, home to the Mona Lisa behind its glass pyramid.',
        highlights: ['Mona Lisa & Venus de Milo', 'Timed-entry tickets', 'Quieter on weekday mornings'],
        bestSeason: 'Year-round',
        category: 'Museum',
      },
    ],
    travel: {
      airports: [
        { name: 'Paris Charles de Gaulle', code: 'CDG', city: 'Paris' },
        { name: 'Paris Orly', code: 'ORY', city: 'Paris' },
        { name: 'Nice Côte d’Azur', code: 'NCE', city: 'Nice' },
      ],
      visa: 'Part of the Schengen Area. Many nationalities can visit visa-free for up to 90 days within any 180-day period.',
      visaTips: [
        'Check whether ETIAS pre-authorization applies to you',
        'Passport valid 3+ months beyond departure',
        'Keep accommodation proof handy at the border',
      ],
      transit: [
        {
          mode: 'train',
          title: 'TGV High-Speed Rail',
          description:
            'SNCF’s TGV reaches Lyon, Bordeaux, Marseille and Nice in a few hours. Ouigo offers low-cost fares.',
        },
        {
          mode: 'metro',
          title: 'Paris Métro & RER',
          description:
            '16 metro lines plus RER trains to the airports and Versailles. Load a Navigo Easy pass or use your phone.',
        },
        {
          mode: 'bus',
          title: 'Buses & Vélib’ Bikes',
          description:
            'City buses fill the gaps; Vélib’ bike-share and dedicated lanes make cycling around Paris easy.',
        },
      ],
    },
    budget: [
      {
        level: 'Budget',
        perDay: 85,
        stay: 35,
        food: 25,
        transport: 12,
        activities: 13,
        description: 'Hostels, boulangerie picnics, metro passes.',
      },
      {
        level: 'Mid-range',
        perDay: 200,
        stay: 100,
        food: 55,
        transport: 20,
        activities: 25,
        description: 'Charming hotels, bistro dinners, TGV trips.',
      },
      {
        level: 'Luxury',
        perDay: 600,
        stay: 350,
        food: 150,
        transport: 50,
        activities: 50,
        description: 'Palace hotels, gastronomic tasting menus, private tours.',
      },
    ],
    food: [
      {
        name: 'Croissant',
        description: 'Buttery, flaky layers best eaten warm from the boulangerie each morning.',
        kind: 'Signature dish',
        icon: 'croissant',
        tryAt: 'Any Paris boulangerie',
      },
      {
        name: 'Coq au Vin',
        description: 'Chicken braised slowly in red Burgundy wine with mushrooms and lardons.',
        kind: 'Signature dish',
        icon: 'wine',
        tryAt: 'Burgundy',
      },
      {
        name: 'Crêpes',
        description: 'Thin pancakes — savory galettes or sweet with Nutella — from street stands.',
        kind: 'Street food',
        icon: 'egg',
        tryAt: 'Brittany & Montparnasse',
      },
      {
        name: 'Croque Monsieur',
        description: 'Toasted ham and gruyère sandwich smothered in béchamel — the café classic.',
        kind: 'Street food',
        icon: 'sandwich',
        tryAt: 'Parisian cafés',
      },
      {
        name: 'Macarons',
        description: 'Delicate almond meringue shells sandwiching ganache in every color.',
        kind: 'Dessert',
        icon: 'cookie',
        tryAt: 'Paris pâtisseries',
      },
      {
        name: 'Ratatouille',
        description: 'A Provençal stew of slow-cooked summer vegetables and herbs.',
        kind: 'Signature dish',
        icon: 'salad',
        tryAt: 'Nice, Provence',
      },
    ],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '/flags/th.svg',
    region: 'Asia',
    tagline: 'Golden temples and turquoise shores',
    intro:
      'Glittering temples, buzzing night markets, misty northern hills and island paradises — Thailand delivers adventure and relaxation at a friendly price.',
    capital: 'Bangkok',
    currency: 'Thai Baht (THB)',
    language: 'Thai',
    bestTime: 'Nov–Feb',
    timezone: 'GMT+7',
    attractions: [
      {
        name: 'Grand Palace',
        location: 'Bangkok',
        image: '/images/grand-palace.jpg',
        description:
          'The dazzling former royal residence, home to the revered Emerald Buddha at Wat Phra Kaew.',
        highlights: ['Emerald Buddha', 'Strict dress code', 'Arrive at opening time'],
        bestSeason: 'Nov–Feb',
        category: 'Palace',
      },
      {
        name: 'Wat Arun',
        location: 'Bangkok',
        image: '/images/wat-arun.jpg',
        description:
          'The Temple of Dawn, its porcelain-studded spire rising beside the Chao Phraya River.',
        highlights: ['Porcelain mosaic spire', 'Cross by river ferry', 'Stunning at sunset'],
        bestSeason: 'Nov–Feb',
        category: 'Temple',
      },
      {
        name: 'Phi Phi Islands',
        location: 'Krabi Province',
        image: '/images/phi-phi.jpg',
        description:
          'Limestone cliffs, powder-white beaches and impossibly clear turquoise water.',
        highlights: ['Maya Bay', 'Snorkeling & diving', 'Longtail boat island-hopping'],
        bestSeason: 'Nov–Apr',
        category: 'Island',
      },
      {
        name: 'Wat Phra That Doi Suthep',
        location: 'Chiang Mai',
        image: '/images/doi-suthep.jpg',
        description:
          'A golden mountaintop temple overlooking Chiang Mai, reached by a dragon-lined stairway.',
        highlights: ['306-step naga staircase', 'Panoramic city views', 'Songthaew ride up'],
        bestSeason: 'Nov–Feb',
        category: 'Temple',
      },
    ],
    travel: {
      airports: [
        { name: 'Suvarnabhumi Airport', code: 'BKK', city: 'Bangkok' },
        { name: 'Don Mueang International', code: 'DMK', city: 'Bangkok' },
        { name: 'Phuket International', code: 'HKT', city: 'Phuket' },
      ],
      visa: 'Many nationalities qualify for visa-exempt entry for short tourist stays; others can apply for a Thai e-Visa online.',
      visaTips: [
        'Exemption length changes — verify current rules before booking',
        'Complete the Thailand Digital Arrival Card before arrival',
        'Passport valid 6+ months on entry',
      ],
      transit: [
        {
          mode: 'train',
          title: 'Overnight Sleeper Trains',
          description:
            'Comfortable sleeper trains run from Bangkok to Chiang Mai and the south. Domestic flights are cheap too.',
        },
        {
          mode: 'metro',
          title: 'BTS Skytrain & MRT',
          description:
            'Beat Bangkok traffic on the elevated BTS and underground MRT. Express river boats are scenic shortcuts.',
        },
        {
          mode: 'bus',
          title: 'Buses, Tuk-tuks & Grab',
          description:
            'VIP buses link major cities; agree tuk-tuk fares upfront or use Grab for metered rides.',
        },
      ],
    },
    budget: [
      {
        level: 'Budget',
        perDay: 35,
        stay: 12,
        food: 8,
        transport: 7,
        activities: 8,
        description: 'Hostels, night markets, local buses and ferries.',
      },
      {
        level: 'Mid-range',
        perDay: 90,
        stay: 45,
        food: 20,
        transport: 12,
        activities: 13,
        description: 'Boutique hotels, restaurant meals, island tours.',
      },
      {
        level: 'Luxury',
        perDay: 350,
        stay: 230,
        food: 60,
        transport: 30,
        activities: 30,
        description: 'Beachfront villas, spa days, private boat charters.',
      },
    ],
    food: [
      {
        name: 'Pad Thai',
        description: 'Stir-fried rice noodles with tamarind, egg, peanuts and lime, tossed in a wok.',
        kind: 'Street food',
        icon: 'flame',
        tryAt: 'Bangkok street carts',
      },
      {
        name: 'Tom Yum Goong',
        description: 'Hot and sour prawn soup fragrant with lemongrass, galangal and lime leaf.',
        kind: 'Signature dish',
        icon: 'soup',
        tryAt: 'Bangkok',
      },
      {
        name: 'Green Curry',
        description: 'Creamy coconut curry with Thai basil, eggplant and fiery green chilies.',
        kind: 'Signature dish',
        icon: 'pot',
        tryAt: 'Central Thailand',
      },
      {
        name: 'Som Tam',
        description: 'Pounded green papaya salad — sweet, sour, salty and spicy all at once.',
        kind: 'Street food',
        icon: 'salad',
        tryAt: 'Isaan stalls',
      },
      {
        name: 'Mango Sticky Rice',
        description: 'Ripe mango with sweet coconut-drenched glutinous rice.',
        kind: 'Dessert',
        icon: 'citrus',
        tryAt: 'Night markets',
      },
      {
        name: 'Thai Iced Tea',
        description: 'Strong, spiced black tea sweetened with condensed milk over crushed ice.',
        kind: 'Drink',
        icon: 'cup',
        tryAt: 'Everywhere',
      },
    ],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '/flags/ch.svg',
    region: 'Europe',
    tagline: 'Alpine peaks and storybook lakes',
    intro:
      'Snow-capped summits, glacier-fed lakes and impossibly scenic train rides — Switzerland is precision-engineered for unforgettable outdoor adventures.',
    capital: 'Bern',
    currency: 'Swiss Franc (CHF)',
    language: 'German, French, Italian',
    bestTime: 'Jun–Sep, Dec–Mar',
    timezone: 'GMT+1',
    attractions: [
      {
        name: 'Matterhorn',
        location: 'Zermatt, Valais',
        image: '/images/matterhorn.jpg',
        description:
          'The pyramid-shaped 4,478 m peak towering over the car-free village of Zermatt.',
        highlights: ['Car-free Zermatt', 'Gornergrat cog railway', 'Matterhorn Glacier Paradise'],
        bestSeason: 'Jun–Sep, Dec–Apr',
        category: 'Mountain',
      },
      {
        name: 'Chapel Bridge',
        location: 'Lucerne',
        image: '/images/lucerne.jpg',
        description:
          'A 14th-century covered wooden bridge spanning the Reuss River in Lucerne’s old town.',
        highlights: ['Painted gable panels', 'Lake Lucerne cruises', 'Day trip to Pilatus or Rigi'],
        bestSeason: 'May–Sep',
        category: 'Heritage',
      },
      {
        name: 'Jungfraujoch',
        location: 'Bernese Oberland',
        image: '/images/jungfraujoch.jpg',
        description:
          'The “Top of Europe” at 3,454 m, reached by Europe’s highest railway station.',
        highlights: ['Sphinx Observatory', 'Aletsch Glacier views', 'Ice Palace'],
        bestSeason: 'Jun–Sep',
        category: 'Mountain',
      },
      {
        name: 'Lauterbrunnen Valley',
        location: 'Bernese Oberland',
        image: '/images/lauterbrunnen.jpg',
        description:
          'A glacial valley framed by sheer cliffs and dozens of cascading waterfalls.',
        highlights: ['72 waterfalls', 'Staubbach Falls', 'Gateway to Wengen & Mürren'],
        bestSeason: 'Jun–Sep',
        category: 'Nature',
      },
    ],
    travel: {
      airports: [
        { name: 'Zurich Airport', code: 'ZRH', city: 'Zurich' },
        { name: 'Geneva Airport', code: 'GVA', city: 'Geneva' },
        { name: 'EuroAirport Basel-Mulhouse', code: 'BSL', city: 'Basel' },
      ],
      visa: 'Part of the Schengen Area (not the EU). Many nationalities can visit visa-free for up to 90 days within any 180-day period.',
      visaTips: [
        'Check whether ETIAS pre-authorization applies to you',
        'Passport valid 3+ months beyond departure',
        'Swiss Franc is used — not the Euro',
      ],
      transit: [
        {
          mode: 'train',
          title: 'SBB & Scenic Railways',
          description:
            'Famously punctual trains reach almost everywhere. Glacier Express and Bernina Express are bucket-list rides.',
        },
        {
          mode: 'metro',
          title: 'Swiss Travel Pass',
          description:
            'One pass covers trains, trams, buses and boats nationwide, plus free entry to 500+ museums.',
        },
        {
          mode: 'bus',
          title: 'PostBus Network',
          description:
            'Iconic yellow PostBuses climb mountain passes and serve villages trains can’t reach.',
        },
      ],
    },
    budget: [
      {
        level: 'Budget',
        perDay: 120,
        stay: 55,
        food: 30,
        transport: 20,
        activities: 15,
        description: 'Hostels, supermarket meals, Half Fare Card.',
      },
      {
        level: 'Mid-range',
        perDay: 280,
        stay: 150,
        food: 70,
        transport: 30,
        activities: 30,
        description: 'Chalet hotels, mountain restaurants, Travel Pass.',
      },
      {
        level: 'Luxury',
        perDay: 800,
        stay: 500,
        food: 170,
        transport: 60,
        activities: 70,
        description: 'Grand alpine resorts, fine dining, helicopter tours.',
      },
    ],
    food: [
      {
        name: 'Cheese Fondue',
        description: 'Gruyère and Vacherin melted with white wine — dip bread on long forks.',
        kind: 'Signature dish',
        icon: 'pot',
        tryAt: 'Gruyères & Geneva',
      },
      {
        name: 'Raclette',
        description: 'Melted cheese scraped over boiled potatoes, pickles and pearl onions.',
        kind: 'Signature dish',
        icon: 'flame',
        tryAt: 'Valais',
      },
      {
        name: 'Rösti',
        description: 'Golden, crispy grated potato pancake — Switzerland’s comfort food.',
        kind: 'Signature dish',
        icon: 'egg',
        tryAt: 'Bern & Zurich',
      },
      {
        name: 'Zürcher Geschnetzeltes',
        description: 'Sliced veal in a creamy mushroom and white wine sauce, served with rösti.',
        kind: 'Signature dish',
        icon: 'beef',
        tryAt: 'Zurich',
      },
      {
        name: 'Bratwurst',
        description: 'Grilled St. Gallen veal sausage served with crusty bread from street stands.',
        kind: 'Street food',
        icon: 'drumstick',
        tryAt: 'St. Gallen',
      },
      {
        name: 'Swiss Chocolate',
        description: 'Silky milk chocolate pioneered here — tour a factory for tastings.',
        kind: 'Dessert',
        icon: 'candy',
        tryAt: 'Broc & Zurich',
      },
    ],
  },
]
