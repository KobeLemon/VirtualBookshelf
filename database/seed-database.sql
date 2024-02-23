-- This seeds the database with filler items

-- Table 'user' does not have a seed because it relies on a real person.
-- ONLY RUN THIS SEED CODE AFTER A USER IS CREATED WITH THE USER_ID OF '1'

-- -----------------------------------------------------
-- INSERT INTO Table public.category
-- -----------------------------------------------------
INSERT INTO public.category
VALUES
	('1', 'Book'),
	('2', 'Movie'),
	('3', 'TV Shows'),
	('4', 'Video Games'),
	('5', 'Card Games'),
	('6', 'Board Games'),
	('7', 'Music'),
	('8', 'Websites');


-- -----------------------------------------------------
-- INSERT INTO Table public.genre
-- -----------------------------------------------------
INSERT INTO public.genre
VALUES
	('1', 'Other'),
	('2', 'Action'),
	('3', 'Adventure'),
	('4', 'Children'),
	('5', 'Comic Book'),
	('6', 'Dystopian'),
	('7', 'Fantasy'),
	('8', 'Historical Fiction'),
	('9', 'Horror'),
	('10', 'Mystery'),
	('11', 'Romance'),
	('12', 'Science Fiction'),
	('13', 'Short Story'),
	('14', 'Thriller'),
	('15', 'Young Adult'),
	('16', 'Autobiography'),
	('17', 'Biography'),
	('18', 'Guide / How To'),
	('19', 'History'),
	('20', 'Humor'),
	('21', 'Religion & Spirituality'),
	('22', 'Science & Technology'),
	('23', 'True Crime');


-- -----------------------------------------------------
-- INSERT INTO Table public.book
-- -----------------------------------------------------
INSERT INTO public.book
VALUES
	(
		'1', -- book_id
		'The Lord of The Rings:Fellowship of the Ring', -- name
		'In ''The Fellowship of the Ring'', Frodo Baggins inherits the One Ring, setting off a perilous quest to destroy it. Joined by a diverse group, the Fellowship faces trials, betrayal, and the growing threat of Sauron. Through courage and sacrifice, they confront evil while forging unbreakable bonds of friendship.', -- description
		'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif', -- image
		'J.R.R. Tolkien', -- author
		'Allen & Unwin', -- publisher
		'Paper', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'2', -- book_id
		'Pride and Prejudice', -- name
		'A young woman navigates the complexities of love and society in 19th-century England.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg', -- image
		'Jane Austen', -- author
		'T. Egerton, Whitehall', -- publisher
		'Paper', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'3', -- book_id
		'To Kill a Mockingbird', -- name
		'A lawyer in the racially charged Deep South defends a black man accused of raping a white woman.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg', -- image
		'Harper Lee', -- author
		'J. B. Lippincott & Co.', -- publisher
		'Digital', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'4', -- book_id
		'1984', -- name
		'In a dystopian future, a man rebels against a totalitarian regime led by Big Brother.', -- description
		'https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg', -- image
		'George Orwell', -- author
		'Secker & Warburg', -- publisher
		'Audiobook', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'5', -- book_id
		'The Great Gatsby', -- name
		'A mysterious millionaire throws extravagant parties while pursuing an elusive dream.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg', -- image
		'F. Scott Fitzgerald', -- author
		'Charles Scribner Sons', -- publisher
		'Audiobook', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'6', -- book_id
		'Moby-Dick', -- name
		'A sea captain seeks revenge on a giant white whale that destroyed his ship.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/3/36/Moby-Dick_FE_title_page.jpg', -- image
		'Herman Melville', -- author
		'Richard Bentley (United Kingdom), Harper & Brothers (US)', -- publisher
		'Paper', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'7', -- book_id
		'Harry Potter and the Philosopher''s Stone', -- name
		'A young wizard discovers his magical heritage and attends a school of witchcraft and wizardry.', -- description
		'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg', -- image
		'J.K. Rowling', -- author
		'Bloomsbury (UK), Scholastic (US)', -- publisher
		'Digital', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'8', -- book_id
		'The Catcher in the Rye', -- name
		'A disillusioned teenager wanders through New York City after being expelled from prep school.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg', -- image
		'J.D. Salinger', -- author
		'Little, Brown and Company', -- publisher
		'Digital', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'9', -- book_id
		'The Hobbit', -- name
		'A hobbit goes on an unexpected adventure with a group of dwarves to reclaim their homeland from a dragon.', -- description
		'https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg', -- image
		'J.R.R. Tolkien', -- author
		'Allen & Unwin', -- publisher
		'Other', -- format
		'1', -- category_id
		'1' -- user_id
	),
	(
		'10', -- book_id
		'War and Peace', -- name
		'The lives of Russian aristocrats intertwine with the historical events of the Napoleonic Wars.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg', -- image
		'Leo Tolstoy', -- author
		'The Russian Messenger', -- publisher
		'Other', -- format
		'1', -- category_id
		'1' -- user_id
	);


