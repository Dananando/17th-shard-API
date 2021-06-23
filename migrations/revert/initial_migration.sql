-- Revert brandon-api:initial_migration from pg

BEGIN;

DROP TABLE "author";
DROP TABLE "book";
DROP TABLE "serie";

COMMIT;
