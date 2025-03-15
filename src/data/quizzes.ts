
import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    "id": "1",
    "title": "Ultimate Cricket Challenge",
    "description": "Test your cricket knowledge with these extremely challenging questions!",
    "category": "Cricket",
    "image": "https://www.stackumbrella.com/wp-content/uploads/2025/03/IND-vs-NZ-8_11zon-1024x595.jpg",
    "questions": [
        {
            "id": "cric-1",
            "question": "Who is the only batsman to be given out ‘Obstructing the field’ in T20 internationals?",
            "options": ["Ben Stokes", "Mohammad Hafeez", "MS Dhoni", "Jason Roy"],
            "correctAnswer": "Ben Stokes"
        },
        {
            "id": "cric-2",
            "question": "Who was the first bowler to take 10 wickets in a single innings of a Test match?",
            "options": ["Anil Kumble", "Jim Laker", "Ajaz Patel", "Muttiah Muralitharan"],
            "correctAnswer": "Jim Laker"
        },
        {
            "id": "cric-3",
            "question": "Which cricketer has played for both India and England in international matches?",
            "options": ["Mansoor Ali Khan Pataudi", "Iftikhar Ali Khan Pataudi", "Nawab of Najafgarh", "Ranjitsinhji"],
            "correctAnswer": "Iftikhar Ali Khan Pataudi"
        },
        {
            "id": "cric-4",
            "question": "Which batsman has the highest individual score in a first-class match?",
            "options": ["Brian Lara", "Don Bradman", "Hanif Mohammad", "Graham Gooch"],
            "correctAnswer": "Brian Lara"
        },
        {
            "id": "cric-5",
            "question": "Who has bowled the most number of maiden overs in Test cricket?",
            "options": ["Muttiah Muralitharan", "Glenn McGrath", "Shane Warne", "Lance Gibbs"],
            "correctAnswer": "Muttiah Muralitharan"
        },
        {
            "id": "cric-6",
            "question": "Who was the first player to be given out by ‘third umpire’ in international cricket?",
            "options": ["Sachin Tendulkar", "Inzamam-ul-Haq", "Brian Lara", "Jonty Rhodes"],
            "correctAnswer": "Sachin Tendulkar"
        },
        {
            "id": "cric-7",
            "question": "Which bowler has the best-ever bowling figures in a One-Day International match?",
            "options": ["Chaminda Vaas", "Glenn McGrath", "Shahid Afridi", "Stuart Binny"],
            "correctAnswer": "Chaminda Vaas"
        },
        {
            "id": "cric-8",
            "question": "Which player has scored the fastest century in T20 internationals?",
            "options": ["Chris Gayle", "Rohit Sharma", "David Miller", "AB de Villiers"],
            "correctAnswer": "David Miller"
        },
        {
            "id": "cric-9",
            "question": "Who was the first batsman to be dismissed for 99 in a World Cup final?",
            "options": ["Martin Crowe", "Adam Gilchrist", "Steve Waugh", "Sir Viv Richards"],
            "correctAnswer": "Martin Crowe"
        },
        {
            "id": "cric-10",
            "question": "Which cricketer has hit the most sixes in international cricket?",
            "options": ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "MS Dhoni"],
            "correctAnswer": "Rohit Sharma"
        },
        {
            "id": "cric-11",
            "question": "Who was the first captain to lift the ICC Cricket World Cup twice?",
            "options": ["Ricky Ponting", "Clive Lloyd", "MS Dhoni", "Steve Waugh"],
            "correctAnswer": "Ricky Ponting"
        },
        {
            "id": "cric-12",
            "question": "Which cricketer has the record for the most ducks in Test history?",
            "options": ["Courtney Walsh", "Muttiah Muralitharan", "Glenn McGrath", "James Anderson"],
            "correctAnswer": "Courtney Walsh"
        },
        {
            "id": "cric-13",
            "question": "Who is the only cricketer to score 400* in a Test match?",
            "options": ["Don Bradman", "Virender Sehwag", "Brian Lara", "Matthew Hayden"],
            "correctAnswer": "Brian Lara"
        },
        {
            "id": "cric-14",
            "question": "Which bowler took a hat-trick in the very first over of a Test match?",
            "options": ["Brett Lee", "Jimmy Matthews", "Nuwan Zoysa", "Lasith Malinga"],
            "correctAnswer": "Nuwan Zoysa"
        },
        {
            "id": "cric-15",
            "question": "Who was the first player to be dismissed for 'handling the ball' in a Test match?",
            "options": ["Mohinder Amarnath", "Graham Gooch", "Michael Vaughan", "Desmond Haynes"],
            "correctAnswer": "Graham Gooch"
        }
    ]
},
  {
    "id": "2",
    "title": "Memory challange",
    "description": "Test your cricket knowledge with these Memory based questions!",
    "category": "Cricket",
    "image": "https://cdn.wallpapersafari.com/59/71/xgBf2n.jpg",
    "questions": [
        {
            "id": "cric-1",
            "question": "who was the highest run scorer for Mumbai indians in ipl 2017",
            "options": ["Rohit Sharma", "Kieron Pollard", "Krunal Pandya", "Surya Kumar Yadav"],
            "correctAnswer": "Krunal Pandya"
        },
        {
            "id": "cric-2",
            "question": "Who won the POTM in the match when Yuvraj scored 6 sixes",
            "options": ["Gautam Gambhir", "Yuvraj Singh", "Ms Dhoni", "Virendra sehwag"],
            "correctAnswer": "Yuvraj Singh"
        },
        {
            "id": "cric-3",
            "question": "In the famous 1986 tie between ind vs aus who was the only indian to score a century",
            "options": ["K Srikanth", "Sachin Tendulkar", "sunil gavaskar", "Kapil dev"],
            "correctAnswer": "Kapil dev"
        },
        {
            "id": "cric-4",
            "question": "In the finals of 2016 which batter hit a 100m+ sixer in first innings",
            "options": ["David Warner", "Ben Cutting", "Yuvraj singh", "Chris Gayle"],
            "correctAnswer": "Ben Cutting"
        },
        {
            "id": "cric-5",
            "question": "In a match against india azaz patel took a 10W haul , Who was the leading run scorer of that particular innings",
            "options": ["Mayank Agarwal", "Rohit Sharma", "Rishab Pant", "Shreyas Iyer"],
            "correctAnswer": "Mayank Agarwal"
        }
    ]
}

];

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};