-- -----------------------------------------------------
-- INSERT INTO Table public.movie
-- -----------------------------------------------------
INSERT INTO public.movie
VALUES
	(
		'1', -- movie_id
		'Top Gun', -- name
		'RIP Goose. Also, Tom Cruise flies a jet and gets yelled at by Val Kilmer.', -- description
		'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg', -- image
		'Tony Scott', -- director
		'Paramount Pictures', -- distributor
		'DVD', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'2', -- movie_id
		'The Godfather', -- name
		'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', -- description
		'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg', -- image
		'Francis Ford Coppola', -- director
		'Paramount Pictures', -- distributor
		'DVD', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'3', -- movie_id
		'Inception', -- name
		'A thief who enters the dreams of others to steal their secrets from their subconscious.', -- description
		'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg', -- image
		'Christopher Nolan', -- director
		'Warner Bros. Pictures', -- distributor
		'Blu-Ray', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'4', -- movie_id
		'The Shawshank Redemption', -- name
		'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', -- description
		'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg', -- image
		'Frank Darabont', -- director
		'Castle Rock Entertainment', -- distributor
		'VHS', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'5', -- movie_id
		'The Dark Knight', -- name
		'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', -- description
		'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg', -- image
		'Christopher Nolan', -- director
		'Warner Bros. Pictures', -- distributor
		'Blu-Ray', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'6', -- movie_id
		'The Matrix', -- name
		'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', -- description
		'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg', -- image
		'The Wachowskis', -- director
		'Warner Bros. Pictures', -- distributor
		'DVD', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'7', -- movie_id
		'Jurassic Park', -- name
		'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.', -- description
		'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg', -- image
		'Steven Spielberg', -- director
		'Universal Pictures', -- distributor
		'VHS', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'8', -- movie_id
		'Forrest Gump', -- name
		'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.', -- description
		'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg', -- image
		'Robert Zemeckis', -- director
		'Paramount Pictures', -- distributor
		'DVD', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'9', -- movie_id
		'Interstellar', -- name
		'A team of explorers travel through a wormhole in space in an attempt to ensure the survival of humanity.', -- description
		'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg', -- image
		'Christopher Nolan', -- director
		'Paramount Pictures', -- distributor
		'Other', -- format
		'2', -- category_id
		'1' -- user_id
	),
	(
		'10', -- movie_id
		'Gladiator', -- name
		'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', -- description
		'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png', -- image
		'Ridley Scott', -- director
		'DreamWorks Pictures', -- distributor
		'Other', -- format
		'2', -- category_id
		'1' -- user_id
	);

