-- Migration to create/fix waitlist_signups table for both landing and portal
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.waitlist_signups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    source TEXT DEFAULT 'landing_page',
    signup_date TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure the source column exists if the table was created without it
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='waitlist_signups' AND COLUMN_NAME='source') THEN
        ALTER TABLE public.waitlist_signups ADD COLUMN source TEXT DEFAULT 'landing_page';
    END IF;
END $$;

-- Enable RLS
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Allow public to insert (anyone can join the waitlist)
DROP POLICY IF EXISTS "Anyone can join the waitlist" ON public.waitlist_signups;
CREATE POLICY "Anyone can join the waitlist" ON public.waitlist_signups
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view signups
DROP POLICY IF EXISTS "Authenticated users can view waitlist" ON public.waitlist_signups;
CREATE POLICY "Authenticated users can view waitlist" ON public.waitlist_signups
    FOR SELECT USING (auth.role() = 'authenticated');
