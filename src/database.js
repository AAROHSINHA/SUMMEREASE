import { createClient } from "@supabase/supabase-js";

const YOUR_SUPABASE_URL = "ADD";
const YOUR_SUPABASE_ANON_KEY =
  "ADD";

const supabase = createClient(YOUR_SUPABASE_URL, YOUR_SUPABASE_ANON_KEY);

export default supabase;
