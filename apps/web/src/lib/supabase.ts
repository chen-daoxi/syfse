import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fdqrlbzphuwusunykhgs.supabase.co'
const supabaseAnonKey = 'sb_publishable_ZdeP8QUKQqAQzKHARJM4uw_MCpG2Coz'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
