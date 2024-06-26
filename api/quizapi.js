import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

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
      difficulty: "medium",
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
  ],
};
const { results } = data;

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/random", (req, res) => {
  const index = Math.floor(Math.random() * results.length);
  res.json(results[index]);
});

app.get("/filter", (req, res) => {
  //   const type = req.query.type;
  let filteredques;

  if (req.query.type || req.query.difficulty) {
    if (req.query.type && req.query.difficulty) {
      filteredques = results.filter(
        (ques) =>
          ques.type === req.query.type &&
          ques.difficulty == req.query.difficulty
      );
    } else if (req.query.type) {
      filteredques = results.filter((ques) => ques.type === req.query.type);
    } else if (req.query.difficulty) {
      filteredques = results.filter(
        (ques) => ques.difficulty === req.query.difficulty
      );
    }
    const index = Math.floor(Math.random() * filteredques.length);
    res.json(filteredques[index]);
  } else {
  }
});

app.listen(port, () => {
  console.log(`listening at port ${port} `);
});
