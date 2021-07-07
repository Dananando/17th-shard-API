BEGIN;
INSERT INTO "author" (first_name, last_name, birth_date, birth_place)
VALUES (
        'Brandon',
        'Sanderson',
        '1975-12-19',
        'Lincoln (USA)'
    ),
    (
        'Robert',
        'Jordan',
        '1948-10-17',
        'Charleston (USA)'
    );
INSERT INTO serie (label)
VALUES ('THE MISTBORN SAGA - THE ORIGINAL TRILOGY'),
    ('THE STORMLIGHT ARCHIVE'),
    ('THE MISTBORN SAGA - THE WAX & WAYNE SERIES'),
    ('WHITE SAND'),
    ('SKYWARD'),
    ('THE RECKONERS'),
    ('ALCATRAZ VS THE EVIL LIBRARIANS'),
    ('THE WHEEL OF TIME'),
    ('INFINITY BLADE'),
    ('LEGION');
INSERT INTO book (title, cover_image, summary, serie_id)
VALUES (
        'Steelheart',
        'https://coppermind.net/wiki/File:Steelheart.jpg',
        'Steelheart possesses the strength of ten men and can control the elements. It is said no bullet can harm him, no sword can split his skin, no explosion can burn him. Nobody fights back...nobody but the Reckoners. A shadowy group of ordinary humans, the Reckoners spend their lives studying Epics, finding their weaknesses, and then taking them out. For the death of his father, David wants in. For years, like the Reckoners, David’s been studying and planning, and has something they need. Not an object, but an experience. He’s seen Steelheart bleed.',
        6
    ),
    (
        'Firefight',
        'https://coppermind.net/wiki/File:Firefight.jpg',
        'Newcago is free. They told David it was impossible, that even the Reckoners had never killed a High Epic. Yet Steelheart--invincible, immortal, unconquerable--is dead. And he died by David''s hand. Eliminating Steelheart was supposed to make life simpler. Instead, it only made David realize he has questions. Big ones. And no one in Newcago can give him answers. Babylon Restored, the city formerly known as the borough of Manhattan, has possibilities, though. Ruled by the mysterious High Epic Regalia, Babylon Restored is flooded and miserable, but David is sure it''s the path that will lead him to what he needs to find. Entering a city oppressed by a High Epic despot is risky, but David''s willing to take the gamble. Because killing Steelheart left a hole in David''s heart. A hole where his thirst for vengeance once lived. Somehow, he filled that hole with another Epic--Firefight. And now he will go on a quest darker and even more dangerous than the fight against Steelheart to find her, and to get his answers.',
        6
    ),
    (
        'Calamity',
        'https://coppermind.net/wiki/File:Calamity_US_Hardcover.jpg',
        'When Calamity lit up the sky, the Epics were born. David''s fate has been tied to their villainy ever since that historic night. Steelheart killed his father. Firefight stole his heart. And now Regalia has turned his closest ally into a dangerous enemy. David knew Prof''s secret, and kept it even when Prof struggled to control the effects of his Epic powers. But facing Obliteration in Babilar was too much. Once the Reckoners'' leader, Prof has now embraced his Epic destiny. He''s disappeared into those murky shadows of menace Epics are infamous for the world over, and everyone knows there''s no turning back.. But everyone is wrong. Redemption is possible for Epics—Megan proved it. They''re not lost. Not completely. And David is just about crazy enough to face down the most powerful High Epic of all to get his friend back. Or die trying.',
        6
    ),
    (
        'Mistborn: The Final Empire',
        'https://coppermind.net/wiki/File:Mistborn_Final_Empire.jpg',
        'Vin is a street urchin, who was saved by her brother Reen from her mother, who killed her baby sister at the same time she pierced Vin''s ear, and gave her an earring. She lived with Reen for a while, while he taught her how to survive on the the streets. She eventually winds up in Cammon''s crew. Cammon is a criminal gang leader, who uses Vin for her allomantic abilities. She is then taken into a group of thieves led by Kelsier. They are intent on overthrowing the Lord Ruler, a god-like tyrant who has ruled for a thousand years. The band of thieves are promised the cache of the Lord Ruler''s atium, an allomantic metal that allows allomancers to see a few seconds into the future, as reward for their contributions. The group is hounded by Steel Inquisitors, intent on stopping their plans from succeeding.',
        1
    ),
    (
        'The Gathering Storm',
        'https://coppermind.net/w/images/The_Gathering_Storm.JPG',
        'The series'' storyline has been leading up to the "Last Battle" (Tarmon Gai''don)—a fight between the forces of Light and Shadow. According to prophecy in the series the primary protagonist Rand al''Thor, as the Dragon Reborn, will "fight the [battle]", and must be present for the forces of Light to have a chance at winning and stopping the being known as the Dark One, the primary antagonist, from escaping his prison',
        8
    ),
    (
        'Towers of Midnight',
        'https://coppermind.net/w/images/thumb/Towers_of_Midnight.jpg/300px-Towers_of_Midnight.jpg',
        'The End Draws Near...
        The Last Battle has started. The seals on the Dark One''s prison are crumbling. The Pattern itself is unraveling, and the armies of the Shadow have begun to boil out of the Blight. The sun has begun to set upon the Third Age. Perrin Aybara is now hunted by specters from his past: Whitecloaks, a slayer of wolves, and the responsibilities of leadership. All the while, an unseen foe is slowly pulling a noose tight around his neck. To prevail, he must seek answers in Tel''aran''rhiod and find a way — at long last — to master the wolf within him or lose himself to it forever.
        Meanwhile, Matrim Cauthon prepares for the most difficult challenge of his life. The creatures beyond the stone gateways — the Aelfinn and the Eelfinn — have confused him, taunted him, and left him hanged, his memory stuffed with bits and pieces of other mens'' lives. He had hoped that his last confrontation with them would be the end of it, but the Wheel weaves as the Wheel wills. The time is coming when he will again have to dance with the Snakes and the Foxes, playing a game that cannot be won. The Tower of Ghenjei awaits, and its secrets will reveal the fate of a friend long lost.
        This penultimate novel of Robert Jordan''s #1 New York Times bestselling series — the second of three based on materials he left behind when he died in 2007 — brings dramatic and compelling developments to many threads in the Pattern. The end draws near.
        Dovie''andi se tovya sagain. It''s time to toss the dice.',
        8
    );
INSERT INTO "write" (book_id, author_id)
VALUES (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1),
    (5, 2),
    (6, 1),
    (6, 2);
COMMIT;