-- -----------------------------------------------------
-- INSERT INTO Table public.tvshow
-- ----------------------------------------------------
INSERT INTO public.tvshow
VALUES
	(
		'1', -- tvshow_id
		'Friends', -- name
		'Five 20 somethings that somehow afford a super massive apartment in 90s NYC.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg', -- image
		'NBC', -- network
		'DVD', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'2', -- tvshow_id
		'Breaking Bad', -- name
		'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to build a drug empire.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg', -- image
		'AMC', -- network
		'DVD', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'3', -- tvshow_id
		'Game of Thrones', -- name
		'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.', -- description
		'https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg', -- image
		'HBO', -- network
		'Digital', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'4', -- tvshow_id
		'The Office', -- name
		'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/8/80/The_Office_US_logo.svg', -- image
		'NBC', -- network
		'Blu-Ray', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'5', -- tvshow_id
		'Stranger Things', -- name
		'A group of kids uncover a series of supernatural mysteries in their small town.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png', -- image
		'Netflix', -- network
		'Digital', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'6', -- tvshow_id
		'The Crown', -- name
		'Follows the political rivalries and romance of Queen Elizabeth II''s reign and the events that shaped the second half of the twentieth century.', -- description
		'https://upload.wikimedia.org/wikipedia/en/1/18/The_Crown_Title_Card.jpg', -- image
		'Netflix', -- network
		'DVD', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'7', -- tvshow_id
		'Doctor Who', -- name
		'A Gallifreyan Time Lord who travels through time and space, typically with a British companion.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/4/43/Doctor_Who_Logo_2023.svg', -- image
		'BBC', -- network
		'Digital', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'8', -- tvshow_id
		'Sherlock', -- name
		'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.', -- description
		'https://upload.wikimedia.org/wikipedia/en/4/4d/Sherlock_titlecard.jpg', -- image
		'BBC', -- network
		'Blu-Ray', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'9', -- tvshow_id
		'The Mandalorian', -- name
		'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/9/96/The_Mandalorian.svg', -- image
		'Disney+', -- network
		'Digital', -- format
		'3', -- category_id
		'1' -- user_id
	),
	(
		'10', -- tvshow_id
		'The Witcher', -- name
		'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.', -- description
		'https://upload.wikimedia.org/wikipedia/en/2/23/The_Witcher_Title_Card.png', -- image
		'Netflix', -- network
		'Other', -- format
		'3', -- category_id
		'1' -- user_id
	);


-- -----------------------------------------------------
-- INSERT INTO Table public.video_game
-- -----------------------------------------------------
INSERT INTO public.video_game
VALUES
	(
		'1', -- video_game_id
		'Fallout:A Post Nuclear Role Playing Game', -- name
		'Set in a post-apocalyptic world, players navigate the wasteland, encountering factions, mutants, and moral dilemmas in this iconic RPG.', -- description
		'https://upload.wikimedia.org/wikipedia/en/a/af/Fallout.jpg', -- image
		'Interplay Productions', -- developer
		'Interplay Productions', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'2', -- video_game_id
		'The Legend of Zelda:Ocarina of Time', -- name
		'A young hero named Link sets out on a quest to stop Ganondorf, king of the Gerudo tribe, from obtaining the Triforce, a sacred relic that grants wishes.', -- description
		'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg', -- image
		'Nintendo EAD', -- developer
		'Nintendo', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'3', -- video_game_id
		'The Witcher 3:Wild Hunt', -- name
		'Follows the story of Geralt of Rivia as he embarks on a quest to find his missing adopted daughter.', -- description
		'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg', -- image
		'CD Projekt Red', -- developer
		'CD Projekt', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'4', -- video_game_id
		'Super Mario Bros.', -- name
		'Two brothers, Mario and Luigi, must rescue Princess Toadstool (later called Princess Peach) of the Mushroom Kingdom from the evil Bowser, king of the Koopas.', -- description
		'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png', -- image
		'Nintendo R&D4', -- developer
		'Nintendo', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'5', -- video_game_id
		'Final Fantasy VII', -- name
		'Follows mercenary Cloud Strife as he and eco-terrorist group AVALANCHE battle against the corrupt megacorporation Shinra and the legendary soldier Sephiroth.', -- description
		'https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg', -- image
		'Square Enix', -- developer
		'Square Enix', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'6', -- video_game_id
		'The Sims 4', -- name
		'A life simulation game where players can create and control virtual people and guide them through various life stages.', -- description
		'https://upload.wikimedia.org/wikipedia/en/7/7f/Sims4_Rebrand.png', -- image
		'Maxis', -- developer
		'Electronic Arts', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'7', -- video_game_id
		'Minecraft', -- name
		'A game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.', -- description
		'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png', -- image
		'Mojang Studios', -- developer
		'Mojang Studios', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'8', -- video_game_id
		'The Elder Scrolls V:Skyrim', -- name
		'Follows the story of the Dragonborn, a prophesied hero tasked with defeating Alduin, a dragon who is prophesied to destroy the world.', -- description
		'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png', -- image
		'Bethesda Game Studios', -- developer
		'Bethesda Softworks', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'9', -- video_game_id
		'Red Dead Redemption 2', -- name
		'Follows outlaw Arthur Morgan as he navigates the decline of the Wild West and the rise of industrialization, while being pursued by government agents and other outlaws.', -- description
		'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg', -- image
		'Rockstar Studios', -- developer
		'Rockstar Games', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	),
	(
		'10', -- video_game_id
		'The Last of Us Part II', -- name
		'Follows Ellie, a young woman who seeks revenge against a cult that brutally attacked her and her loved ones.', -- description
		'https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png', -- image
		'Naughty Dog', -- developer
		'Sony Interactive Entertainment', -- publisher
		'Digital', -- format
		'4', -- category_id
		'1' -- user_id
	);


