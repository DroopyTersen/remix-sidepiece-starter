CREATE TABLE "public"."teams" ("id" varchar(255) NOT NULL, "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "created_by_id" uuid, "org_id" varchar(255) NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("created_by_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE set null, FOREIGN KEY ("org_id") REFERENCES "public"."orgs"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"));COMMENT ON TABLE "public"."teams" IS E'A Team underneath an Organization';
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_teams_updated_at"
BEFORE UPDATE ON "public"."teams"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_teams_updated_at" ON "public"."teams" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
