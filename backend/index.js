import express from "express";
const app = express();
app.use(express.static('dist'));


app.get("/", (req, res)=>{
    res.end("Serves is Ready......");
})

app.use(express.static('dist'));


// get a list of 10 jokes
app.get("/api/jokes", (req, res)=>{

const jokes = [
  { id: 1, title: "Why Did the Chicken Cross the Road?", content: "To prove to the possum it could be done!" },
  { id: 2, title: "Programmer’s Breakfast", content: "I had a Java with a byte of toast." },
  { id: 3, title: "Frontend Developer’s Mood", content: "CSS is not a bug, it’s a feature!" },
  { id: 4, title: "404 Life Not Found", content: "I tried to find motivation, but got a 404 error." },
  { id: 5, title: "Keyboard Punishment", content: "My keyboard must be broken — every time I type 'help', nothing happens." },
  { id: 6, title: "Git Me Outta Here", content: "I committed to a relationship, but forgot to push." },
  { id: 7, title: "Debugging 101", content: "Debugging is like being the detective in a crime movie where you're also the murderer." },
  { id: 8, title: "HTML Therapy", content: "I told my therapist I feel empty inside. She said, 'You should close your tags.'" },
  { id: 9, title: "While Loop", content: "While not asleep: keep coding." },
  { id: 10, title: "OOP Problems", content: "I tried to organize a party but couldn't get any classes to inherit my invitation." },
  { id: 11, title: "Frozen Computer", content: "Why was the computer cold? It left its Windows open." },
  { id: 12, title: "JavaScript Magic", content: "Why do JavaScript devs wear glasses? Because they don’t C#." },
  { id: 13, title: "WiFi Signal", content: "My love is like WiFi — you can’t see it, but you know when it’s gone." },
  { id: 14, title: "Boolean Dilemma", content: "To be, or not to be — that’s a boolean." },
  { id: 15, title: "SQL Pickup Line", content: "Are you a primary key? Because you're unique to me." },
  { id: 16, title: "Commitment Issues", content: "I would tell you a Git joke, but I might revert it later." },
  { id: 17, title: "Stack Overflow", content: "I dream in Stack Overflow answers now." },
  { id: 18, title: "CSS Confession", content: "I’m not a magician, but I can make divs disappear." },
  { id: 19, title: "Null Life", content: "My life's a null pointer exception." },
  { id: 20, title: "Bitwise Humor", content: "You had me at 'hello world'." },
  { id: 21, title: "Dark Theme Forever", content: "I use light theme to test my bravery." },
  { id: 22, title: "Typing Mistake", content: "I autocorrect myself in real life now." },
  { id: 23, title: "Software Update", content: "I finally updated my life — patch 2.0 includes less bugs." },
  { id: 24, title: "REST in Peace", content: "REST APIs don’t sleep, they REST." },
  { id: 25, title: "404 Brain Not Found", content: "Tried to think of a joke, but my brain returned a 404." },
  { id: 26, title: "CLI Warrior", content: "I feel most powerful in the terminal." },
  { id: 27, title: "Array Love", content: "You complete me — like a closing bracket on an array." },
  { id: 28, title: "Coffee Overflow", content: "Programmers don't cry. We just run on coffee and hope." },
  { id: 29, title: "Ctrl Alt Delete", content: "That’s my reset button for life." },
  { id: 30, title: "Undefinable", content: "You’re like undefined — confusing, but somehow necessary." },
  { id: 31, title: "Recursion Explained", content: "To understand recursion, you must first understand recursion." },
  { id: 32, title: "Endless Loops", content: "My life is basically a while(true) loop." },
  { id: 33, title: "Cache Me Outside", content: "How ‘bout dat?" },
  { id: 34, title: "RAM Complaints", content: "My memory is like RAM — fast but forgetful." },
  { id: 35, title: "Dark Mode Dev", content: "I only code in the dark. Literally." },
  { id: 36, title: "Branching Out", content: "I created a new branch in life and immediately regretted it." },
  { id: 37, title: "Compiler Crush", content: "She said she loved me, but the compiler disagreed." },
  { id: 38, title: "Variable Confusion", content: "I named my variables after my ex — confusing and hard to track." },
  { id: 39, title: "Cloud Nine", content: "I store my dreams in the cloud." },
  { id: 40, title: "No Bugs Today", content: "Code ran without bugs — must be April Fools." },
  { id: 41, title: "Mobile Developer Joke", content: "Why did the iPhone go to therapy? It lost its home button." },
  { id: 42, title: "Syntax Error Life", content: "I live with syntax errors and still compile somehow." },
  { id: 43, title: "DNS Joke", content: "I lost my direction like a DNS server on a bad day." },
  { id: 44, title: "String Theory", content: "Strings attached — always in programming and life." },
  { id: 45, title: "Lazy Loading", content: "That’s how I wake up every morning." },
  { id: 46, title: "Cookies Consent", content: "I accept cookies in real life too." },
  { id: 47, title: "UI/UX Regret", content: "I designed it myself... sorry." },
  { id: 48, title: "Multithreaded Mind", content: "Thinking about everything at once — thanks, threads!" },
  { id: 49, title: "No Internet", content: "You realize your worth when the Wi-Fi is down." },
  { id: 50, title: "Binary Life", content: "There are only 10 kinds of people — those who understand binary and those who don’t." }
];

    res.send(jokes);
})


const Port = process.env.PORT || 3000;

app.listen(Port, ()=>{
    console.log(`Server is running on port http://localhost: ${Port}`);
});





