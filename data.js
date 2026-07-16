// ============================================================
//  data.js  —  THE ONLY FILE YOU NEED TO EDIT
//  Open this file, replace every placeholder, save, then
//  refresh index.html to see your changes.
// ============================================================

// ============================================================
//  EDIT HERE  ·  Student Personal Information
// ============================================================
const STUDENT = {
  name:           "Foo Yong En",
  tagline:        "Curious. Ambitious. Always Learning.",
  school:         "Zhenghua Secondary School",
  level:          "Secondary 4",
  aspiration:     "Cybersecurity Analyst",
  email:          "yonggenn1@gmail.com",
  // TODO: add your real GitHub profile URL, e.g. "https://github.com/yourusername"
  // Left blank on purpose so a broken link doesn't show until you add it.
  github:         "",

  // ── Story paragraphs ────────────────────────────────────
  // Write 2–4 short paragraphs about who you are.
  story: [
    "I started exploring coding in Primary 6, after my PSLE. My parents didn't want me spending too much time on my phone, so they signed me up for coding tuition instead.",
    "My tuition centre was running a cybersecurity competition called NJCO and asked if I was interested. I decided to give it a go, since I already had some coding experience. I was amazed that I qualified for IJCO after NJCO — I ended up winning a bronze medal with my team, plus an honourable mention in the individual competition.",
    "I'm a curious person, which pushes me to research more into things I'm interested in. That's what drew me further into cybersecurity and coding.",
    "I hope to pursue my interest in cybersecurity further in polytechnic, and eventually get a job in that sector."
  ],

  // ── Profile photo ────────────────────────────────────────
  // Replace with your actual photo path, e.g. "images/me.jpg"
  profilePhoto:   "images/profile-placeholder.svg",

  // ── Future Goals ─────────────────────────────────────────
  futureGoals: [
    {
      icon:        "🎓",
      title:       "Cybersecurity and Digital Forensics",
      description: "I am aiming to study Cybersecurity and Digital Forensics in polytechnic. This will help me further build on and deepen what I've already learned."
    },
    {
      icon:        "💼",
      title:       "Cybersecurity Analyst",
      description: "As a cybersecurity analyst, attackers are constantly changing their tactics, so the work stays challenging and interesting — which suits me best."
    },
    {
      icon:        "🌏",
      title:       "Protect the Community",
      description: "The community is also vulnerable, so being able to help protect it is both a goal and an opportunity for me."
    }
  ]
};

