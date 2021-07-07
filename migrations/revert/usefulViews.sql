-- Revert brandon-api:usefulViews from pg

BEGIN;

DROP VIEW bookWrite;

COMMIT;