-- -----------------------------------------------------
-- INSERT INTO Table public.card_game
-- -----------------------------------------------------
INSERT INTO public.card_game
VALUES
	(
		'1', -- card_game_id
		'Uno', -- name
		'A classic card game where players take turns matching cards in their hand with the current card shown on top of the deck either by color or number.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/f/f9/UNO_Logo.svg', -- image
		'Merle Robbins', -- developer
		'Mattel', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'2', -- card_game_id
		'Wackee Six', -- name
		'Wackee Six is a super fun game to play.', -- description
		'https://wackeesix.com/cdn/shop/products/Amazon1_1024x1024@2x.jpg?v=1622128503', -- image
		'Wackee Six', -- developer
		'Wackee Six', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'3', -- card_game_id
		'Catan: The Card Game', -- name
		'A two-player card game adaptation of the popular board game Settlers of Catan, where players collect resources to build settlements and cities.', -- description
		'https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg', -- image
		'Klaus Teuber', -- developer
		'Kosmos', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'4', -- card_game_id
		'Exploding Kittens', -- name
		'A highly-strategic, kitty-powered version of Russian Roulette. Players draw cards until someone draws an Exploding Kitten, at which point they explode, they are dead, and they are out of the game.', -- description
		'https://upload.wikimedia.org/wikipedia/en/a/a6/Exploding_Kittens.png', -- image
		'Elan Lee, Matthew Inman, Shane Small', -- developer
		'Exploding Kittens Inc.', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'5', -- card_game_id
		'Magic: The Gathering ', -- name
		'A collectible card game created by mathematics professor Richard Garfield and introduced in 1993 by Wizards of the Coast. Players use decks of cards representing magical spells, creatures, and artifacts to defeat their opponents.', -- description
		'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/220px-Magic_the_gathering-card_back.jpg', -- image
		'Richard Garfield', -- developer
		'Wizards of the Coast', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'6', -- card_game_id
		'Codenames', -- name
		'A social word game where players give one-word clues to help their teammates guess words on a grid, while avoiding the opposing team''s words and the assassin.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/b/b0/Codenames_board_game.jpg', -- image
		'Vlaada Chvátil', -- developer
		'Czech Games Edition', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'7', -- card_game_id
		'Crazy Eights', -- name
		'A shedding-type card game in which players try to be the first to get rid of all their cards by playing cards that match the rank or suit of the previously played card.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/4/4e/Crazy_Eights.jpg', -- image
		'Unknown', -- developer
		'Various', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'8', -- card_game_id
		'Gin Rummy', -- name
		'A two-player card game created in 1909 by Elwood T. Baker and his son C. Graham Baker. It is one of the most popular forms of rummy. It is named after the drink gin and is played by two players.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/9/9a/3_playing_cards.jpg', -- image
		'Elwood T. Baker, C. Graham Baker', -- developer
		'Various', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'9', -- card_game_id
		'Bridge', -- name
		'A trick-taking card game using a standard deck of 52 playing cards. It is played by four players in two competing partnerships, with partners sitting opposite each other around a table.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/f/ff/Bridge-Gro%C3%9Fschlemm.JPG', -- image
		'Harold Stirling Vanderbilt', -- developer
		'Various', -- publisher
		'5', -- category_id
		'1' -- user_id
	),
	(
		'10', -- card_game_id
		'Yu-Gi-Oh! Trading Card Game', -- name
		'A Japanese collectible card game developed and published by Konami. It is based on the fictional game of Duel Monsters created by manga artist Kazuki Takahashi, which appears in portions of the manga franchise Yu-Gi-Oh!', -- description
		'https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg', -- image
		'Konami', -- developer
		'Konami', -- publisher
		'5', -- category_id
		'1' -- user_id
	);


