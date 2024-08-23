import {createClient} from "@supabase/supabase-js";
import {processEnv} from "@next/env";

export const supabase = createClient(
    process.env.
)