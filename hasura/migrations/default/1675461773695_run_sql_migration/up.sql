CREATE OR REPLACE FUNCTION generate_short_id()
RETURNS TRIGGER AS $$
BEGIN
  NEW.id = upper(substring(md5(gen_random_uuid()::text)::text from 1 for 8));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
