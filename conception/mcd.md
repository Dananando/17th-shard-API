# MCD - Shard-API

```sql
IS PART OF, 1N SERIE, 01 BOOK
SERIE: label
:

BOOK: title
WROTE, 1N BOOK, 1N AUTHOR
AUTHOR: first_name, last_name

CONTAINS, 1N GENRE, 1N BOOK
GENRE: label
:
```

<!-- # MLD - Shard-API

## Règle n°1

Toute entité du MCD devient une table du MLD. Les propriétés de ces entités deviennent les colonnes des tables. L’identifiant de l’entité devient la clé primaire de la table.

## Règle n°2

Si l’une des cardinalités max. vaut 1, une clé étrangère est créée du côté de l’entité où se trouve le 1. Cette clé étrangère fera référence à l’identifiant dans la table associée.

Dans notre exemple (Livre est écrit par 1 Auteur), c’est donc le Livre qui aura une clé étrangère vers l’Auteur.

## Règle n°3

Si les deux cardinalités max. sont n, donc une relation « plusieurs à plusieurs » la relation devient une table à part entière en relation avec les deux entités. On parle de table de liaison, d’association, de jonction ou de correspondance. Cette table de liaison contient 2 clefs étrangères vers les 2 tables à lier. -->