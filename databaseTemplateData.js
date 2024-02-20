const exampleBook = [
  {
    book_id: 1,
    name: 'The Lord of The Rings',
    description: 'A short guy with hairy feet travels with other short people and a few tall people on a quest to break some jewelry.',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
    author: 'J.R.R. Tolkien',
		medium: 'Paper', // ENUM('Paper', 'Digital', 'Audiobook', 'Other')
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 2,
    name: 'Pride and Prejudice',
    description: 'A young woman navigates the complexities of love and society in 19th-century England.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg',
    author: 'Jane Austen',
		medium: 'Paper',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 3,
    name: 'To Kill a Mockingbird',
    description: 'A lawyer in the racially charged Deep South defends a black man accused of raping a white woman.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    author: 'Harper Lee',
		medium: 'Digital',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 4,
    name: '1984',
    description: 'In a dystopian future, a man rebels against a totalitarian regime led by Big Brother.',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg',
    author: 'George Orwell',
		medium: 'Audiobook',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 5,
    name: 'The Great Gatsby',
    description: 'A mysterious millionaire throws extravagant parties while pursuing an elusive dream.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
    author: 'F. Scott Fitzgerald',
		medium: 'Audiobook',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 6,
    name: 'Moby-Dick',
    description: 'A sea captain seeks revenge on a giant white whale that destroyed his ship.',
    image: 'https://en.wikipedia.org/wiki/File:Moby-Dick_FE_title_page.jpg',
    author: 'Herman Melville',
		medium: 'Paper',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 7,
    name: "Harry Potter and the Philosopher's Stone",
    description: 'A young wizard discovers his magical heritage and attends a school of witchcraft and wizardry.',
    image: 'https://en.wikipedia.org/wiki/File:Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
    author: 'J.K. Rowling',
		medium: 'Digital',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 8,
    name: 'The Catcher in the Rye',
    description: 'A disillusioned teenager wanders through New York City after being expelled from prep school.',
    image: 'https://en.wikipedia.org/wiki/File:TheCatcherintheRye(1951).jpg',
    author: 'J.D. Salinger',
		medium: 'Digital',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 9,
    name: 'The Hobbit',
    description: 'A hobbit goes on an unexpected adventure with a group of dwarves to reclaim their homeland from a dragon.',
    image: 'https://en.wikipedia.org/wiki/File:TheHobbit_FirstEdition.JPG',
    author: 'J.R.R. Tolkien',
		medium: 'Other',
    category_id: 1,
    user_id: 1
  },
  {
    book_id: 10,
    name: 'War and Peace',
    description: 'The lives of Russian aristocrats intertwine with the historical events of the Napoleonic Wars.',
    image: 'https://en.wikipedia.org/wiki/File:War_and_Peace_Book_Cover.jpg',
    author: 'Leo Tolstoy',
		medium: 'Other',
    category_id: 1,
    user_id: 1
  }
]

const exampleMovie = [
  {
    movie_id: 1,
    name: 'Top Gun',
    description: 'RIP Goose',
    image: 'https://en.wikipedia.org/wiki/File:Top_Gun_Movie.jpg',
    director: 'Tony Scott',
    publisher: 'Jerry Bruckheimer Films',
		medium: 'DVD', // ENUM('DVD', 'Blu-Ray', 'Digital', 'VHS', 'Other')
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 2,
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: 'https://en.wikipedia.org/wiki/File:Godfather.jpeg',
    director: 'Francis Ford Coppola',
    publisher: 'Paramount Pictures',
		medium: 'DVD',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 3,
    name: 'Inception',
    description: 'A thief who enters the dreams of others to steal their secrets from their subconscious.',
    image: 'https://en.wikipedia.org/wiki/File:Inception-Theatrical-Poster.jpg',
    director: 'Christopher Nolan',
    publisher: 'Warner Bros. Pictures',
		medium: 'Blu-Ray',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 4,
    name: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    image: 'https://en.wikipedia.org/wiki/File:ShawshankRedemptionMoviePoster.jpg',
    director: 'Frank Darabont',
    publisher: 'Castle Rock Entertainment',
		medium: 'VHS',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 5,
    name: 'The Dark Knight',
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image: 'https://en.wikipedia.org/wiki/File:Dark_knight_rises_poster.jpg',
    director: 'Christopher Nolan',
    publisher: 'Warner Bros. Pictures',
		medium: 'Blu-Ray',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 6,
    name: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    image: 'https://en.wikipedia.org/wiki/File:Matrixposter.jpg',
    director: 'The Wachowskis',
    publisher: 'Warner Bros. Pictures',
		medium: 'DVD',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 7,
    name: 'Jurassic Park',
    description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
    image: 'https://en.wikipedia.org/wiki/File:Jurassic_Park_poster.jpg',
    director: 'Steven Spielberg',
    publisher: 'Universal Pictures',
		medium: 'VHS',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 8,
    name: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    image: 'https://en.wikipedia.org/wiki/File:Forrest_Gump_poster.jpg',
    director: 'Robert Zemeckis',
    publisher: 'Paramount Pictures',
		medium: 'DVD',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 9,
    name: 'Interstellar',
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: 'https://en.wikipedia.org/wiki/File:Interstellar_film_poster.jpg',
    director: 'Christopher Nolan',
    publisher: 'Paramount Pictures',
		medium: 'Other',
    category_id: 2,
    user_id: 1
  },
  {
    movie_id: 10,
    name: 'Gladiator',
    description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    image: 'https://en.wikipedia.org/wiki/File:Gladiator_ver1.jpg',
    director: 'Ridley Scott',
    publisher: 'DreamWorks Pictures',
		medium: 'Other',
    category_id: 2,
    user_id: 1
  }
]