-- -----------------------------------------------------
-- INSERT INTO Table public.board_game
-- -----------------------------------------------------
INSERT INTO public.board_game
VALUES
	(
		'1', -- board_game_id
		'The Settlers of Catan', -- name
		'A multiplayer board game where players collect resources and use them to build roads, settlements, and cities, aiming to earn victory points.', -- description
		'https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg', -- image
		'Klaus Teuber', -- developer
		'Catan Studio', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'2', -- board_game_id
		'Ticket to Ride', -- name
		'A cross-country train adventure game where players collect train cards to claim railway routes connecting cities, aiming to fulfill destination tickets and earn points.', -- description
		'https://upload.wikimedia.org/wikipedia/en/9/92/Ticket_to_Ride_Board_Game_Box_EN.jpg', -- image
		'Alan R. Moon', -- developer
		'Days of Wonder', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'3', -- board_game_id
		'The Quacks of Quedlinburg', -- name
		'A push-your-luck game where players are quack doctors mixing potions to cure ailments. Each ingredient adds to the potion''s power, but beware of making it explode!', -- description
		'https://upload.wikimedia.org/wikipedia/en/e/e3/The_Quacks_of_Quedlinburg_box_cover.jpg', -- image
		'Wolfgang Warsch', -- developer
		'North Star Games', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'4', -- board_game_id
		'Scythe', -- name
		'A board game set in an alternate-history 1920s period where players lead factions to conquer territory and gain resources on a hexagonal game board.', -- description
		'https://upload.wikimedia.org/wikipedia/en/1/1a/Scythe_boxart.png', -- image
		'Jamey Stegmaier', -- developer
		'Stonemaier Games', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'5', -- board_game_id
		'Pandemic', -- name
		'A cooperative board game where players work as a team to prevent outbreaks of diseases and find cures before they spread uncontrollably across the world.', -- description
		'https://upload.wikimedia.org/wikipedia/en/3/36/Pandemic_game.jpg', -- image
		'Matt Leacock', -- developer
		'Z-Man Games', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'6', -- board_game_id
		'Azul', -- name
		'A tile drafting and placement game where players compete to decorate the walls of the Royal Palace of Evora with ceramic tiles.', -- description
		'https://upload.wikimedia.org/wikipedia/en/2/23/Picture_of_Azul_game_box.jpg', -- image
		'Michael Kiesling', -- developer
		'Plan B Games', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'7', -- board_game_id
		'Codenames', -- name
		'A social word game in which two teams compete to identify their team''s secret agents from a grid of code words using only one-word clues.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/b/b0/Codenames_board_game.jpg', -- image
		'Vlaada Chvátil', -- developer
		'Czech Games Edition', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'8', -- board_game_id
		'Carcassonne', -- name
		'A tile-placement game where players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera.', -- description
		'https://upload.wikimedia.org/wikipedia/en/5/5e/Carcassonne-game.jpg', -- image
		'Klaus-Jürgen Wrede', -- developer
		'Hans im Glück', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'9', -- board_game_id
		'7 Wonders', -- name
		'A card drafting game that is played using three decks of cards featuring depictions of ancient civilizations, military conflicts, and commercial activity.', -- description
		'https://upload.wikimedia.org/wikipedia/en/0/0b/7_Wonders_-_New_Edition_boxart.png', -- image
		'Antoine Bauza', -- developer
		'Repos Production', -- publisher
		'6', -- category_id
		'1' -- user_id
	),
	(
		'10', -- board_game_id
		'Gloomhaven', -- name
		'A cooperative board game that uses a campaign system where players will take on the role of a wandering adventurer with their own special skills and reasons for traveling to this dark corner of the world.', -- description
		'https://upload.wikimedia.org/wikipedia/en/e/ee/Gloomhaven_Cover_Art.jpg', -- image
		'Isaac Childres', -- developer
		'Cephalofair Games', -- publisher
		'6', -- category_id
		'1' -- user_id
	);


