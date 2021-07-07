-- Verify brandon-api:usefulViews on pg

BEGIN;

SELECT * FROM "bookWrite" WHERE false;

ROLLBACK;
