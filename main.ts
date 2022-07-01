import { createClient } from "https://deno.land/x/supabase@1.3.1/mod.ts";
const client = createClient(Deno.args[0], Deno.args[1]);