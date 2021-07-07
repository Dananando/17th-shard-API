-- Deploy brandon-api:usefulViews to pg

BEGIN;

CREATE VIEW bookWrite AS (
	SELECT book.title, book.cover_image, write.book_id, write.author_id FROM book JOIN "write" ON write.book_id = book.id
);

COMMIT;