-- -----------------------------------------------------
-- INSERT INTO Table public.music
-- -----------------------------------------------------
INSERT INTO public.music
VALUES
	(
		'1', -- music_id
		'Bohemian Rhapsody', -- name
		'A genre-defying rock epic with operatic influences, showcasing the vocal prowess of Freddie Mercury.', -- description
		'https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png', -- image
		'Queen', -- artist
		'A Night at the Opera', -- album
		'EMI Studios, London', -- studio
		'Vinyl', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'2', -- music_id
		'Imagine', -- name
		'A timeless anthem for peace and unity, this piano ballad inspires hope and imagination.', -- description
		'https://upload.wikimedia.org/wikipedia/en/2/2a/Lennon_Imagine_Sleeve_1975.jpg', -- image
		'John Lennon', -- artist
		'Imagine', -- album
		'Ascot Sound Studios, Ascot', -- studio
		'CD', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'3', -- music_id
		'Like a Rolling Stone', -- name
		'This revolutionary song transforms folk into electrifying rock, capturing the essence of 1960s counterculture.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/2/2c/Like_a_rolling_stone_by_bob_dylan_us_vinyl_side_a.png', -- image
		'Bob Dylan', -- artist
		'Highway 61 Revisited', -- album
		'Columbia Studio A, New York', -- studio
		'Vinyl', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'4', -- music_id
		'Stairway to Heaven', -- name
		'This epic masterpiece blends folk, rock, and mysticism, ascending to legendary status.', -- description
		'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stairway_to_Heaven_by_Led_Zeppelin_US_promotional_single.png', -- image
		'Led Zeppelin', -- artist
		'Led Zeppelin IV', -- album
		'Island Studios, London', -- studio
		'Digital', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'5', -- music_id
		'Smells Like Teen Spirit', -- name
		'This grunge anthem encapsulates teenage disillusionment and rebellion, reshaping the music landscape of the 1990s.', -- description
		'https://upload.wikimedia.org/wikipedia/en/3/3c/Smells_Like_Teen_Spirit.jpg', -- image
		'Nirvana', -- artist
		'Nevermind', -- album
		'Sound City Studios, Van Nuys', -- studio
		'8-Track', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'6', -- music_id
		'Hotel California', -- name
		'An iconic rock ballad paints a vivid picture of excess and disillusionment in the California lifestyle.', -- description
		'https://upload.wikimedia.org/wikipedia/en/b/b0/Hotel_California_Album.jpg', -- image
		'The Eagles', -- artist
		'Hotel California', -- album
		'Criteria Studios, Miami', -- studio
		'CD', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'7', -- music_id
		'Smile Like You Mean It', -- name
		'A melancholic yet uplifting indie rock anthem from The Killers debut album, capturing the complexities of human emotions.', -- description
		'https://upload.wikimedia.org/wikipedia/en/7/7e/Smile-Like-You-Mean-It.jpg', -- image
		'The Killers', -- artist
		'Hot Fuss', -- album
		'Cornerstone Studios, Los Angeles', -- studio
		'Digital', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'8', -- music_id
		'Piano Man', -- name
		'Timeless ode to the struggles and dreams of everyday people, set against the backdrop of a piano bar.', -- description
		'https://upload.wikimedia.org/wikipedia/en/9/98/Billy_Joel_Piano_Man_single.jpg', -- image
		'Billy Joel', -- artist
		'Piano Man', -- album
		'Devonshire Studios, North Hollywood', -- studio
		'Vinyl', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'9', -- music_id
		'Purple Rain', -- name
		'Electrifying rock ballad, synonymous with his legendary live performances, encapsulates raw emotion and musical genius.', -- description
		'https://upload.wikimedia.org/wikipedia/en/8/86/Purple-rain-cover.jpg', -- image
		'Prince', -- artist
		'Purple Rain', -- album
		'First Avenue, Minneapolis', -- studio
		'Digital', -- format
		'7', -- category_id
		'1' -- user_id
	),
	(
		'10', -- music_id
		'Thriller', -- name
		'Iconic pop masterpiece, with its infectious beats and groundbreaking music video, remains a cultural phenomenon.', -- description
		'https://upload.wikimedia.org/wikipedia/en/8/89/Michael_jackson_thriller_12_inch_single_USA.jpg', -- image
		'Michael Jackson', -- artist
		'Thriller', -- album
		'Westlake Recording Studios, Los Angeles', -- studio
		'Vinyl', -- format
		'7', -- category_id
		'1' -- user_id
	);


