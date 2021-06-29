# MLD - Shard-API


## MLD

The MLD (Data Logical Model) was done using the three rules below, as well as the MCD.

```sql
serie(id, label)
book(id, title, serie_id(FK), summary)
author(id, first_name, last_name, birth_date, birth_place)
write(id, author_id(FK), book_id(FK))

```

## Règle n°1

Toute entité du MCD devient une table du MLD. Les propriétés de ces entités deviennent les colonnes des tables. L’identifiant de l’entité devient la clé primaire de la table.

## Règle n°2

Si l’une des cardinalités max. vaut 1, une clé étrangère est créée du côté de l’entité où se trouve le 1. Cette clé étrangère fera référence à l’identifiant dans la table associée.

Dans notre exemple (Livre est écrit par 1 Auteur), c’est donc le Livre qui aura une clé étrangère vers l’Auteur.

## Règle n°3

Si les deux cardinalités max. sont n, donc une relation « plusieurs à plusieurs » la relation devient une table à part entière en relation avec les deux entités. On parle de table de liaison, d’association, de jonction ou de correspondance. Cette table de liaison contient 2 clefs étrangères vers les 2 tables à lier.
