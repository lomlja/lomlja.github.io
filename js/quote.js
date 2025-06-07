 // Array of 30 relationship quotes
 const quotes = [
  { text: "In your smile, I see something more beautiful than the stars.", author: "Beth Revis" },
  { text: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
  { text: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect, and I loved you even more.", author: "Angelita Lim" },
  { text: "Every love story is beautiful, but ours is my favorite.", author: "Unknown" },
  { text: "I never want to stop making memories with you.", author: "Pierre Jeanty" },
  { text: "I look at you and see the rest of my life in front of my eyes.", author: "Unknown" },
  { text: "I want all of you, forever, you and me, every day.", author: "Nicholas Sparks" },
  { text: "I love you more than I have ever found a way to say to you.", author: "Ben Folds" },
  { text: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.", author: "F. Scott Fitzgerald" },
  { text: "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.", author: "Leo Christopher" },
  { text: "You are my greatest adventure.", author: "Unknown" },
  { text: "You don’t marry someone you can live with—you marry someone you cannot live without.", author: "Unknown" },
  { text: "You are the best thing that’s ever been mine.", author: "Taylor Swift" },
  { text: "If I had a flower for every time I thought of you, I could walk through my garden forever.", author: "Alfred Lord Tennyson" },
  { text: "You are the reason I wake up with a smile every morning.", author: "Unknown" },
  { text: "To the world, you may be one person, but to one person, you are the world.", author: "Dr. Seuss" },
  { text: "With you, I’ve found the love of my life and my closest, truest friend.", author: "Unknown" },
  { text: "You’re my favorite place to go when my mind searches for peace.", author: "Unknown" },
  { text: "Being in love with you makes every morning worth getting up for.", author: "Unknown" },
  { text: "I am much more me when I’m with you.", author: "Unknown" },
  { text: "The way to love anything is to realize that it may be lost.", author: "Gilbert K. Chesterton" },
  { text: "You are my sun, my moon, and all my stars.", author: "E.E. Cummings" },
  { text: "Our love is like the wind. I can’t see it, but I can feel it.", author: "Nicholas Sparks" },
  { text: "I didn’t choose you, my heart did.", author: "Unknown" },
  { text: "I want to be with you until my last page.", author: "A.R. Asher" },
  { text: "In your arms, I find my home.", author: "Unknown" },
  { text: "You’re the piece I’ve been missing in the puzzle of my life.", author: "Unknown" },
  { text: "Love is when I still feel butterflies even though I’ve seen you a hundred times.", author: "Unknown" },
  { text: "You’re the kind of person I don’t want to lose.", author: "Unknown" }
];


// Get the current day of the month (0-29 for each day in a 30-day cycle)
const dayOfMonth = new Date().getDate() % quotes.length;

// Display the quote for the day
document.getElementById('quote').textContent = `"${quotes[dayOfMonth].text}"`;
document.getElementById('author').textContent = `- ${quotes[dayOfMonth].author}`;