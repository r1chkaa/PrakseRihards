import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const supabase = createClient(
  'https://gxreqyobmjqbjopuiesr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cmVxeW9ibWpxYmpvcHVpZXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxNjczMzEsImV4cCI6MjA4MDc0MzMzMX0.S3rOtMz7wskdK9ChRV8kNwSMD13n6D1_wNj44WNYz7Y'
);
