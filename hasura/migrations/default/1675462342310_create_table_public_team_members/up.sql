CREATE TABLE "public"."team_members" ("team_id" varchar(255) NOT NULL, "user_id" uuid NOT NULL, "role" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("team_id","user_id") , FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "public"."team_members" IS E'The members of a team';
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
CREATE TRIGGER "set_public_team_members_updated_at"
BEFORE UPDATE ON "public"."team_members"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_team_members_updated_at" ON "public"."team_members" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
