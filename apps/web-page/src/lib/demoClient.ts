// Demo (mock) Supabase client used when no real Supabase credentials are present.
// It mimics the small subset of the supabase-js API the app uses, returning
// curated sample data so the whole experience can be browsed without a login
// or a backend. This powers the public "demo" deployment link.

const DEMO_USER = {
  id: 'demo-elite-0001-0002',
  email: 'socio@dukelife.app',
  full_name: 'Alexander Duke',
  phone: '+1 (305) 555-0142',
  avatar_url: undefined,
  membership_type: 'black_elite',
  created_at: '2022-06-01T00:00:00.000Z',
  updated_at: '2024-01-01T00:00:00.000Z',
};

const DEMO_SESSION = {
  access_token: 'demo-access-token',
  refresh_token: 'demo-refresh-token',
  expires_in: 3600,
  token_type: 'bearer',
  user: { id: DEMO_USER.id, email: DEMO_USER.email, role: 'authenticated' },
};

const destinations = [
  { id: 'd-rm', name: 'Riviera Maya', slug: 'riviera-maya', created_at: '2023-01-01T00:00:00Z' },
  { id: 'd-mia', name: 'Miami', slug: 'miami', created_at: '2023-01-01T00:00:00Z' },
  { id: 'd-dxb', name: 'Dubai', slug: 'dubai', created_at: '2023-01-01T00:00:00Z' },
];

const categories = [
  { id: 'c-bien', name: 'Bienestar', slug: 'bienestar', icon_name: 'Sparkles', created_at: '2023-01-01T00:00:00Z' },
  { id: 'c-lujo', name: 'Lujo', slug: 'lujo', icon_name: 'Crown', created_at: '2023-01-01T00:00:00Z' },
  { id: 'c-gastr', name: 'Gastronomía', slug: 'gastronomia', icon_name: 'Utensils', created_at: '2023-01-01T00:00:00Z' },
  { id: 'c-avent', name: 'Aventura', slug: 'aventura', icon_name: 'Mountain', created_at: '2023-01-01T00:00:00Z' },
];

const destById = (id: string) => destinations.find((d) => d.id === id);
const catById = (id: string) => categories.find((c) => c.id === id);

type Exp = {
  id: string;
  title: string;
  description: string;
  destination_id: string;
  category_id: string;
  image_url: string;
  base_price: number;
  gold_price: number;
  platinum_price: number;
  black_elite_price: number;
  black_elite_included: boolean;
  black_elite_monthly_limit: number;
  is_featured: boolean;
  created_at: string;
};

