# API for Brandon SANDERSON's books

Little project to gather info on all of Brandon SANDERSON'S books.
This API shall follow the [REST architecture](https://practicalprogramming.fr/api-rest) (link in French).

## MCD/MLD

The [MCD](./conception/mcd.md) and [MLD](./conception/mld.md) have been done thanks to [mocodo](http://mocodo.wingi.net/).

## Sources

Take as much info as possible on the books and author on [Brandon SANDERSON's wikipedia page](https://en.wikipedia.org/wiki/Brandon_Sanderson), his [website](https://www.brandonsanderson.com/) and this [wiki](https://coppermind.net/wiki/Coppermind:Welcome) made by fans.


## Tools used

### Server-side

#### Node.js / Express and their friends

The frameworks __Node.js__ and __Express__ will be used in order to set up the server of the API.

__Dotenv__ will be needed in order to have environment variables interact with the application.

__PG__ will be needed as well in order to help our application interact with PSQL (see section below).

It is likely that authentification will be needed. Therefore __express-session__ and __joi__ might be installed in the future (*TBC*)

#### PSQL & Data Mapper

The database management system (DBMS) used is [PSQL](https://www.postgresql.org/docs/13/app-psql.html).
The magic link between the database and the application will be a hand-made Data Mapper Object Relational Mapper (ORM).

A dedicated user and database are created thanks to PSQL command lines.


### Client-side

#### Vanilla JS or Vue.js?

To be determined. Let's make the API work first. We'll make it pretty afterwards.