-- -----------------------------------------------------
-- INSERT INTO Table public.website
-- -----------------------------------------------------
INSERT INTO public.website
VALUES
	(
		'1', -- website_id
		'Never Gonna Give You Up', -- name
		'https://www.youtube.com/watch?v=dQw4w9WgXcQ', -- url
		'Send this to someone when you want to Rick Roll them.', -- description
		'Rick Astley', -- creator
		'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRxusbm2_TGTnDWEIhBTYW2cUQkw', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'2', -- website_id
		'Wikipedia', -- name
		'https://www.wikipedia.org/', -- url
		'A vast online encyclopedia where users can find information on virtually any topic.', -- description
		'Jimmy Wales, Larry Sanger', -- creator
		'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'3', -- website_id
		'Reddit', -- name
		'https://www.reddit.com/', -- url
		'A social news aggregation and discussion website where registered members can submit content, such as text posts or direct links.', -- description
		'Steve Huffman, Alexis Ohanian', -- creator
		'https://www.redditinc.com/assets/images/site/reddit-logo.png', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'4', -- website_id
		'Amazon Today Deals', -- name
		'https://www.amazon.com/deals?ref_=nav_cs_gb', -- url
		'This leads to an Amazon page showing their daily deals.', -- description
		'Jeff Bezos', -- creator
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'5', -- website_id
		'Shipping Container House Pinterest Board', -- name
		'https://www.pinterest.com/ideas/shipping-container-house/933220745024/', -- url
		'This is a Pinterest page that has ideas for shipping container houses.', -- description
		'Ben Silbermann, Evan Sharp, Paul Sciarra', -- creator
		'https://upload.wikimedia.org/wikipedia/commons/3/35/Pinterest_Logo.svg', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'6', -- website_id
		'Netflix', -- name
		'https://www.netflix.com/', -- url
		'A streaming service that offers a wide variety of TV shows, movie, anime, documentaries, and more on thousands of internet-connected devices.', -- description
		'Reed Hastings, Marc Randolph', -- creator
		'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'7', -- website_id
		'YouTube', -- name
		'https://www.youtube.com/', -- url
		'A video sharing website where users can upload, view, and share videos.', -- description
		'Steve Chen, Chad Hurley, Jawed Karim', -- creator
		'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'8', -- website_id
		'My GitHub Repositories', -- name
		'https://github.com/KobeLemon?tab=repositories', -- url
		'This is the page where all of my GitHub repositories are located.', -- description
		'Chris Wanstrath, PJ Hyett, Tom Preston-Werner', -- creator
		'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'9', -- website_id
		'Instagram', -- name
		'https://www.instagram.com/', -- url
		'A photo and video sharing social networking service owned by Facebook, Inc.', -- description
		'Kevin Systrom, Mike Krieger', -- creator
		'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg', -- image
		'8', -- category_id
		'1' -- user_id
	),
	(
		'10', -- website_id
		'Stack Overflow', -- name
		'https://stackoverflow.com/', -- url
		'A question and answer website for professional and enthusiast programmers. It is a trusted source of information for developers seeking solutions to coding problems.', -- description
		'Jeff Atwood, Joel Spolsky', -- creator
		'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg', -- image
		'8', -- category_id
		'1' -- user_id
	);