const exampleTVShow = [
  {
    tv_id: 1,
    name: 'Friends',
    description: 'Five 20 somethings that somehow afford a super massive apartment in 90s NYC.',
    image: 'https://en.wikipedia.org/wiki/File:Friends_season_one_cast.jpg',
    network: 'NBC',
		medium: 'DVD', // ENUM('DVD', 'Blu-Ray', 'Digital', 'VHS', 'Other')
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 2,
    name: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to build a drug empire.',
    image: 'https://en.wikipedia.org/wiki/File:Breaking_Bad_title_card.png',
    network: 'AMC',
		medium: 'DVD',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 3,
    name: 'Game of Thrones',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    image: 'https://en.wikipedia.org/wiki/File:Game_of_Thrones_title_card.jpg',
    network: 'HBO',
		medium: 'Digital',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 4,
    name: 'The Office',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    image: 'https://en.wikipedia.org/wiki/File:The_Office_title_card.jpg',
    network: 'NBC',
		medium: 'Blu-Ray',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 5,
    name: 'Stranger Things',
    description: 'A group of kids uncover a series of supernatural mysteries in their small town.',
    image: 'https://en.wikipedia.org/wiki/File:Stranger_Things_logo.png',
    network: 'Netflix',
		medium: 'DIgital',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 6,
    name: 'The Crown',
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    image: 'https://en.wikipedia.org/wiki/File:The_Crown_Season_3.jpg',
    network: 'Netflix',
		medium: 'DVD',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 7,
    name: 'Friends',
    description: 'Follows the personal and professional lives of six twenty to thirty-something friends living in Manhattan.',
    image: 'https://en.wikipedia.org/wiki/File:Friends_season_one_cast.jpg',
    network: 'NBC',
		medium: 'VHS',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 8,
    name: 'Sherlock',
    description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    image: 'https://en.wikipedia.org/wiki/File:Sherlock_titlecard.jpg',
    network: 'BBC',
		medium: 'Blu-Ray',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 9,
    name: 'The Mandalorian',
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    image: 'https://en.wikipedia.org/wiki/File:The_Mandalorian_Logo.svg',
    network: 'Disney+',
		medium: 'Digital',
    category_id: 3,
    user_id: 1
  },
  {
    tv_id: 10,
    name: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    image: 'https://en.wikipedia.org/wiki/File:The_Witcher_logo.svg',
    network: 'Netflix',
		medium: 'Other',
    category_id: 3,
    user_id: 1
  }
]

const exampleMusic = [
	 // TODO ENUM('CD', 'Digital', '8-Track', 'Vinyl')
	{
    music_id: 1,
    name: 'TITLEHERE',
    description: 'DESCRIPTONHERE.',
    image: 'IMAGEHERE',
    artist: 'Taylor Swift',
    publisher: 'PUBLISHERHERE',
    category_id: 4,
    user_id: 1
  },
]

