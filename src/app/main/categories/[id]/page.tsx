import Link from 'next/link';
import { Metadata } from 'next';
import BooksList from '@/app/ui/books/booksList';
import MoviesList from '@/app/ui/movies/moviesList';
import TVShowsList from '@/app/ui/tv-shows/TVShowsList';
import { getIDNameImageByBookID, getIDNameImageByTVShowID, getIDNameImageByMovieID, getIDNameImageByGameID, getIDNameImageByMusicID, getIDNameImageByWebsiteID } from '@/app/lib/data';
// import VideoGamesList from '@/app/ui/video-game/videoGamesList';
// import CardGamesList from '@/app/ui/card-games/cardGamesList';
// import BoardGamesList from '@/app/ui/board-games/boardGamesList';
// import MusicList from '@/app/ui/tv-shows/MusicList';
// import WebsiteList from '@/app/ui/Website/WebsiteList';

export const metadata: Metadata = {
	title: 'My TV Shows',
};

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;

	switch (id) {
		// Books
		case '1': {
			let books = await getIDNameImageByBookID();

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My Books</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					<BooksList books={books} />
				</main>
			);
		}
		// Movies
		case '2': {
			const movies = await getIDNameImageByMovieID();

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My Movies</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					<MoviesList movies={movies} />
				</main>
			);
		}
		// TV Shows
		case '3': {
			const tvshows = await getIDNameImageByTVShowID();

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My TV Shows</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					<TVShowsList tvshows={tvshows} />
				</main>
			);
		}
		// Video Games
		case '4': {
			const videogames = await getIDNameImageByGameID('video_game');
			// let videogames: Array<any> = [
			// 	{
			// 		video_game_id: '1',
			// 		name: 'Fallout: A Post Nuclear Role Playing Game',
			// 		description: 'Set in a post-apocalyptic world, players navigate the wasteland, encountering factions, mutants, and moral dilemmas in this iconic RPG.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/a/af/Fallout.jpg',
			// 		developer: 'Interplay Productions',
			// 		publisher: 'Interplay Productions',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '2',
			// 		name: 'The Legend of Zelda: Ocarina of Time',
			// 		description: 'A young hero named Link sets out on a quest to stop Ganondorf, king of the Gerudo tribe, from obtaining the Triforce, a sacred relic that grants wishes.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg',
			// 		developer: 'Nintendo EAD',
			// 		publisher: 'Nintendo',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '3',
			// 		name: 'The Witcher 3: Wild Hunt',
			// 		description: 'Follows the story of Geralt of Rivia as he embarks on a quest to find his missing adopted daughter.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
			// 		developer: 'CD Projekt Red',
			// 		publisher: 'CD Projekt',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '4',
			// 		name: 'Super Mario Bros.',
			// 		description: 'Two brothers, Mario and Luigi, must rescue Princess Toadstool (later called Princess Peach) of the Mushroom Kingdom from the evil Bowser, king of the Koopas.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
			// 		developer: 'Nintendo R&D4',
			// 		publisher: 'Nintendo',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '5',
			// 		name: 'Final Fantasy VII',
			// 		description: 'Follows mercenary Cloud Strife as he and eco-terrorist group AVALANCHE battle against the corrupt megacorporation Shinra and the legendary soldier Sephiroth.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg',
			// 		developer: 'Square Enix',
			// 		publisher: 'Square Enix',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '6',
			// 		name: 'The Sims 4',
			// 		description: 'A life simulation game where players can create and control virtual people and guide them through various life stages.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Sims4_Rebrand.png',
			// 		developer: 'Maxis',
			// 		publisher: 'Electronic Arts',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '7',
			// 		name: 'Minecraft',
			// 		description:
			// 			'A game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
			// 		developer: 'Mojang Studios',
			// 		publisher: 'Mojang Studios',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '8',
			// 		name: 'The Elder Scrolls V: Skyrim',
			// 		description: 'Follows the story of the Dragonborn, a prophesied hero tasked with defeating Alduin, a dragon who is prophesied to destroy the world.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
			// 		developer: 'Bethesda Game Studios',
			// 		publisher: 'Bethesda Softworks',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '9',
			// 		name: 'Red Dead Redemption 2',
			// 		description:
			// 			'Follows outlaw Arthur Morgan as he navigates the decline of the Wild West and the rise of industrialization, while being pursued by government agents and other outlaws.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
			// 		developer: 'Rockstar Studios',
			// 		publisher: 'Rockstar Games',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		video_game_id: '10',
			// 		name: 'The Last of Us Part II',
			// 		description: 'Follows Ellie, a young woman who seeks revenge against a cult that brutally attacked her and her loved ones.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png',
			// 		developer: 'Naughty Dog',
			// 		publisher: 'Sony Interactive Entertainment',
			// 		format: 'Digital',
			// 		category_id: '4',
			// 		user_id: '1',
			// 	},
			// ];

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My Video Games</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					{/* <VideoGamesList videogames={videogames} /> */}
				</main>
			);
		}
		// Card Games
		case '5': {
			const cardgames = await getIDNameImageByGameID('card_game');
			// let cardgames: Array<any> = [
			// 	{
			// 		card_game_id: '1',
			// 		name: 'Uno',
			// 		description: 'A classic card game where players take turns matching cards in their hand with the current card shown on top of the deck either by color or number.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/UNO_Logo.svg',
			// 		developer: 'Merle Robbins',
			// 		publisher: 'Mattel',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '1',
			// 		name: 'Wackee Six',
			// 		description: '',
			// 		image: 'https://wackeesix.com/cdn/shop/products/Amazon1_1024x1024@2x.jpg?v=1622128503',
			// 		developer: 'Wackee Six',
			// 		publisher: 'Wackee Six',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '3',
			// 		name: 'Catan: The Card Game',
			// 		description: 'A two-player card game adaptation of the popular board game Settlers of Catan, where players collect resources to build settlements and cities.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg',
			// 		developer: 'Klaus Teuber',
			// 		publisher: 'Kosmos',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '4',
			// 		name: 'Exploding Kittens',
			// 		description:
			// 			'A highly-strategic, kitty-powered version of Russian Roulette. Players draw cards until someone draws an Exploding Kitten, at which point they explode, they are dead, and they are out of the game.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Exploding_Kittens.png',
			// 		developer: 'Elan Lee, Matthew Inman, Shane Small',
			// 		publisher: 'Exploding Kittens Inc.',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '5',
			// 		name: 'Magic: The Gathering',
			// 		description:
			// 			'A collectible card game created by mathematics professor Richard Garfield and introduced in 1993 by Wizards of the Coast. Players use decks of cards representing magical spells, creatures, and artifacts to defeat their opponents.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/220px-Magic_the_gathering-card_back.jpg',
			// 		developer: 'Richard Garfield',
			// 		publisher: 'Wizards of the Coast',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '6',
			// 		name: 'Codenames',
			// 		description: "A social word game where players give one-word clues to help their teammates guess words on a grid, while avoiding the opposing team's words and the assassin.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Codenames_board_game.jpg',
			// 		developer: 'Vlaada Chvátil',
			// 		publisher: 'Czech Games Edition',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '7',
			// 		name: 'Crazy Eights',
			// 		description:
			// 			'A shedding-type card game in which players try to be the first to get rid of all their cards by playing cards that match the rank or suit of the previously played card.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Crazy_Eights.jpg',
			// 		developer: 'Unknown',
			// 		publisher: 'Various',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '8',
			// 		name: 'Gin Rummy',
			// 		description:
			// 			'A two-player card game created in 1909 by Elwood T. Baker and his son C. Graham Baker. It is one of the most popular forms of rummy. It is named after the drink gin and is played by two players.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/3_playing_cards.jpg',
			// 		developer: 'Elwood T. Baker, C. Graham Baker',
			// 		publisher: 'Various',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '9',
			// 		name: 'Bridge',
			// 		description:
			// 			'A trick-taking card game using a standard deck of 52 playing cards. It is played by four players in two competing partnerships, with partners sitting opposite each other around a table.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Bridge-Gro%C3%9Fschlemm.JPG',
			// 		developer: 'Harold Stirling Vanderbilt',
			// 		publisher: 'Various',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		card_game_id: '10',
			// 		name: 'Yu-Gi-Oh! Trading Card Game',
			// 		description:
			// 			'A Japanese collectible card game developed and published by Konami. It is based on the fictional game of Duel Monsters created by manga artist Kazuki Takahashi, which appears in portions of the manga franchise Yu-Gi-Oh!',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg',
			// 		developer: 'Konami',
			// 		publisher: 'Konami',
			// 		category_id: '5',
			// 		user_id: '1',
			// 	},
			// ];

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My Card Games</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					{/* <CardGamesList cardgames={cardgames} /> */}
				</main>
			);
		}
		// Board Games
		case '6': {
			const boardgames = await getIDNameImageByGameID('board_game');
			// let boardgames: Array<any> = [
			// 	{
			// 		board_game_id: '1',
			// 		name: 'The Settlers of Catan',
			// 		description: 'A multiplayer board game where players collect resources and use them to build roads, settlements, and cities, aiming to earn victory points.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg',
			// 		developer: 'Klaus Teuber',
			// 		publisher: 'Catan Studio',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '2',
			// 		name: 'Ticket to Ride',
			// 		description:
			// 			'A cross-country train adventure game where players collect train cards to claim railway routes connecting cities, aiming to fulfill destination tickets and earn points.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/9/92/Ticket_to_Ride_Board_Game_Box_EN.jpg',
			// 		developer: 'Alan R. Moon',
			// 		publisher: 'Days of Wonder',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '3',
			// 		name: 'The Quacks of Quedlinburg',
			// 		description: "A push-your-luck game where players are quack doctors mixing potions to cure ailments. Each ingredient adds to the potion's power, but beware of making it explode!",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/e/e3/The_Quacks_of_Quedlinburg_box_cover.jpg',
			// 		developer: 'Wolfgang Warsch',
			// 		publisher: 'North Star Games',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '4',
			// 		name: 'Scythe',
			// 		description: 'A board game set in an alternate-history 1920s period where players lead factions to conquer territory and gain resources on a hexagonal game board.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Scythe_boxart.png',
			// 		developer: 'Jamey Stegmaier',
			// 		publisher: 'Stonemaier Games',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '5',
			// 		name: 'Pandemic',
			// 		description: 'A cooperative board game where players work as a team to prevent outbreaks of diseases and find cures before they spread uncontrollably across the world.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/3/36/Pandemic_game.jpg',
			// 		developer: 'Matt Leacock',
			// 		publisher: 'Z-Man Games',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '6',
			// 		name: 'Azul',
			// 		description: 'A tile drafting and placement game where players compete to decorate the walls of the Royal Palace of Evora with ceramic tiles.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Picture_of_Azul_game_box.jpg',
			// 		developer: 'Michael Kiesling',
			// 		publisher: 'Plan B Games',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '7',
			// 		name: 'Codenames',
			// 		description: "A social word game in which two teams compete to identify their team's secret agents from a grid of code words using only one-word clues.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Codenames_board_game.jpg',
			// 		developer: 'Vlaada Chvátil',
			// 		publisher: 'Czech Games Edition',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '8',
			// 		name: 'Carcassonne',
			// 		description:
			// 			'A tile-placement game where players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Carcassonne-game.jpg',
			// 		developer: 'Klaus-Jürgen Wrede',
			// 		publisher: 'Hans im Glück',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '9',
			// 		name: '7 Wonders',
			// 		description: 'A card drafting game that is played using three decks of cards featuring depictions of ancient civilizations, military conflicts, and commercial activity.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/7_Wonders_-_New_Edition_boxart.png',
			// 		developer: 'Antoine Bauza',
			// 		publisher: 'Repos Production',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		board_game_id: '10',
			// 		name: 'Gloomhaven',
			// 		description:
			// 			'A cooperative board game that uses a campaign system where players will take on the role of a wandering adventurer with their own special skills and reasons for traveling to this dark corner of the world.',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Gloomhaven_Cover_Art.jpg',
			// 		developer: 'Isaac Childres',
			// 		publisher: 'Cephalofair Games',
			// 		category_id: '6',
			// 		user_id: '1',
			// 	},
			// ];

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My Board Games</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					{/* <BoardGamesList boardgames={boardgames} /> */}
				</main>
			);
		}
		// Music
		case '7': {
			const music = await getIDNameImageByMusicID();
			// let music: Array<any> = [
			// 	{
			// 		music_id: '1',
			// 		name: 'Bohemian Rhapsody',
			// 		description: "A genre-defying rock epic with operatic influences, showcasing Freddie Mercury's vocal prowess.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png',
			// 		artist: 'Queen',
			// 		album: 'A Night at the Opera',
			// 		studio: 'EMI Studios, London',
			// 		format: 'Vinyl',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '2',
			// 		name: 'Imagine',
			// 		description: "A timeless anthem for peace and unity, John Lennon's piano ballad inspires hope and imagination.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Lennon_Imagine_Sleeve_1975.jpg',
			// 		artist: 'John Lennon',
			// 		album: 'Imagine',
			// 		studio: 'Ascot Sound Studios, Ascot',
			// 		format: 'CD',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '3',
			// 		name: 'Like a Rolling Stone',
			// 		description: "Bob Dylan's revolutionary song transforms folk into electrifying rock, capturing the essence of 1960s counterculture.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Like_a_rolling_stone_by_bob_dylan_us_vinyl_side_a.png',
			// 		artist: 'Bob Dylan',
			// 		album: 'Highway 61 Revisited',
			// 		studio: 'Columbia Studio A, New York',
			// 		format: 'Vinyl',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '4',
			// 		name: 'Stairway to Heaven',
			// 		description: "Led Zeppelin's epic masterpiece blends folk, rock, and mysticism, ascending to legendary status.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stairway_to_Heaven_by_Led_Zeppelin_US_promotional_single.png',
			// 		artist: 'Led Zeppelin',
			// 		album: 'Led Zeppelin IV',
			// 		studio: 'Island Studios, London',
			// 		format: 'Digital',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '5',
			// 		name: 'Smells Like Teen Spirit',
			// 		description: "Nirvana's grunge anthem encapsulates teenage disillusionment and rebellion, reshaping the music landscape of the 1990s.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Smells_Like_Teen_Spirit.jpg',
			// 		artist: 'Nirvana',
			// 		album: 'Nevermind',
			// 		studio: 'Sound City Studios, Van Nuys',
			// 		format: '8-Track',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '6',
			// 		name: 'Hotel California',
			// 		description: "The Eagles' iconic rock ballad paints a vivid picture of excess and disillusionment in the California lifestyle.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Hotel_California_Album.jpg',
			// 		artist: 'The Eagles',
			// 		album: 'Hotel California',
			// 		studio: 'Criteria Studios, Miami',
			// 		format: 'CD',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '7',
			// 		name: 'Smile Like You Mean It',
			// 		description: "A melancholic yet uplifting indie rock anthem from The Killers' debut album, capturing the complexities of human emotions.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Smile-Like-You-Mean-It.jpg',
			// 		artist: 'The Killers',
			// 		album: 'Hot Fuss',
			// 		studio: 'Cornerstone Studios, Los Angeles',
			// 		format: 'Digital',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '8',
			// 		name: 'Piano Man',
			// 		description: "Billy Joel's timeless ode to the struggles and dreams of everyday people, set against the backdrop of a piano bar.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/9/98/Billy_Joel_Piano_Man_single.jpg',
			// 		artist: 'Billy Joel',
			// 		album: 'Piano Man',
			// 		studio: 'Devonshire Studios, North Hollywood',
			// 		format: 'Vinyl',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '9',
			// 		name: 'Purple Rain',
			// 		description: "Prince's electrifying rock ballad, synonymous with his legendary live performances, encapsulates raw emotion and musical genius.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/8/86/Purple-rain-cover.jpg',
			// 		artist: 'Prince',
			// 		album: 'Purple Rain',
			// 		studio: 'First Avenue, Minneapolis',
			// 		format: 'Digital',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		music_id: '10',
			// 		name: 'Thriller',
			// 		description: "Michael Jackson's iconic pop masterpiece, with its infectious beats and groundbreaking music video, remains a cultural phenomenon.",
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Michael_jackson_thriller_12_inch_single_USA.jpg',
			// 		artist: 'Michael Jackson',
			// 		album: 'Thriller',
			// 		studio: 'Westlake Recording Studios, Los Angeles',
			// 		format: 'Vinyl',
			// 		category_id: '7',
			// 		user_id: '1',
			// 	},
			// ];

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My Music</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					{/* <MusicList music={music} /> */}
				</main>
			);
		}
		// Websites
		case '8': {
			const websites = await getIDNameImageByBookID();
			// let websites: Array<any> = [
			// 	{
			// 		website_id: '1',
			// 		name: 'Never Gonna Give You Up',
			// 		url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			// 		description: 'Send this to someone when you want to Rick Roll them.',
			// 		creator: 'Rick Astley',
			// 		image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRxusbm2_TGTnDWEIhBTYW2cUQkw',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '2',
			// 		name: 'Wikipedia',
			// 		url: 'https://www.wikipedia.org/',
			// 		description: 'A vast online encyclopedia where users can find information on virtually any topic.',
			// 		creator: 'Jimmy Wales, Larry Sanger',
			// 		image: 'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '3',
			// 		name: 'Reddit',
			// 		url: 'https://www.reddit.com/',
			// 		description: 'A social news aggregation and discussion website where registered members can submit content, such as text posts or direct links.',
			// 		creator: 'Steve Huffman, Alexis Ohanian',
			// 		image: 'https://www.redditinc.com/assets/images/site/reddit-logo.png',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '4',
			// 		name: "Amazon Today's Deals",
			// 		url: 'https://www.amazon.com/deals?ref_=nav_cs_gb',
			// 		description: 'This leads to an Amazon page showing their daily deals.',
			// 		creator: 'Jeff Bezos',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '5',
			// 		name: 'Shipping Container House Pinterest Board',
			// 		url: 'https://www.pinterest.com/ideas/shipping-container-house/933220745024/',
			// 		description: 'This is a Pinterest page that has ideas for shipping container houses.',
			// 		creator: 'Ben Silbermann, Evan Sharp, Paul Sciarra',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Pinterest_Logo.svg',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '6',
			// 		name: 'Netflix',
			// 		url: 'https://www.netflix.com/',
			// 		description: 'A streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
			// 		creator: 'Reed Hastings, Marc Randolph',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '7',
			// 		name: 'YouTube',
			// 		url: 'https://www.youtube.com/',
			// 		description: 'A video sharing website where users can upload, view, and share videos.',
			// 		creator: 'Steve Chen, Chad Hurley, Jawed Karim',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '8',
			// 		name: 'My GitHub Repositories',
			// 		url: 'https://github.com/KobeLemon?tab=repositories',
			// 		description: 'This is the page where all of my GitHub repositories are located.',
			// 		creator: 'Chris Wanstrath, PJ Hyett, Tom Preston-Werner',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '9',
			// 		name: 'Instagram',
			// 		url: 'https://www.instagram.com/',
			// 		description: 'A photo and video sharing social networking service owned by Facebook, Inc.',
			// 		creator: 'Kevin Systrom, Mike Krieger',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// 	{
			// 		website_id: '10',
			// 		name: 'Stack Overflow',
			// 		url: 'https://stackoverflow.com/',
			// 		description:
			// 			'A question and answer website for professional and enthusiast programmers. It is a trusted source of information for developers seeking solutions to coding problems.',
			// 		creator: 'Jeff Atwood, Joel Spolsky',
			// 		image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg',
			// 		category_id: '8',
			// 		user_id: '1',
			// 	},
			// ];

			return (
				<main className='p-8 col-span-full'>
					<h2 className='text-center'>My Websites</h2>
					<Link href={'/main/categories'}>← Back to Categories</Link>
					{/* <WebsitesList websites={websites} /> */}
				</main>
			);
		}
	}
}
