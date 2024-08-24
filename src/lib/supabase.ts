import {createClient} from "@supabase/supabase-js";
import {processEnv} from "@next/env";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)