const exampleVideoGame = [
  {
    video_game_id: 1,
    name: 'Fallout: A Post Nuclear Role Playing Game',
    description: 'A game that revolutionized the isometric RPG genre.',
    image: 'https://en.wikipedia.org/wiki/File:Fallout.jpg',
    developer: 'Interplay Productions',
    publisher: 'Interplay Productions',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 2,
    name: 'The Legend of Zelda: Ocarina of Time',
    description: 'A young hero named Link sets out on a quest to stop Ganondorf, king of the Gerudo tribe, from obtaining the Triforce, a sacred relic that grants wishes.',
    image: 'https://en.wikipedia.org/wiki/File:The_Legend_of_Zelda_Ocarina_of_Time_packaging.jpg',
    developer: 'Nintendo EAD',
    publisher: 'Nintendo',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 3,
    name: 'The Witcher 3: Wild Hunt',
    description: 'Follows the story of Geralt of Rivia as he embarks on a quest to find his missing adopted daughter.',
    image: 'https://en.wikipedia.org/wiki/File:The_Witcher_3_cover_art.jpg',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 4,
    name: 'Super Mario Bros.',
    description: 'Two brothers, Mario and Luigi, must rescue Princess Toadstool (later called Princess Peach) of the Mushroom Kingdom from the evil Bowser, king of the Koopas.',
    image: 'https://en.wikipedia.org/wiki/File:Super_Mario_Bros._box.png',
    developer: 'Nintendo R&D4',
    publisher: 'Nintendo',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 5,
    name: 'Final Fantasy VII',
    description: 'Follows mercenary Cloud Strife as he and eco-terrorist group AVALANCHE battle against the corrupt megacorporation Shinra and the legendary soldier Sephiroth.',
    image: 'https://en.wikipedia.org/wiki/File:FFVIIBoxArt.jpg',
    developer: 'Square Enix',
    publisher: 'Square Enix',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 6,
    name: 'The Sims 4',
    description: 'A life simulation game where players can create and control virtual people and guide them through various life stages.',
    image: 'https://en.wikipedia.org/wiki/File:The_Sims_4_cover_art.jpg',
    developer: 'Maxis',
    publisher: 'Electronic Arts',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 7,
    name: 'Minecraft',
    description: 'A game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.',
    image: 'https://en.wikipedia.org/wiki/File:Minecraft_cover.png',
    developer: 'Mojang Studios',
    publisher: 'Mojang Studios',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 8,
    name: 'The Elder Scrolls V: Skyrim',
    description: 'Follows the story of the Dragonborn, a prophesied hero tasked with defeating Alduin, a dragon who is prophesied to destroy the world.',
    image: 'https://en.wikipedia.org/wiki/File:The_Elder_Scrolls_V_Skyrim_cover.png',
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 9,
    name: 'Red Dead Redemption 2',
    description: 'Follows outlaw Arthur Morgan as he navigates the decline of the Wild West and the rise of industrialization, while being pursued by government agents and other outlaws.',
    image: 'https://en.wikipedia.org/wiki/File:RDR2_Official_Cover_Art.jpg',
    developer: 'Rockstar Studios',
    publisher: 'Rockstar Games',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  },
  {
    video_game_id: 10,
    name: 'The Last of Us Part II',
    description: 'Follows Ellie, a young woman who seeks revenge against a cult that brutally attacked her and her loved ones.',
    image: 'https://en.wikipedia.org/wiki/File:The_Last_of_Us_Part_II_cover.jpg',
    developer: 'Naughty Dog',
    publisher: 'Sony Interactive Entertainment',
		medium: 'Digital', // ENUM('Disc', 'Digital', 'External Drive', 'Other')
    category_id: 4,
    user_id: 1
  }
]