const rawExperiences: Exp[] = [
  {
    id: 'e-1', title: 'Yate Privado al Atardecer', destination_id: 'd-rm', category_id: 'c-lujo',
    description: 'Navega las aguas turquesa del Caribe a bordo de un yate privado con tripulación dedicada, champagne de cortesía y una puesta de sol inolvidable.',
    image_url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200',
    base_price: 2400, gold_price: 1800, platinum_price: 1400, black_elite_price: 0,
    black_elite_included: true, black_elite_monthly_limit: 1, is_featured: true, created_at: '2024-02-01T00:00:00Z',
  },
  {
    id: 'e-2', title: 'Ritual de Spa Maya', destination_id: 'd-rm', category_id: 'c-bien',
    description: 'Un ritual de bienestar ancestral en un cenote privado: temazcal, masaje a cuatro manos y terapias de sanación con cacao.',
    image_url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    base_price: 900, gold_price: 680, platinum_price: 520, black_elite_price: 380,
    black_elite_included: false, black_elite_monthly_limit: 0, is_featured: true, created_at: '2024-02-02T00:00:00Z',
  },
  {
    id: 'e-3', title: 'Cena de Autor en la Selva', destination_id: 'd-rm', category_id: 'c-gastr',
    description: 'Menú de degustación de 9 tiempos diseñado por un chef con estrella Michelin, servido bajo las estrellas en plena selva maya.',
    image_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
    base_price: 1200, gold_price: 950, platinum_price: 720, black_elite_price: 450,
    black_elite_included: false, black_elite_monthly_limit: 0, is_featured: true, created_at: '2024-02-03T00:00:00Z',
  },
  {
    id: 'e-4', title: 'Penthouse & Club Privado', destination_id: 'd-mia', category_id: 'c-lujo',
    description: 'Acceso VIP al club más exclusivo de Miami Beach, mesa reservada, anfitrión personal y traslado en vehículo de lujo.',
    image_url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    base_price: 3000, gold_price: 2300, platinum_price: 1800, black_elite_price: 0,
    black_elite_included: true, black_elite_monthly_limit: 1, is_featured: true, created_at: '2024-02-04T00:00:00Z',
  },
  {
    id: 'e-5', title: 'Vuelo Privado sobre la Bahía', destination_id: 'd-mia', category_id: 'c-avent',
    description: 'Un recorrido aéreo privado en helicóptero sobre el skyline de Miami y las islas, con copa de champagne al aterrizar.',
    image_url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200',
    base_price: 1600, gold_price: 1250, platinum_price: 980, black_elite_price: 690,
    black_elite_included: false, black_elite_monthly_limit: 0, is_featured: true, created_at: '2024-02-05T00:00:00Z',
  },
  {
    id: 'e-6', title: 'Safari de Dunas en Dubai', destination_id: 'd-dxb', category_id: 'c-avent',
    description: 'Aventura privada por el desierto en 4x4, paseo en camello al atardecer y cena beduina de lujo en un campamento exclusivo.',
    image_url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    base_price: 1400, gold_price: 1100, platinum_price: 840, black_elite_price: 600,
    black_elite_included: false, black_elite_monthly_limit: 0, is_featured: true, created_at: '2024-02-06T00:00:00Z',
  },
  {
    id: 'e-7', title: 'Suite Real Burj Al Arab', destination_id: 'd-dxb', category_id: 'c-lujo',
    description: 'Una noche en la legendaria suite del hotel más icónico de Dubai, con mayordomo privado, Rolls-Royce y cena de siete tiempos.',
    image_url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    base_price: 5000, gold_price: 4100, platinum_price: 3200, black_elite_price: 0,
    black_elite_included: true, black_elite_monthly_limit: 1, is_featured: true, created_at: '2024-02-07T00:00:00Z',
  },
  {
    id: 'e-8', title: 'Hammam Real & Bienestar', destination_id: 'd-dxb', category_id: 'c-bien',
    description: 'Experiencia de hammam tradicional en un spa de seis estrellas, con rituales de oro de 24k y terapias de relajación profunda.',
    image_url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1200',
    base_price: 1100, gold_price: 860, platinum_price: 640, black_elite_price: 420,
    black_elite_included: false, black_elite_monthly_limit: 0, is_featured: true, created_at: '2024-02-08T00:00:00Z',
  },
];

// Embed related destination/category objects, as the real queries do with joins.
const experiences = rawExperiences.map((e) => ({
  ...e,
  destinations: destById(e.destination_id),
  categories: catById(e.category_id),
}));

const expById = (id: string) => experiences.find((e) => e.id === id);

const courses = [
  {
    id: 'co-1', title: 'Mentalidad de Alto Patrimonio', mentor: 'Ricardo Salinas',
    description: 'Principios y hábitos para construir y preservar patrimonio generacional.',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    base_price: 1200, gold_discount: 20, platinum_discount: 40, black_elite_free: true, created_at: '2024-03-03T00:00:00Z',
  },
  {
    id: 'co-2', title: 'Inversión en Bienes Raíces de Lujo', mentor: 'Sofía Martínez',
    description: 'Estrategias para invertir en propiedades premium en mercados globales.',
    image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    base_price: 1500, gold_discount: 20, platinum_discount: 40, black_elite_free: true, created_at: '2024-03-02T00:00:00Z',
  },
  {
    id: 'co-3', title: 'Arte de Networking de Élite', mentor: 'James Whitman',
    description: 'Cómo construir relaciones de valor en círculos exclusivos.',
    image_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    base_price: 900, gold_discount: 15, platinum_discount: 35, black_elite_free: true, created_at: '2024-03-01T00:00:00Z',
  },
];

