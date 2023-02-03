CREATE OR REPLACE FUNCTION generate_short_id()
RETURNS TRIGGER AS $$
BEGIN
  NEW.id = substring(md5(gen_random_uuid()::text)::text from 1 for 8);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER orgs_insert_id
BEFORE INSERT ON orgs
FOR EACH ROW
EXECUTE FUNCTION generate_short_id();