const exampleCardGame = [
  {
    card_game_id: 1,
    name: 'Uno',
    description: 'A classic card game where players take turns matching cards in their hand with the current card shown on top of the deck either by color or number.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/UNO_cards_deck.svg/1200px-UNO_cards_deck.svg.png',
    developer: 'Merle Robbins',
    publisher: 'Mattel',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 2,
    name: 'Wackee Six',
    description: '',
    image: 'https://wackeesix.com/cdn/shop/products/Amazon1_1024x1024@2x.jpg?v=1622128503',
    developer: 'Wackee Six',
    publisher: 'Wackee Six',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 3,
    name: 'Cards Against Humanity',
    description: 'A party game in which players complete fill-in-the-blank statements using words or phrases typically deemed offensive, risqué, or politically incorrect printed on playing cards.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cards_Against_Humanity_Logo.svg/1200px-Cards_Against_Humanity_Logo.svg.png',
    developer: 'Max Temkin',
    publisher: 'Cards Against Humanity LLC',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 4,
    name: 'Exploding Kittens',
    description: 'A highly-strategic, kitty-powered version of Russian Roulette. Players draw cards until someone draws an Exploding Kitten, at which point they explode, they are dead, and they are out of the game.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Exploding_Kittens_Official_Cover_Art.jpg/220px-Exploding_Kittens_Official_Cover_Art.jpg',
    developer: 'Elan Lee, Matthew Inman, Shane Small',
    publisher: 'Exploding Kittens Inc.',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 5,
    name: 'Magic: The Gathering',
    description: 'A collectible card game created by mathematics professor Richard Garfield and introduced in 1993 by Wizards of the Coast. Players use decks of cards representing magical spells, creatures, and artifacts to defeat their opponents.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/220px-Magic_the_gathering-card_back.jpg',
    developer: 'Richard Garfield',
    publisher: 'Wizards of the Coast',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 6,
    name: 'Poker',
    description: "A family of card games that combines gambling, strategy, and skill. All poker variants involve betting as an intrinsic part of play, and determine the winner of each hand according to the combinations of players' cards, at least some of which remain hidden until the end of the hand.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Casino_poker_table.jpg/220px-Casino_poker_table.jpg',
    developer: 'Unknown',
    publisher: 'Various',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 7,
    name: 'Crazy Eights',
    description: 'A shedding-type card game in which players try to be the first to get rid of all their cards by playing cards that match the rank or suit of the previously played card.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Crazy_eights.JPG/220px-Crazy_eights.JPG',
    developer: 'Unknown',
    publisher: 'Various',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 8,
    name: 'Gin Rummy',
    description: 'A two-player card game created in 1909 by Elwood T. Baker and his son C. Graham Baker. It is one of the most popular forms of rummy. It is named after the alcoholic drink gin and is played by two players.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gin_rummy.jpg/220px-Gin_rummy.jpg',
    developer: 'Elwood T. Baker, C. Graham Baker',
    publisher: 'Various',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 9,
    name: 'Bridge',
    description: 'A trick-taking card game using a standard deck of 52 playing cards. It is played by four players in two competing partnerships, with partners sitting opposite each other around a table.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bridge_Contract_1_Club_bid_%28ACOL%29.png/220px-Bridge_Contract_1_Club_bid_%28ACOL%29.png',
    developer: 'Harold Stirling Vanderbilt',
    publisher: 'Various',
    category_id: 5,
    user_id: 1
  },
  {
    card_game_id: 10,
    name: 'Yu-Gi-Oh! Trading Card Game',
    description: 'A Japanese collectible card game developed and published by Konami. It is based on the fictional game of Duel Monsters created by manga artist Kazuki Takahashi, which appears in portions of the manga franchise Yu-Gi-Oh!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yu-Gi-Oh%21_Trading_Card_Game_logo.svg/220px-Yu-Gi-Oh%21_Trading_Card_Game_logo.svg.png',
    developer: 'Konami',
    publisher: 'Konami',
    category_id: 5,
    user_id: 1
  }
]


