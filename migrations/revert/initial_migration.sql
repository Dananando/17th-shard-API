-- Deploy brandon-api:initial_migration to pg

BEGIN;

DROP TABLE "serie", "book", "author";

COMMIT;
