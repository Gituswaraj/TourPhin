import {createClient} from  "@supabase/supabase-js"

// Using direct URLs for development - replace with your actual Supabase project URL and anon key
const supabaseURL = "https://your-project-id.supabase.co";
const supabaseKey = "your-supabase-anon-key";

// Create the Supabase client
const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;