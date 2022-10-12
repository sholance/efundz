import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://lcbkxtwzuzbizxwdytzr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjYmt4dHd6dXpiaXp4d2R5dHpyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NTA0MjU2NywiZXhwIjoxOTgwNjE4NTY3fQ.vZ0mbCVGd7ieabVTuIT3oIYTyVvtBK7dWBtYV7rgrFI'


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