// ============================================================
//  EDIT HERE  ·  Add Achievements
//  Copy one block and paste it to add more.
// ============================================================
const ACHIEVEMENTS = [
  {
    title:              "National Junior Cybersecurity Olympiad 2025 – Individual Bronze Award",
    category:           "Cybersecurity",
    date:               "2025",
    organisation:       "Singapore International Math Contests Centre (SIMCC)",
    description:        "The National Junior Cybersecurity Olympiad consisted of MCQs and a few Capture the Flag questions that I had to solve.",
    reflection:         "What I found challenging was solving the Capture the Flag questions, since I couldn't understand how to approach some of them at first, which stressed me out. However, after breaking the process down step by step, I managed to find some of the flags.",
    learningOutcome:    "I gained a deeper understanding of cybersecurity concepts through the MCQs.",
    imagePath:          "",
    certificateImagePath: "images/certificates/njco-individual-cert.jpg"
  },
  {
    title:              "International Junior Cybersecurity Olympiad 2025 – Team Bronze Award",
    category:           "Cybersecurity",
    date:               "2025",
    organisation:       "Singapore International Math Contests Centre (SIMCC)",
    description:        "The olympiad was made up of teams of 3–5 members from different countries. It mostly consisted of Capture the Flag questions worth points, and we competed against other teams.",
    reflection:         "Working in a team changed my approach, as we had to work together and identify one another's strengths to score enough points for the team to win.",
    learningOutcome:    "I learned how to work with my teammates and share the clues I found. This way, if they found other clues, we could piece the flag together instead of working alone.",
    imagePath:          "",
    certificateImagePath: "images/certificates/ijco-team-cert.jpg"
  },
  {
    title:              "International Junior Cybersecurity Olympiad 2025 – Individual Honorable Mention",
    category:           "Cybersecurity",
    date:               "2025",
    organisation:       "Singapore International Math Contests Centre (SIMCC)",
    description:        "My team of 4 had a 4-hour timer to complete as many Capture the Flag questions as possible.",
    reflection:         "Since it was my first time in an international competition, I felt determined to do my best and win something for the team. I spent a lot of time and effort on this competition and didn't want it to go to waste.",
    learningOutcome:    "I realised that learning the concepts alone wouldn't help me find flags, and that I needed to practise actually finding them.",
    imagePath:          "",
    certificateImagePath: "images/certificates/ijco-individual-cert.jpg"
  },
  {
    title:              "Edusave Good Progress Award 2024",
    category:           "Academic",
    date:               "2024",
    organisation:       "Ministry of Education, Singapore",
    description:        "Awarded the Edusave Good Progress Award in recognition of significant improvement in academic performance and overall school achievement compared to the previous year. This award is presented to students who have demonstrated notable progress through consistent effort, determination, and commitment to learning.",
    reflection:         "By developing better study habits and staying disciplined, I was able to make better progress.",
    learningOutcome:    "This award showed me that a willingness to learn from mistakes can lead to significant improvements.",
    imagePath:          "",
    certificateImagePath: "images/certificates/edusave-cert.jpg"
  },
  {
    title:              "H2 Grand Prix Pro Singapore 2024 – Final World Qualifier Pass",
    category:           "STEM / Robotics",
    date:               "2024",
    organisation:       "Science Centre Singapore",
    description:        "The competition challenged teams to design, build, and optimise hydrogen-powered RC vehicles while applying teamwork to maximise efficiency.",
    reflection:         "It was an honour for my teammates and me to represent the school in this competition. We spent long hours staying back after school to troubleshoot issues and find the fastest route for our car during the race.",
    learningOutcome:    "This competition taught me how to be more strategic when moving a car, and how to conserve our hydrogen fuel cell to make it last the whole competition.",
    imagePath:          "images/achievements/h2gp.jpg",
    certificateImagePath: "images/certificates/h2gp-cert.jpg"
  },
  {
    title:              "Youth STEM Empowerment Programme 2023",
    category:           "STEM",
    date:               "2023",
    organisation:       "Science Centre Singapore",
    description:        "I worked in a team of 5 to represent our school in this programme. We used the technology we knew to support people with disabilities, developing ideas to improve accessibility and quality of life for them.",
    reflection:         "This programme helped me learn that STEM isn't just about technology and innovation, but also about social impact. I learned the importance of understanding users' needs.",
    learningOutcome:    "I learned how to design and create a VR game from scratch with my friends. This taught me not only teamwork, but also research and design skills.",
    imagePath:          "",
    certificateImagePath: "images/certificates/ysep-cert.jpg"
  },
  {
    title:              "Questa Club Activities Gold Badge",
    category:           "Co-Curricular",
    date:               "2023",
    organisation:       "Questa",
    description:        "This badge was earned during the YSEP presentation, for participating in the programme.",
    // TODO: add a reflection and learningOutcome here if you'd like — these two
    // fields are optional (script.js now skips them cleanly if left out).
    imagePath:          "",
    certificateImagePath: "images/certificates/questa-gold-cert.jpg"
  },
  {
    title:              "Game Design with Roblox – Level 2",
    category:           "Digital Creativity",
    date:               "2022",
    organisation:       "Kodecoon",
    description:        "Level 2 of Game Design with Roblox involved learning Roblox scripting to create a working game. I built a game where players could collect pets and sell them for points.",
    reflection:         "This course taught me to be patient when coding and debugging, as it was the very first time I'd ever coded.",
    learningOutcome:    "I learned the basics of Roblox coding through this Game Design with Roblox experience.",
    imagePath:          "",
    certificateImagePath: "images/certificates/roblox-l2-cert.jpg"
  },
  {
    title:              "Game Design with Roblox – Level 1",
    category:           "Digital Creativity",
    date:               "2022",
    organisation:       "Kodecoon",
    description:        "Level 1 of Game Design taught me how to make different objects move from one place to another.",
    // TODO: these two still need your real answers — right now they're the
    // original prompt questions, not your reflections. Replace with your own words, e.g.:
    // reflection: "What surprised me most was ... What kept me motivated was ..."
    // learningOutcome: "The foundational concepts I learned were ..."
    imagePath:          "",
    certificateImagePath: "images/certificates/roblox-l1-cert.jpg"
  },
  {
    title: "Lag and Crash 6.0",
    category: "Competition",
    date: "2025",
    organisation: "Polytechnic Cybersecurity Interest Groups (Singapore)",
    description: "Lag and Crash 6.0 is a cybersecurity competition that covers many areas of cybersecurity skills being put to the test. It ran over 2 days, with teams trying to complete as many Capture the Flag questions as possible while competing with other teams.",
    reflection: "This experience challenged me to push through with a team even though we felt it was very tough. As the team leader, I felt the need to encourage my team members even when they found the questions hard. We eventually managed to get back on track and completed a few more questions.",
    // NOTE: I've assumed "Onset" was meant to be "OSINT" (Open-Source Intelligence),
    // a common cybersecurity term — please confirm/edit if that's not what you meant.
    learningOutcome: "I developed a stronger sense of resilience and improved in areas of cybersecurity that I hadn't really touched on before, such as OSINT.",
    imagePath: "",
    certificateImagePath: "images/certificates/lag-and-crash-cert.jpg"
  },
];

