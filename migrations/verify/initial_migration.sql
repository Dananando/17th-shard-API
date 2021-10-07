-- Verify brandon-api:initial_migration on pg

BEGIN;

SELECT * FROM "author" WHERE false;
SELECT * FROM "serie" WHERE false;
SELECT * FROM "book" WHERE false;
SELECT * FROM "write" WHERE false;
SELECT * FROM "user" WHERE false;

ROLLBACK;
