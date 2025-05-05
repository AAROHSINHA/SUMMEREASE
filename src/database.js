import { createClient } from "@supabase/supabase-js";

const YOUR_SUPABASE_URL = "https://rheedwavpuhlqvrohvlf.supabase.co";
const YOUR_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZWVkd2F2cHVobHF2cm9odmxmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTM0NzY1MCwiZXhwIjoyMDYwOTIzNjUwfQ._neZBaE00ucvaHsAzqT0x2edFf0AZYYgRW5TQieyf4c";

const supabase = createClient(YOUR_SUPABASE_URL, YOUR_SUPABASE_ANON_KEY);

export default supabase;