const exampleBoardGame = [
  {
    board_game_id: 1,
    name: 'The Settlers of Catan',
    description: 'A multiplayer board game where players collect resources and use them to build roads, settlements, and cities, aiming to earn victory points.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Catan_2015_Cover.jpg/220px-Catan_2015_Cover.jpg',
    developer: 'Klaus Teuber',
    publisher: 'Catan Studio',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 2,
    name: 'Ticket to Ride',
    description: 'A cross-country train adventure game where players collect train cards to claim railway routes connecting cities, aiming to fulfill destination tickets and earn points.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Ticket_to_Ride_2004_Cover.jpg/220px-Ticket_to_Ride_2004_Cover.jpg',
    developer: 'Alan R. Moon',
    publisher: 'Days of Wonder',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 3,
    name: 'The Quacks of Quedlinburg',
    description: 'A fun game where you try not to make a poisonous explosive potion.',
    image: 'https://en.wikipedia.org/wiki/File:The_Quacks_of_Quedlinburg_box_cover.jpg',
    developer: 'Wolfgang Warsch',
    publisher: 'North Star Games',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 4,
    name: 'Scythe',
    description: 'A board game set in an alternate-history 1920s period where players lead factions to conquer territory and gain resources on a hexagonal game board.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Scythe_2016_Cover.jpg/220px-Scythe_2016_Cover.jpg',
    developer: 'Jamey Stegmaier',
    publisher: 'Stonemaier Games',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 5,
    name: 'Pandemic',
    description: 'A cooperative board game where players work as a team to prevent outbreaks of diseases and find cures before they spread uncontrollably across the world.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Pandemic_%28board_game%29_cover.jpg/220px-Pandemic_%28board_game%29_cover.jpg',
    developer: 'Matt Leacock',
    publisher: 'Z-Man Games',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 6,
    name: 'Azul',
    description: 'A tile drafting and placement game where players compete to decorate the walls of the Royal Palace of Evora with ceramic tiles.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Azul_board_game_cover.jpg/220px-Azul_board_game_cover.jpg',
    developer: 'Michael Kiesling',
    publisher: 'Plan B Games',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 7,
    name: 'Codenames',
    description: "A social word game in which two teams compete to identify their team's secret agents from a grid of code words using only one-word clues.",
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Codenames_Cover_Image.jpg/220px-Codenames_Cover_Image.jpg',
    developer: 'Vlaada Chvátil',
    publisher: 'Czech Games Edition',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 8,
    name: 'Carcassonne',
    description: 'A tile-placement game where players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Carcassonne_Coverart.jpg/220px-Carcassonne_Coverart.jpg',
    developer: 'Klaus-Jürgen Wrede',
    publisher: 'Hans im Glück',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 9,
    name: '7 Wonders',
    description: 'A card drafting game that is played using three decks of cards featuring depictions of ancient civilizations, military conflicts, and commercial activity.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/7_Wonders_Board_Game_Cover.jpg/220px-7_Wonders_Board_Game_Cover.jpg',
    developer: 'Antoine Bauza',
    publisher: 'Repos Production',
    category_id: 6,
    user_id: 1
  },
  {
    board_game_id: 10,
    name: 'Gloomhaven',
    description: 'A cooperative board game that uses a campaign system where players will take on the role of a wandering adventurer with their own special skills and reasons for traveling to this dark corner of the world.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Gloomhaven_cover.jpg/220px-Gloomhaven_cover.jpg',
    developer: 'Isaac Childres',
    publisher: 'Cephalofair Games',
    category_id: 6,
    user_id: 1
  }
]


const exampleWebsite = {
	website_id: 1,
	name: 'Never Gonna Give You Up',
	url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	description: 'Send this to someone when you want to Rick Roll them.',
	creator: 'Rick Astley',
	image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRxusbm2_TGTnDWEIhBTYW2cUQkw',
	category_id: 8,
	user_id: 1,
};

const exampleCategories = [
  {
    category_id: 1,
    name: 'Books',
  },
  {
    category_id: 2,
    name: 'Movies',
  },
  {
    category_id: 3,
    name: 'TV Shows',
  },
  {
    category_id: 4,
    name: 'Video Games',
  },
  {
    category_id: 5,
    name: 'Card Games',
  },
  {
    category_id: 6,
    name: 'Board Games',
  },
  {
    category_id: 7,
    name: 'Websites',
  },
	{
    category_id: 8,
    name: 'Websites',
  },
];

const exampleGenres = [
	{
    genre_id: 1,
    name: 'Other',
  },
  {
    genre_id: 2,
    name: 'Action',
  },
  {
    genre_id: 3,
    name: 'Adventure',
  },
  {
    genre_id: 4,
    name: 'Children',
  },
  {
    genre_id: 5,
    name: 'Comic Book',
  },
  {
    genre_id: 6,
    name: 'Dystopian',
  },
  {
    genre_id: 7,
    name: 'Fantasy',
  },
  {
    genre_id: 8,
    name: 'Historical Fiction',
  },
  {
    genre_id: 9,
    name: 'Horror',
  },
  {
    genre_id: 10,
    name: 'Mystery',
  },
  {
    genre_id: 11,
    name: 'Romance',
  },
  {
    genre_id: 12,
    name: 'Science Fiction',
  },
  {
    genre_id: 13,
    name: 'Short Story',
  },
  {
    genre_id: 14,
    name: 'Thriller',
  },
  {
    genre_id: 15,
    name: 'Young Adult',
  },
	{
    genre_id: 16,
    name: 'Autobiography',
  },
  {
    genre_id: 17,
    name: 'Biography',
  },
  {
    genre_id: 18,
    name: 'Guide / How To',
  },
  {
    genre_id: 19,
    name: 'History',
  },
  {
    genre_id: 20,
    name: 'Humor',
  },
  {
    genre_id: 21,
    name: 'Religion & Spirituality',
  },
  {
    genre_id: 22,
    name: 'Science & Technology',
  },
  {
    genre_id: 23,
    name: 'True Crime',
  },
]
