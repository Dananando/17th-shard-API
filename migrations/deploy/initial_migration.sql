-- Deploy brandon-api:initial_migration to pg

BEGIN;

CREATE TABLE "serie" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE
);

CREATE TABLE "book" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL UNIQUE,
    "cover_image" TEXT,
    "summary" TEXT NOT NULL UNIQUE,
    "serie_id" int REFERENCES serie(id)
);

CREATE TABLE "author" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birth_date" TIMESTAMPTZ NOT NULL,
    "birth_place" TEXT NOT NULL
);

CREATE TABLE "write" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "book_id" int REFERENCES book(id),
    "author_id" int REFERENCES author(id)
);

COMMIT;