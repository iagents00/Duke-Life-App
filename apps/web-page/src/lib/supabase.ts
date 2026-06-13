import { createClient } from '@supabase/supabase-js';
import { createDemoClient } from './demoClient';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const hasRealConfig = !!(supabaseUrl && supabaseAnonKey);

// When no real credentials are present we fall back to a self-contained demo
// client with sample data, so the app is fully browsable as a public preview
// (no login, no backend required). The app still runs in this mode.
export const isDemoMode = !hasRealConfig;
export const isSupabaseConfigured = true;

if (isDemoMode) {
  console.info('Running in DEMO mode with sample data (no Supabase credentials set).');
}

export const supabase = hasRealConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createDemoClient();

export type MembershipType = 'gold' | 'platinum' | 'black_elite';

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  avatar_url?: string;
  membership_type: MembershipType;
  created_at: string;
  updated_at: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon_name: string;
  created_at: string;
}

export interface Experience {
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
  destinations?: Destination;
  categories?: Category;
}

export interface Reservation {
  id: string;
  user_id: string;
  experience_id: string;
  reservation_date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price_paid: number;
  qr_code: string;
  people_count?: number;
  adults?: number;
  children?: number;
  infants?: number;
  created_at: string;
  experiences?: Experience;
}

export interface ConciergeMessage {
  id: string;
  user_id: string;
  message: string;
  sender_type: 'user' | 'concierge';
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  mentor: string;
  image_url: string;
  base_price: number;
  gold_discount: number;
  platinum_discount: number;
  black_elite_free: boolean;
  created_at: string;
}
