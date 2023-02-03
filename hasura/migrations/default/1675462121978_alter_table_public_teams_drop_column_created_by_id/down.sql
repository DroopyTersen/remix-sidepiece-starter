comment on column "public"."teams"."created_by_id" is E'A Team underneath an Organization';
alter table "public"."teams"
  add constraint "teams_created_by_id_fkey"
  foreign key (created_by_id)
  references "public"."users"
  (id) on update cascade on delete set null;
alter table "public"."teams" alter column "created_by_id" drop not null;
alter table "public"."teams" add column "created_by_id" uuid;
