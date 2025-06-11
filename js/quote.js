 // Array of 30 relationship quotes
const quotes = [
  { text: "In your smile, I see something more beautiful than the stars.", author: "Beth Revis" },
  { text: "We’re not perfect, but we’re perfect for learning together.", author: "Unknown" },
  { text: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
  { text: "Sometimes, the bravest thing you can do is to stay and grow through the storm—together.", author: "Rupi Kaur" },
  { text: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect, and I loved you even more.", author: "Angelita Lim" },
  { text: "You and I are a work in progress, but the love is already art.", author: "Jaita" },
  { text: "Every love story is beautiful, but ours is my favorite.", author: "Unknown" },
  { text: "Don’t wait for a perfect day to love perfectly.", author: "Aravind" },
  { text: "I never want to stop making memories with you.", author: "Pierre Jeanty" },
  { text: "Even if tomorrow changes, let today be filled with soft eyes and warm hearts.", author: "Jaita" },
  { text: "I look at you and see the rest of my life in front of my eyes.", author: "Unknown" },
  { text: "Love is not built in grand gestures, but in everyday kindness.", author: "Aravind" },
  { text: "I want all of you, forever, you and me, every day.", author: "Nicholas Sparks" },
  { text: "The present moment is where real love lives—not in ‘someday’ or ‘remember when’.", author: "Thich Nhat Hanh" },
  { text: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.", author: "F. Scott Fitzgerald" },
  { text: "Your love makes me want to become the version of me I promised myself I’d be.", author: "Aravind" },
  { text: "You are my greatest adventure.", author: "Unknown" },
  { text: "To love today means to forgive more than we want, and trust more than we fear.", author: "Cheryl Strayed" },
  { text: "You don’t marry someone you can live with—you marry someone you cannot live without.", author: "Unknown" },
  { text: "I still choose you. Not because it’s easy, but because it’s us.", author: "Aravind" },
  { text: "You are the best thing that’s ever been mine.", author: "Taylor Swift" },
  { text: "The love we give today is the legacy we leave for tomorrow.", author: "Morgan Harper Nichols" },
  { text: "With you, I’ve found the love of my life and my closest, truest friend.", author: "Unknown" },
  { text: "You’re not just my peace—you’re my home.", author: "Jaita" },
  { text: "Being in love with you makes every morning worth getting up for.", author: "Unknown" },
  { text: "We hurt, we learn, we love again—with more understanding this time.", author: "Aravind" },
  { text: "The way to love anything is to realize that it may be lost.", author: "G.K. Chesterton" },
  { text: "You’re the kind of person I don’t want to lose.", author: "Unknown" },
  { text: "Attachment isn’t weakness when it’s based on mutual respect and growth.", author: "Brené Brown" },
  { text: "You and I are growing, not just older—but closer.", author: "Jaita" },
  { text: "We don’t love to escape life. We love so we can face it, together.", author: "Aravind" }
];



// Get the current day of the month (0-29 for each day in a 30-day cycle)
const dayOfMonth = new Date().getDate() % quotes.length;

// Display the quote for the day
document.getElementById('quote').textContent = `"${quotes[dayOfMonth].text}"`;
document.getElementById('author').textContent = `- ${quotes[dayOfMonth].author}`;