// ============================================================
//  EDIT HERE  ·  Add Projects
//  Copy one block and paste it to add more.
// ============================================================
const PROJECTS = [
  {
    title:           "Two-Player Catching Game",
    category:        "Python · Turtle Graphics",
    problem:         "Some problems I faced while creating this Python game included making it run with two players. It was also challenging to choose the correct speed, so the turtles wouldn't move too fast or too slow.",
    solution:        "After researching, I learnt that I could control the turtles by using onkeypress.",
    // TODO: personalise this if you'd like — since you coded this solo,
    // feel free to describe your role in your own words.
    myRole:          "I designed and coded this game on my own, including the movement controls and collision detection for both players.",
    technologiesUsed: ["Python", "Turtle Graphics", "Onkeypress"],
    journey:         "It took me 3 weeks to build the game. It was a long process, but a successful one. I had to learn a few new commands to make the project fun and run smoothly.",
    outcome:         "In the end, the game was successful and ran smoothly. My parents were impressed that I was able to create a catching game that two players could control, and many of my friends were excited to play it.",
    lessonsLearned:  "This game taught me many new commands. It also taught me that debugging needs patience, and that a programme should be built part by part — this makes it much easier to spot problems in the code.",
    imagePath:       "images/projects/catching-game.jpg",
    videoLink:       "",
    sourceCode:      `
import turtle

# create the catcher and runner turtles
catcher = turtle.Turtle()
runner = turtle.Turtle()

#set up the turtles
catcher.color("red")
catcher.shape("turtle")
catcher.penup()
catcher.goto(-100, 0)

runner.color("blue")
runner.shape("turtle")
runner.penup()
runner.goto(100, 0)

#define movement functions for the catcher
def move_catcher_up():
    y = catcher.ycor()
    catcher.sety(y + 20)

def move_catcher_down():
    y = catcher.ycor()
    catcher.sety(y - 20)

def move_catcher_left():
    x = catcher.xcor()
    catcher.setx(x - 20)

def move_catcher_right():
    x = catcher.xcor()
    catcher.setx(x + 20)

#define movement functions for the runner
def move_runner_up():
    y = runner.ycor()
    runner.sety(y + 20)

def move_runner_down():
    y = runner.ycor()
    runner.sety(y - 20)

def move_runner_left():
    x = runner.xcor()
    runner.setx(x - 20)

def move_runner_right():
    x = runner.xcor()
    runner.setx(x + 20)
#set up the screen
turtle.listen()

#Bind the keys to the catcher turtle's movement functions
turtle.onkeypress(move_catcher_up, "w")
turtle.onkeypress(move_catcher_down, "s")
turtle.onkeypress(move_catcher_left, "a")
turtle.onkeypress(move_catcher_right, "d")

#Bind the keys to the runner turtle's movement functions
turtle.onkeypress(move_runner_up, "Up")
turtle.onkeypress(move_runner_down, "Down")
turtle.onkeypress(move_runner_left, "Left")
turtle.onkeypress(move_runner_right, "Right")

#Function to check if the catcher catches the runner
def check_collision():
    if catcher.distance(runner) < 20:
        print("Player 2 loses!")
        turtle.bye()
    turtle.ontimer(check_collision, 100)

#start checking for collisions
check_collision()
`
  },
  {
    title:           "Random Card Game",
    category:        "Python · Random Module",
    problem:         "The problem I faced was that I initially thought I needed to list all 52 unique types of cards manually.",
    solution:        "I solved this by creating two lists — one for the suits and one for the numbers — and imported the random module to draw a random card.",
    myRole:          "I built this project by myself, from the game logic to the win/lose comparison rules.",
    technologiesUsed: ["Python", "random module", "List", "Loops"],
    journey:         "It took me a few hours to create this simple game. Although it looked simple, I got stuck a few times while building it. I used the index function so the programme could tell who had the higher card and declare the winner.",
    outcome:         "It was a simple game. However, I felt a real sense of achievement that I was able to create a card game, even as a beginner.",
    lessonsLearned:  "I learned that using the right functions makes coding much more convenient. Using a list saved me from typing out all 52 unique cards, and the index function helped me compare which card had the higher value.",
    imagePath:       "images/projects/card-game.jpg",
    videoLink:       "",
    sourceCode:      `
import random

cards = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]
suits = ["diamond", "club", "heart", "spade"]
x = ""
while x == "":
    my_card = random.choice(cards)
    your_card = random.choice(cards)
    my_suit = random.choice(suits)
    your_suit = random.choice(suits)
    
    print("My card: " + my_card + " of " + my_suit + "       Your card: " + your_card + " of " + your_suit)

    if cards.index(my_card) > cards.index(your_card):
        print("I win!")
    elif cards.index(my_card) < cards.index(your_card):
        print("I lose!")
    else:
        if (suits.index(my_suit) > suits.index(your_suit)):
            print("I win!")
        elif(suits.index(my_suit) < suits.index(your_suit)):
            print("I lose!")
        else:
            print("Tie!")
            

    x = input("Press [Enter] to continue. Any key to exit: ")
`
  },
  {
    title:           "Strong Password Generator",
    category:        "Python · Security Tool",
    problem:         "It was my very first time creating a Python project. I didn't know much programming, so I found it challenging to know how to begin.",
    solution:        "I wrote down the Python commands I knew that could help me build this password generator, which made it easier for me to plan.",
    myRole:          "I built this entire project independently as my first ever Python project.",
    technologiesUsed: ["Python", "Boolean", "Random module"],
    journey:         "Since it was my first project, I took one day to build it. Although it was simple, it was my first step in creating a working random password generator.",
    outcome:         "A mix of random numbers, uppercase letters, and lowercase letters is generated together and printed to the console as the password.",
    lessonsLearned:  "This project taught me that before creating any project, I should first have an idea of how the project should work, so that building it is more efficient.",
    imagePath:       "images/projects/password-gen.jpg",
    videoLink:       "",
    sourceCode:      `
import random

strong_password = ""

while len(strong_password) < 12:
    choice = random.randint(1, 3) 

    if choice == 1:
        strong_password += chr(random.randint(97, 122))
    elif choice == 2:
        strong_password += chr(random.randint(65, 90))
    else:
        strong_password += chr(random.randint(48, 57))

print("Generated strong password:", strong_password)
`
  }
];