const daysFromNow = (n: number) => new Date(Date.now() + n * 86400000).toISOString();

const reservations = [
  {
    id: 'r-1', user_id: DEMO_USER.id, experience_id: 'e-1', reservation_date: daysFromNow(12),
    status: 'confirmed', price_paid: 0, qr_code: 'DEMO-QR-0001', people_count: 2, adults: 2, children: 0, infants: 0,
    created_at: daysFromNow(-2), experiences: expById('e-1'),
  },
  {
    id: 'r-2', user_id: DEMO_USER.id, experience_id: 'e-3', reservation_date: daysFromNow(-20),
    status: 'completed', price_paid: 450, qr_code: 'DEMO-QR-0002', people_count: 2, adults: 2, children: 0, infants: 0,
    created_at: daysFromNow(-30), experiences: expById('e-3'),
  },
];

const TABLES: Record<string, any[]> = {
  destinations,
  categories,
  experiences,
  courses,
  reservations,
  concierge_messages: [],
  users: [DEMO_USER],
};

// A minimal, thenable query builder that supports the chains used in the app.
function makeQuery(table: string) {
  const filters: Array<(r: any) => boolean> = [];
  const builder: any = {
    select: () => builder,
    eq: (col: string, val: any) => { filters.push((r) => r[col] === val); return builder; },
    neq: (col: string, val: any) => { filters.push((r) => r[col] !== val); return builder; },
    in: (col: string, vals: any[]) => { filters.push((r) => vals.includes(r[col])); return builder; },
    gte: () => builder,
    lte: () => builder,
    gt: () => builder,
    lt: () => builder,
    order: () => builder,
    limit: () => builder,
    range: () => builder,
    filter: () => builder,
    _rows: () => (TABLES[table] || []).filter((r) => filters.every((f) => f(r))),
    maybeSingle: () => Promise.resolve({ data: builder._rows()[0] ?? null, error: null }),
    single: () => Promise.resolve({ data: builder._rows()[0] ?? null, error: null }),
    then: (onF: any, onR?: any) =>
      Promise.resolve({ data: builder._rows(), error: null }).then(onF, onR),
  };
  return builder;
}

function makeWrite() {
  const w: any = {
    eq: () => w,
    select: () => w,
    single: () => Promise.resolve({ data: null, error: null }),
    maybeSingle: () => Promise.resolve({ data: null, error: null }),
    then: (onF: any, onR?: any) =>
      Promise.resolve({ data: null, error: null }).then(onF, onR),
  };
  return w;
}

export function createDemoClient(): any {
  return {
    auth: {
      getSession: async () => ({ data: { session: DEMO_SESSION }, error: null }),
      getUser: async () => ({ data: { user: DEMO_SESSION.user }, error: null }),
      onAuthStateChange: (_cb: any) => ({ data: { subscription: { unsubscribe() {} } } }),
      signInWithPassword: async () => ({ data: { session: DEMO_SESSION, user: DEMO_SESSION.user }, error: null }),
      signUp: async () => ({ data: { session: DEMO_SESSION, user: DEMO_SESSION.user }, error: null }),
      signOut: async () => ({ error: null }),
    },
    from: (table: string) => ({
      select: () => makeQuery(table),
      insert: () => makeWrite(),
      update: () => makeWrite(),
      upsert: () => makeWrite(),
      delete: () => makeWrite(),
    }),
    storage: {
      from: () => ({
        upload: async () => ({ data: { path: '' }, error: null }),
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
      }),
    },
    channel: () => {
      const ch: any = { on: () => ch, subscribe: () => ch };
      return ch;
    },
    removeChannel: () => {},
  };
}
