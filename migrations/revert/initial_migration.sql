-- Revert brandon-api:initial_migration from pg

BEGIN;

DROP TABLE "write";
DROP TABLE "author";
DROP TABLE "book";
DROP TABLE "serie";
DROP TABLE "user";

COMMIT;
