// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'https://vwajfiltuguaechhltcc.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YWpmaWx0dWd1YWVjaGhsdGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MDM3MDEsImV4cCI6MjA2MjA3OTcwMX0.eONRcIKdpZ5dA_eKUz4CyzjXI_fRkFLB8GOoqqCZE1E';

 const supabase = createClient(supabaseUrl, supabaseAnonKey);
 export {supabase}