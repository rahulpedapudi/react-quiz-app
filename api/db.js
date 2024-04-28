const data = {
  results: [
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question: "What was the last Marx Brothers film to feature Zeppo?",
      correct_answer: "Duck Soup",
      incorrect_answers: [
        "A Night at the Opera",
        "A Day at the Races",
        "Monkey Business",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Board Games",
      question:
        "Which one of these is not a real game in the Dungeons & Dragons series?",
      correct_answer: "Extreme Dungeons & Dragons",
      incorrect_answers: [
        "Advanced Dungeons & Dragons",
        "Dungeons & Dragons 3.5th edition",
        "Advanced Dungeons & Dragons 2nd edition",
      ],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Film",
      question: "George Lucas directed the entire original Star Wars trilogy.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "What was the name of the protagonist of Metal Gear Solid V: The Phantom Pain?",
      correct_answer: 'Punished "Venom" Snake',
      incorrect_answers: ["Miller", "Solid Snake", "Ocelot"],
    },
    {
      type: "boolean",
      difficulty: "hard",
      category: "Science: Mathematics",
      question:
        'You can square root a negative number with an imaginary number "i".',
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "What was the original release date of Grand Theft Auto V?",
      correct_answer: "September 17, 2013",
      incorrect_answers: [
        "August 17, 2013",
        "April 14, 2015",
        "November 18, 2014",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        'In the game "Cave Story," what is the character Balrog\'s catchphrase?',
      correct_answer: "Huzzah!",
      incorrect_answers: ["Yes!", "Whoa there!", "Nyeh heh heh!"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Which studio made Cowboy Bebop?",
      correct_answer: "Sunrise",
      incorrect_answers: ["Bones", "Madhouse", "Pierriot"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "In computing terms, typically what does CLI stand for?",
      correct_answer: "Command Line Interface",
      incorrect_answers: [
        "Common Language Input",
        "Control Line Interface",
        "Common Language Interface",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "In the Mass Effect trilogy, who is the main protagonist?",
      correct_answer: "Shepard",
      incorrect_answers: ["Mordin", "Garrus", "Thane"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question: 'In "Fallout 4" which faction is not present in the game?',
      correct_answer: "The Enclave",
      incorrect_answers: [
        "The Minutemen",
        "The Brotherhood of Steel",
        "The Institute",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Musicals & Theatres",
      question: 'When was the play "Macbeth" written?',
      correct_answer: "1606",
      incorrect_answers: ["1605", "1723", "1628"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Mythology",
      question:
        "What mytological creatures have women's faces and vultures' bodies?",
      correct_answer: "Harpies",
      incorrect_answers: ["Mermaids", "Nymph", "Lilith"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Books",
      question: "By what name was the author Eric Blair better known?",
      correct_answer: "George Orwell",
      incorrect_answers: ["Aldous Huxley", "Ernest Hemingway", "Ray Bradbury"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "How many normal endings are there in Cry Of Fear's campaign mode?",
      correct_answer: "4",
      incorrect_answers: ["5", "3", "6"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question:
        "Which of the following computer components can be built using only NAND gates?",
      correct_answer: "ALU",
      incorrect_answers: ["CPU", "RAM", "Register"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: "Who is the lead singer of the British pop rock band Coldplay?",
      correct_answer: "Chris Martin",
      incorrect_answers: ["Jonny Buckland", "Guy Berryman", "Will Champion"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question:
        'Which monster in "Monster Hunter Tri" was causing earthquakes in Moga Village?',
      correct_answer: "Ceadeus",
      incorrect_answers: ["Alatreon", "Rathalos", "Lagiacrus"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Celebrities",
      question:
        'Which radio personality calls himself "The King of All Media"?',
      correct_answer: "Howard Stern",
      incorrect_answers: ["Rush Limbaugh", "Pete Tong", "Ryan Seacrest"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: 'What was the code name for the "Nintendo Gamecube"?',
      correct_answer: "Dolphin",
      incorrect_answers: ["Nitro", "Revolution", "Atlantis"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Mathematics",
      question: "What is the approximate value of mathematical constant e?",
      correct_answer: "2.72",
      incorrect_answers: ["3.14", "1.62", "1.41"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Geography",
      question:
        "San Marino is the only country completely surrounded by another country.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Vehicles",
      question: "Which supercar company is from Sweden?",
      correct_answer: "Koenigsegg",
      incorrect_answers: ["Bugatti", "Lamborghini", "McLaren"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Politics",
      question:
        "Due to the Nagoya Resolution, China agreed to allow Taiwan to compete separately in international sporting events under what name?",
      correct_answer: "Chinese Taipei",
      incorrect_answers: [
        "Chinese Taiwan",
        "Republic of Taiwan",
        "Republic of Taipei ",
      ],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science & Nature",
      question: "Shrimp can swim backwards.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "What European country is not a part of the EU?",
      correct_answer: "Norway",
      incorrect_answers: ["Lithuania", "Ireland", "Czechia"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Comics",
      question:
        "Who is the second person to take up the mantle of Night Owl in the Watchmen graphic novel?",
      correct_answer: "Daniel Dreiberg",
      incorrect_answers: ["Nelson Gardner", "Hollis Mason", "Adrian Veidt"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "History",
      question: "In which year did the Tokyo Subway Sarin Attack occur?",
      correct_answer: "1995",
      incorrect_answers: ["2001", "2011", "1991"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science & Nature",
      question: "Deionized water is water with which of the following removed?",
      correct_answer: "Iron",
      incorrect_answers: ["Oxygen", "Hydrogen", "Uncharged atoms"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question:
        "In Halo 2, how many rounds does the M6C hold in a single magazine?",
      correct_answer: "12",
      incorrect_answers: ["6", "36", "18"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question:
        "What is the name of French electronic music producer Madeon's 2015 debut studio album?",
      correct_answer: "Adventure",
      incorrect_answers: ["The City", "Icarus", "Pop Culture"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Film",
      question: 'What city did the monster attack in the film, "Cloverfield"?',
      correct_answer: "New York, New York",
      incorrect_answers: [
        "Las Vegas, Nevada",
        "Chicago, Illinois",
        "Orlando, Florida",
      ],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        'The main character in the "Half-Life" franchise is named Morgan Freeman.',
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "Which student in Yandere Simulator is known for asking irritating and stupid questions?",
      correct_answer: "Midori Gurin",
      incorrect_answers: ["Kokona Hruka", "Oka Ruto", "Pipi Osu"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "History",
      question:
        'What did the abbreviation "RMS" stand for in the RMS Titanic in 1912?',
      correct_answer: "Royal Mail Ship",
      incorrect_answers: [
        "Royal Majesty Service",
        "Regular Maritime Schedule ",
        "Regulated Maelstrom Sensor",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Books",
      question: "How many books are in the Chronicles of Narnia series?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "5"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science & Nature",
      question:
        "Autosomal-dominant Compelling Helio-Ophthalmic Outburst syndrome is the need to do what when seeing the Sun?",
      correct_answer: "Sneeze",
      incorrect_answers: ["Cough", "Yawn", "Hiccup"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "The first version of Blockland came out in which year?",
      correct_answer: "2004",
      incorrect_answers: ["2007", "2008", "2006"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "The walls of the Goldenrod City Gym in 'Pokémon Gold and Silver' are arranged in the shape of which Pokémon?",
      correct_answer: "Clefairy",
      incorrect_answers: ["Bulbasaur", "Pikachu", "Pidgey"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question:
        "In the 1974 Christmas flick 'The Year Without a Santa Claus,' what are the names of the two elves who help Mrs. Claus save Christmas?",
      correct_answer: "Jingle & Jangle",
      incorrect_answers: [
        "Buddy & Bobby",
        "Holly & Jolly",
        "Snowflake & Icicle",
      ],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "General Knowledge",
      question: "An eggplant is a vegetable.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question:
        "Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?",
      correct_answer: "Dave",
      incorrect_answers: ["John", "Will", "Carl"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "History",
      question: "Who discovered Penicillin?",
      correct_answer: "Alexander Flemming",
      incorrect_answers: ["Marie Curie", "Alfred Nobel", "Louis Pasteur"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Mathematics",
      question:
        "The French mathematician Évariste Galois is primarily known for his work in which?",
      correct_answer: "Galois Theory",
      incorrect_answers: [
        "Galois' Continued Fractions",
        "Galois' Method for PDE's ",
        "Abelian Integration",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "What was the character Kirby originally going to be named?",
      correct_answer: "Popopo",
      incorrect_answers: ["Dedede", "Waddle Dee", "Prince Puff"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "From where does the Nintendo video game character Mario derive his name?",
      correct_answer: "The landlord of the American headquarters",
      incorrect_answers: [
        "Shigeru Miyamoto's father in law",
        "Satoru Iwata's plumber",
        "The date (Mar 10) that Donkey Kong was released.",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Film",
      question:
        "In the 1971 film 'Willy Wonka & the Chocolate Factory', who played Willy Wonka?",
      correct_answer: "Gene Wilder",
      incorrect_answers: ["Shia LeBouf", "Peter Ostrum", "Johnny Depp"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question:
        "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
      correct_answer: "Fiat",
      incorrect_answers: ["Maserati", "Alfa Romeo", "Ferrari"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Musicals & Theatres",
      question:
        "The Andrew Lloyd Webber musical 'Cats' is based off a book of poems written by which author?",
      correct_answer: "T.S. Elliot",
      incorrect_answers: [
        "Andrew Lloyd Webber",
        "Emily Dickenson",
        "Robert Frost",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Sports",
      question: "Josh Mansour is part of what NRL team?",
      correct_answer: "Penrith Panthers",
      incorrect_answers: [
        "Melbourne Storm",
        "Sydney Roosters",
        "North Queensland Cowboys",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "Typically, how many keys are on a piano?",
      correct_answer: "88",
      incorrect_answers: ["24", "12", "96"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "'The Potato Sack' was a collection of indie games released on Steam in 2011 as a promotion for which game?",
      correct_answer: "Portal 2",
      incorrect_answers: ["Left 4 Dead 2", "Half-Life 3", "Dota 2"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Gadgets",
      question:
        "Who patented a steam engine that produced continuous rotary motion?",
      correct_answer: "James Watt",
      incorrect_answers: [
        "Nikola Tesla",
        "Albert Einstein",
        "Alessandro Volta",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Vehicles",
      question: "Which one of these chassis codes are used by BMW 3-series?",
      correct_answer: "E46",
      incorrect_answers: ["E39", "E85", "F10"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Film",
      question:
        "In the movie The Revenant, DiCaprio's character hunts down the killer of his son.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question:
        '"The Singing Cowboy" Gene Autry is credited with the first recording for all but which classic Christmas jingle?',
      correct_answer: "White Christmas",
      incorrect_answers: [
        "Frosty the Snowman",
        "Rudolph the Red-Nosed Reindeer",
        "Here Comes Santa Claus",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Film",
      question: 'What was the name of the planet in "Aliens"?',
      correct_answer: "LV-426",
      incorrect_answers: [
        "Weyland Yutani Corporation Base",
        "FR-838",
        "DI-621",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question: "What was Raekwon the Chef's debut solo album?",
      correct_answer: "Only Built 4 Cuban Linx",
      incorrect_answers: [
        "Shaolin vs Wu-Tang",
        "The Wild",
        "The Lex Diamond Story",
      ],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "History",
      question: "The Korean War ended in 1953 without any ceasefire.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Music",
      question:
        'Which Toronto landmark was featured on the cover art of Canadian rapper Drake\'s 2016 album "Views"?',
      correct_answer: "CN Tower",
      incorrect_answers: [
        "Allan Gardens",
        "Union Station",
        "Prince of Wales Theatre",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Sports",
      question: "Which year was the third Super Bowl held?",
      correct_answer: "1969",
      incorrect_answers: ["1968", "1971", "1970"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Japanese Anime & Manga",
      question: 'Which of these is not a world in the anime "Buddyfight"?',
      correct_answer: "Ancient Dragon World",
      incorrect_answers: [
        "Dragon World",
        "Star Dragon World",
        "Darkness Dragon World",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Cartoon & Animations",
      question:
        'In "SpongeBob SquarePants", what is the name of Sandy Cheek\'s place of residence?',
      correct_answer: "Sandy's Treedome",
      incorrect_answers: [
        '"The Dome"',
        "Sandy's Bubble",
        "Auquatic Reseach Centre",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "General Knowledge",
      question: "The Flag of the European Union has how many stars on it?",
      correct_answer: "12",
      incorrect_answers: ["10", "14", "16"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "The Dice Tower network of board game podcasts and videos is run by which individual?",
      correct_answer: "Tom Vasel",
      incorrect_answers: ["Jason LeVine", "Borth Sampson", "Uncle Pennybags"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "History",
      question:
        "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
      correct_answer: "Typhoons",
      incorrect_answers: ["Tornados", "Economic depression", "Samurai"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Sports",
      question: "What is the nickname of Northampton town's rugby union club?",
      correct_answer: "Saints",
      incorrect_answers: ["Harlequins", "Saracens", "Wasps"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Books",
      question: '"Green Eggs and Ham" consists of only 50 different words.',
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Entertainment: Music",
      question:
        '"The Division Bell" is the final album of the progressive rock band Pink Floyd.',
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The programming language 'Swift' was created to replace what other programming language?",
      correct_answer: "Objective-C",
      incorrect_answers: ["C#", "Ruby", "C++"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Geography",
      question: 'There exists an island named "Java".',
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "Which of the following Call of Duty games was a PS3 launch title?",
      correct_answer: "Call of Duty 3",
      incorrect_answers: [
        "Call of Duty 4: Modern Warfare",
        "Call of Duty: World at War",
        "Call of Duty: Roads to Victory",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "General Knowledge",
      question: "Chartreuse is a color between yellow and what?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Black", "Purple"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Music",
      question: 'Whose signature guitar technique is called the "windmill"?',
      correct_answer: "Pete Townshend",
      incorrect_answers: ["Jimmy Page", "Eddie Van Halen", "Jimi Hendrix"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question:
        "In the alternate timeline in Mortal Kombat, which character was the one to slaughter the Shirai Ryu clan?",
      correct_answer: "Quan Chi",
      incorrect_answers: ["Sub-Zero", "Sektor", "Shang Tsung"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Celebrities",
      question: "Which celebrity announced his presidency in 2015?",
      correct_answer: "Kanye West",
      incorrect_answers: ["Donald Trump", "Leonardo DiCaprio", "Miley Cyrus"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        'How many games are there in the "Colony Wars" series for the PlayStation?',
      correct_answer: "3",
      incorrect_answers: ["2", "4", "5"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        'Which musical artist was NOT featured as playable avatars in the game "DJ Hero"?',
      correct_answer: "Dr. Dre",
      incorrect_answers: ["DJ Shadow", "Daft Punk", "Grandmaster Flash"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Celebrities",
      question: "What year was O.J. Simpson aquitted of his murder charges?",
      correct_answer: "1995",
      incorrect_answers: ["1992", "1996", "1991"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question:
        "Where are Terror Fiends more commonly found in the Nintendo game Miitopia?",
      correct_answer: "New Lumos",
      incorrect_answers: ["Peculia", "The Sky Scraper", "Otherworld"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Musicals & Theatres",
      question:
        '"Doctor Who" star David Tennant performed in a rendition of which Shakespearean play?',
      correct_answer: "Hamlet",
      incorrect_answers: ["The Tempest", "Othello", "The Taming of the Shrew"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        'The main character in the "Half-Life" franchise is named Morgan Freeman.',
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Music",
      question:
        "Which of these aliases has NOT been used by electronic musician Aphex Twin?",
      correct_answer: "Burial",
      incorrect_answers: ["Caustic Window", "Bradley Strider", "GAK"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Video Games",
      question:
        "In Super Mario Bros., who informs Mario that the princess is in another castle?",
      correct_answer: "Toad",
      incorrect_answers: ["Luigi", "Yoshi", "Bowser"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Geography",
      question: "What year is on the flag of the US state Wisconsin?",
      correct_answer: "1848",
      incorrect_answers: ["1634", "1783", "1901"],
    },
  ],
};
const { results } = data;

// const fildata = results.filter((item) => {
//   return item.category === "Entertainment: Board Games";
//   // console.log(item);
// });
// console.log(fildata);
// const cate = results.map((item) => item.category);
// console.log(cate);

export default results;
