-- Deploy brandon-api:initial_migration to pg

BEGIN;

CREATE TABLE "serie" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE
);

CREATE TABLE "book" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL UNIQUE,
    "summary" TEXT NOT NULL UNIQUE,
    "content" TEXT NOT NULL UNIQUE,
    "serie_id" int NOT NULL REFERENCES serie(id)
);

CREATE TABLE "author" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birth_date" TIMESTAMPTZ NOT NULL,
    "birth_place" TEXT NOT NULL
);

COMMIT;
