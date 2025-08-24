
import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
    {
    "id": "1",
    "title": "Test Trivia",
    "description": "Test your cricket knowledge with these extremely challenging questions , FT - Test Cricket Trivia",
    "category": "TEST-Cricket",
    "image": "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-07/GettyImages-1497834098.jpg?itok=CjAuI2zk",
    "questions": [
        {
            "id": "cric-1",
            "question": "Which player holds the record of scoring most runs in a Test Series",
            "options": ["Shubman Gill", "Don Bradman", "Sachin Tendulkar", "WR Hammond"],
            "correctAnswer": "Don Bradman"
        },
        {
            "id": "cric-2",
            "question": "Which player holds the record of Having highest Strike rate in a Test Innings",
            "options": ["Moeen Ali", "Colin De Grandhome", "Umesh Yadav", "Ricky Ponting"],
            "correctAnswer": "Umesh Yadav"
        },
        {
            "id": "cric-3",
            "question": "Who is the first asian player to score a century on his test debut",
            "options": ["RH Sodhan", "Moin Khan", "Javed Miandad", "Lala Amarnath"],
            "correctAnswer": "Lala Amarnath"
        },
        {
            "id": "cric-4",
            "question": "Who scored most runs in a single day of a test match",
            "options": ["Don Bradman", "WR Hammond", "Wian Mulder", "V sehwag"],
            "correctAnswer": "Don Bradman"
        },
        {
            "id": "cric-5",
            "question": "Which indian player has scored most runs in south africa Tests",
            "options": ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "Virendra Sehwag"],
            "correctAnswer": "Sachin Tendulkar"
        },
        {
            "id": "cric-6",
            "question": "Who Scored most runs in Tied Test Matches",
            "options": ["Gary Sobers", "Dean Jones", "Kapil Dev", "Norm O'Neill "],
            "correctAnswer": "Dean Jones"
        },
        {
            "id": "cric-7",
            "question": "Who is the only indian player to win a player of the match award when his team won the game after following on",
            "options": ["Rahul Dravid", "Sachin Tendulkar", "VVS Laxman", "Virendra Sehwag"],
            "correctAnswer": "VVS Laxman"
        },
        {
            "id": "cric-8",
            "question": "Which team has won most test series by whitewashing the opponent",
            "options": ["South Africa", "India", "England", "Australia"],
            "correctAnswer": "Australia"
        },
        {
            "id": "cric-9",
            "question": "Which is the first team to lose a test match by just 1 run",
            "options": ["Australia", "India", "New Zealand", "England"],
            "correctAnswer": "Australia"
        },
        {
            "id": "cric-10",
            "question": "Which team holds the record of most consecutive test series wins",
            "options": ["South Africa", "India", "Sri Lanka", "West Indies"],
            "correctAnswer": "India"
        }
    ]
},
  {
    "id": "2",
    "title": "ODI Trivia",
    "description": "Test your cricket knowledge with these extremely challenging questions , FT - ODIs Trivia",
    "category": "ODI-Cricket",
    "image": "https://media.cricketwinner.com/media/2025/03/India-won%20ICC%20Champions%20Trophy%202025.webp",
    "questions": [
        {
            "id": "cric-1",
            "question": "Which player holds the record of scoring most runs in a calender year In ODI's",
            "options": ["Sourav Ganguly", "Virat Kohli", "Sachin Tendulkar", "Mathew Hayden"],
            "correctAnswer": "Sachin Tendulkar"
        },
        {
            "id": "cric-2",
            "question": "Which Player has scored most centuries against a team in ODI's",
            "options": ["Virat Kohli", "Rohit Sharma", "Sachin Tendulkar", "Ricky Ponting"],
            "correctAnswer": "Virat Kohli"
        },
        {
            "id": "cric-3",
            "question": "Who has scored Most runs in a career without a hundred in ODI's",
            "options": ["Misbah Ul-Haq", "Moin Khan", "HH Streak", "Wasim Akram"],
            "correctAnswer": "Misbah Ul-Haq"
        },
        {
            "id": "cric-4",
            "question": "Which batsman has the highest Strike rate in ODI Cricket",
            "options": ["Andre Russell", "Don Bradman", "Chris Gayle", "Rohit Sharma"],
            "correctAnswer": "Andre Russell"
        },
        {
            "id": "cric-5",
            "question": "Which bowler has taken most wickets on a single Ground in ODI's",
            "options": ["Muttiah Muralitharan", "Glenn McGrath", "Shane Warne", "Shakib Al hasan"],
            "correctAnswer": "Shakib Al hasan"
        },
        {
            "id": "cric-6",
            "question": "Which player holds the record of playing most number of balls in an ODI Innings",
            "options": ["Sachin Tendulkar", "Inzamam-ul-Haq", "Brian Lara", "Glenn Turner"],
            "correctAnswer": "Glenn Turner"
        },
        {
            "id": "cric-7",
            "question": "Which Wicket Keeper has conceeded most byes in a single innings of an ODI",
            "options": ["Rahul Dravid", "Ashraf Ali", "Kumar Sangakarra", "Jm Parker"],
            "correctAnswer": "Ashraf Ali"
        },
        {
            "id": "cric-8",
            "question": "Who has the best bowling average in One Day internationals?",
            "options": ["Andy Roberts", "Joel Garner", "MItchell Start", "Jasprit Bumrah"],
            "correctAnswer": "Joel Garner"
        },
        {
            "id": "cric-9",
            "question": "What is the highest patnership in odi cricket",
            "options": ["264", "374", "299", "372"],
            "correctAnswer": "372"
        },
        {
            "id": "cric-10",
            "question": "Who has taken most catches in ODI Cricket",
            "options": ["Ricky Ponitng", "L Taylor", "Mahela Jayawardene", "virat Kohli"],
            "correctAnswer": "Mahela Jayawardene"
        }
    ]
},
];

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};