// ============================================================
//  EDIT HERE  ·  Add Leadership
//  Copy one block and paste it to add more.
// ============================================================
const LEADERSHIP = [
  {
    title:           "Third Sergeant",
    organisation:    "National Cadet Corps (Air)",
    // TODO: add a duration if you'd like it to show, e.g. "2023 – 2025"
    duration:        "",
    responsibilities: [
      "I helped make sure the younger cadets stayed disciplined and addressed any queries they had.",
      "I helped prepare venues for different activities and made sure they could start as soon as all the younger cadets had arrived.",
      "I helped mentor some of the younger cadets when they made mistakes, and reminded them about the proper attire to wear."
    ],
    reflection:      "I learnt that more than one leader is needed to run a whole CCA. As a team, we had to divide sergeants into different roles, such as planning or preparing venues. Teamwork was key — one sergeant alone could not have run the whole CCA.",
    imagePath:       "images/leadership/leadership-placeholder.jpg"
  }
];

// ============================================================
//  EDIT HERE  ·  Add Future Goals  (already inside STUDENT above)
//  The three future goal cards are defined in STUDENT.futureGoals
// ============================================================

// ── Category colour map (no editing needed, but feel free to add) ──
const CATEGORY_COLOURS = {
  "Cybersecurity":     "#2D6BFF",
  "Academic":          "#7FB3FF",
  "STEM / Robotics":   "#00C9A7",
  "STEM":              "#00C9A7",
  "Co-Curricular":     "#FF6B6B",
  "Digital Creativity":"#C77DFF",
  "Mathematics":       "#FFD166"
};