const quotes= [
  {
    id : 1,
    author: "Walt Disney",
    year: 1966,
    quote: "All our dreams can come true, if we have the courage to pursue them.",
    tag: "Motivational Quote"
  },
  {
    id: 2,
    author: "Napoleon Hill",
    year: 1937,
    quote: "Whatever the mind can conceive and believe, it can achieve.",
    tag: "Motivational Quote"
  },
  {
    id: 3,
    author: "Vince Lombardi",
    year: 1960,
    quote: "Winning isn't everything, it's the only thing.",
    tag: "Motivational Quote"
  },
  {
    id: 4,
    author: "Albert Einstein",
    year: 1955,
    quote: "Try not to become a man of success, but rather try to become a man of value.",
    tag: "Motivational Quote"
  },
  {
    id:5,
    author: "Steve Jobs",
    year: 2005,
    quote: "Innovation distinguishes between a leader and a follower.",
    tag: "Motivational Quotes"
  },
  {
    id: 6,
    author: "Mahatma Gandhi",
    year: 1947,
    quote: "Be the change you wish to see in the world.",
    tag: "Motivational Quote"
  },
  {
    id:7,
    author: "Oprah Winfrey",
    year: "2008",
    quote: "The biggest adventure you can ever take is to live the life of your dreams.",
    tag: "Motivational Quote"
  },
  {
    id: 8,
    author: "Thomas Edison",
    year: 1929,
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    tag: "Motivational Quote"
  },
  {
    id: 9,
    author: "Winston Churchill",
    year: 1941,
    quote: "Never give in, never give in, never, never, never, never—in nothing, great or small, large or petty—never give in except to convictions of honour and good sense.",
    tag: "Motivational Quote"
  },
  {
    id: 10,
    author: "Tony Robbins",
    year: 2001,
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    tag: "Motivational Quote"
  },
  {
    id: 11,
    author: "Maya Angelou",
    year: 1978,
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    tag: "Inspirational Quote"
  },
  {
    id: 12,
    author: "Eleanor Roosevelt",
    year: 1933,
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    tag: "Inspirational Quote"
  },
  {
    id: 13,
    author: "Martin Luther King Jr.",
    year: 1963,
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    tag: "Inspirational Quote"
  },
  {
    id: 14,
    author: "Martin Luther King Jr.",
    year: 1963,
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    tag: "Inspirational Quote"
  },  
  {
    id: 15,
    author: "Anne Frank",
    year: 1944,
    quote: "Think of all the beauty still left around you and be happy.",
    tag: "Inspirational Quote"
  },
  {
    id: 16,
    author: "Helen Keller",
    year: 1903,
    quote: "Keep your face to the sunshine and you cannot see a shadow.",
    tag: "Inspirational Quote"
  },
  {
    id: 17,
    author: "Dalai Lama",
    year: 1999,
    quote: "Happiness is not something ready made. It comes from your own actions.",
    tag: "Inspirational Quote"
  },    
  {    
    id: 18,
    author: "Ralph Waldo Emerson",
    year: 1841,
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    tag: "Inspirational Quote"
  },    
  {     
    id: 19,
    author: "John Lennon",
    year: 1971,
    quote: "Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one.",
    tag: "Inspirational Quote"
  },
  {
    id: 20,
    author: "Eleanor Roosevelt",
    year: 1960,
    quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
    tag: "Inspirational Quote"
  },   
  {   
    id: 21,
    author: "Maya Angelou",
    year: 1970,
    quote: "I can be changed by what happens to me. But I refuse to be reduced by it.",
    tag: "Inspirational Quote"
  },
  {
    id: 22,
    author: "Dalai Lama",
    year: 2012,
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    tag: "Happiness Quote"
  },
  {
   id: 23,
  author: "Charles M. Schulz",
   year: 1962,
   quote: "Happiness is a warm puppy.",
    tag: "Happiness Quote"
  },
  {
   id: 24,
   author: "Zig Ziglar",
   year: 1975,
    quote: "Happiness is not a destination, it's a journey.",
    tag: "Happiness Quote"
  },
  {
    id: 25,
    author: "Jim Rohn",
    year: 1981,
    quote: "Happiness is not something you postpone for the future; it is something you design for the present.",
    tag: "Happiness Quote"
  },
  {
    id: 26,
    author: "Linus Van Pelt",
    year: 1966,
    quote: "Happiness is a warm blanket.",
    tag: "Happiness Quote"
  },
  {
    id: 27,
    author: "William S. Burroughs",
    year: 1959,
    quote: "Happiness is a byproduct of function, purpose, and conflict; those who seek happiness for itself seek victory without war.",
    tag: "Happiness Quote"
  },
  {
    id: 28,
    author: "Aristotle", 
    year: -350, 
    quote: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
    tag: "Happiness Quote"
  }, 
  {
    id: 29,
    author: "Abraham Lincoln", 
    year: 2022, 
    quote: "Most folks are as happy as they make up their minds to be.",
     tag: "Happiness Quote"
  },
  {
    id: 30,
    author: "Albert Schweitzer",
    year: 1993,
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    tag: "Happiness Quote"
  },
  {
    id: 31,
    author: "Dale Carnegie",
    year: 2021,
    quote: "Success is getting what you want. Happiness is wanting what you get.",
    tag: "Happiness Quote"
  },
  {
    id: 32,
    author: "Socrates",
    year: -399,
    quote: "The only true wisdom is in knowing you know nothing.",
    tag: "Wisdom Quote"
  },
  {
    id: 33,
    author: "Mahatma Gandhi",
    year: 1924,
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    tag: "Wisdom Quote"
  },
  {
     id: 34,
     author: "Dr. Seuss",
     year: 1978,
     quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
     tag: "Wisdom Quote"
  },
  {
     id: 35,
     author: "Aristotle",
     year: -350,
     quote: "Knowing yourself is the beginning of all wisdom.",
     tag: "Wisdom Quote"
  },
  {
     id: 36,
     author: "Steve Jobs",
     year: 2005,
     quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
     tag: "Wisdom Quote"
  },
  {
     id: 37,
     author: "Socrates",
    year: -399,
     quote: "The unexamined life is not worth living.",
     tag: "Wisdom Quote"
  },
  {
     id: 38,
     author: "Edmund Burke",
     year: 1770,
     quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
     tag: "Wisdom Quote"
  },
  {
     id: 39,
     author: "William Shakespeare",
     year: 1600,
     quote: "The wise man knows himself to be a fool.",
     tag: "Wisdom Quote"
  },
  {
     id: 40, 
     author: "Buddha",
     year: -500, 
     quote: "The only true wisdom is in knowing you are nothing.",
     tag: "Wisdom Quote"
  },
  {
    id: 41,
    author: "Lao Tzu",
    year: -531,
    quote: "Knowing others is wisdom, knowing yourself is enlightenment.",
    tag: "Wisdom Quote"
  },
  {
    id: 42,
    author: "Emily Bronte",
    year: 1847,
    quote: "Whatever our souls are made of, his and mine are the same.",
    tag: "Love Quote"
  },
  {
    id: 43,
    author: "Nicholas Sparks",
    year: 2003,
    quote: "I am nothing special, of this I am sure. I am a common man with common thoughts and I've led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I've loved another with all my heart and soul, and to me, this has always been enough.",
    tag: "Love Quote"
  },
  {
    id: 44,
    author: "Pablo Neruda",
    year: 1952,
    quote: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
   tag: "Love Quote"
  },
  {
    id: 45,
    author: "F. Scott Fitzgerald",
    year: 1925,
    quote: "I love her and that's the beginning and end of everything.",
    tag: "Love Quote"
  },
  {
    id: 46,
    author: "Elizabeth Barrett Browning",
    year: 1850,
    quote: "I love you not only for what you are, but for what I am when I am with you.",
    tag: "Love Quote"
  },
  {
     id: 47,
    author: "Leo Tolstoy",
    year: 1869,
    quote: "He felt now that he was not simply close to her, but that he did not know where he ended and she began.",
    tag: "Love Quote"
  },
  {
    id: 48,
    author: "John Green",
    year: 2012,
    quote: "I fell in love the way you fall asleep: slowly, and then all at once.",
    tag: "Love Quote"
  },
  {
    id: 49,
    author: "Alfred Lord Tennyson",
    year: 1850,
    quote: "I hold it true, whate'er befall; I feel it, when I sorrow most; 'Tis better to have loved and lost Than never to have loved at all.",
    tag: "Love Quote"
  },
  {
    id: 50,
    author: "E.E. Cummings",
    year: 1955,
    quote: "I carry your heart with me (I carry it in my heart)",
    tag: "Love Quote"
  },
  {
    id: 51,
    author: "Jane Austen",
    year: 1813,
    quote: "You pierce my soul. I am half agony, half hope...I have loved none but you.",
    tag: "Love Quote"
  },  
  {
    id: 52,
    author: "Thomas Jefferson",
    year: 1786,
    quote: "I'm a great believer in luck, and I find the harder I work, the more I have of it.",
    tag: "Luck Quote"
  },
  {
    id: 53,
    author: "Seneca",
    year: 2000,
    quote: "Luck is what happens when preparation meets opportunity.",
    tag: "Luck Quote"
  },
  {
    id: 54,
    author: "Jim Rohn",
    year: 1856,
    quote: "Luck is a dividend of sweat. The more you sweat, the luckier you get.",
    tag: "Luck Quote"
  },
  {
    id: 55,
    author: "Dr. Seuss",
    year: 1999,
    quote: "Luck is what you have left over after you give 100 percent.",
    tag: "Luck Quote"
  },
  {
    id: 56,
    author: "Mark Twain",
    year: 1856,
    quote: "Good luck is the result of good planning.",
    tag: "Luck Quote"
  },
  {
    id: 57,
    author: "Ralph Waldo Emerson",
    year: 1756,
    quote: "Shallow men believe in luck or in circumstance. Strong men believe in cause and effect.",
    tag: "Luck Quote"
  },
  {
    id: 58,
    author: "Frank A. Clark",
    year: 1557,
    quote: "I think luck is the sense to recognize an opportunity and the ability to take advantage of it. Everyone has bad breaks, but everyone also has opportunities. The man who can smile at his breaks and grab his chances gets on.",
    tag: "Luck Quote"
  },
  {
    id: 59,
    author: "Baltasar Gracian",
    year: 1647,
    quote: "Do not rely completely on any other human being, however dear. We meet all life's greatest tests alone.",
    tag: "Luck Quote"
  },
  {
    id: 60,
    author: "Robert Collier",
    year: 2001,
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    tag: "Luck Quote"
  },
  {
    id: 61,
    author: "Elbert Hubbard",
    year: 2004,
    quote: "The best way to prepare for good luck is to cultivate a good character.",
    tag: "Luck Quote"
  },
  {
    id: 62,
    author: "Vince Lombardi",
    year: 2003,
    quote: "Winning isn't everything, it's the only thing.",
    tag: "Sport Quote"
  },
  {
    id: 63,
    author: "Muhammad Ali",
    year: 1989,
    quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
    tag: "Sport Quote"
  },
  {
    id: 64,
    author: "Michael Jordan",
    year: 2019,
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    tag: "Sport Quote"
  },
  {
    id: 65,
    author: "Babe Ruth",
    year:2001,
    quote: "Never let the fear of striking out get in your way.",
    tag: "Sport Quote"
  },
  {
    id: 66,
    author: "Serena Williams",
    year: 2002,
    quote: "I've grown most not from victories, but setbacks. If winning is God's reward, then losing is how he teaches us.",
    tag: "Sport Quote"
  },
  {
    id: 67,
    author: "Mia Hamm",
    year: 1989,
    quote: "I am a member of a team, and I rely on the team, I defer to it and sacrifice for it, because the team, not the individual, is the ultimate champion.",
    tag: "Sport Quote"
  },
  {
    id: 68,
    author: "Usain Bolt",
    year: 1975,
    quote: "Don't think about the start of the race, think about the ending.",
    tag: "Sport Quote"
  },
  {
    id: 69,
    author: "Jackie Robinson",
    year: 1999,
    quote: "A life is not important except in the impact it has on other lives.",
    tag: "Sport Quote"
  },
  {
    id: 70,
    author: "Wayne Gretzky",
    year: 2003,
    quote: "You miss 100% of the shots you don't take.",
    tag: "Sport Quote"
  },
  {
    id: 71,
    author: "Yogi Berra",
    year: 2006,
    quote: "It ain't over till it's over.",
    tag: "Sport Quote"
  },
  {
    id: 72,
    author: "Helen Keller",
    year: 2002,
    quote: "Joy is the holy fire that keeps our purpose warm and our intelligence aglow.",
    tag: "Joy Quote"
  },
  {
    id: 73,
    author: "Pablo Picasso",
    year: 1985,
    quote: "The purpose of art is to wash the dust of daily life off our souls.",
    tag: "Joy Quote"
  },
  {
    id: 74,
    author: "Rumi",
    year: 1756,
    quote: "The wound is the place where the light enters you.",
    tag: "Joy Quote"
  },
  {
    id: 75,
    author: "Maya Angelou",
    year: 2007,
    quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    tag: "Joy Quote"
  },
  {
    id: 76,
    author: "Thich Nhat Hanh",
    year: 2008,
    quote: "There is no way to happiness - happiness is the way.",
    tag: "Joy Quote"
  },
  {
    id: 77,
    author: "Oscar Wilde",
    year: 2001,
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    tag: "Joy Quote"
  },
  {
    id: 78,
    author: "Walt Disney",
    year: 2004,
    quote: "Happiness is a state of mind. It's just according to the way you look at things.",
    tag: "Joy Quote"
  },
  {
    id: 79,
    author: "Albert Schweitzer",
    year: 2009,
    quote: "Happiness is nothing more than good health and a bad memory.",
    tag: "Joy Quote"
  },
  {
    id: 80,
    author: "Dalai Lama",
    year: 2005,
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    tag: "Joy Quote"
  },
  {
    id: 81,
    author: "Anne Frank",
    year: 2010,
    quote: "Think of all the beauty still left around you and be happy.",
    tag: "Joy Quote"
  },
  {    
    id: 82,   
    author: "Steve Jobs",    
    year: 2005,    
    quote: "Innovation distinguishes between a leader and a follower.",
    tag:"Business Quote"
  },
  {    
    id: 83,    
    author: "Warren Buffett",   
    year: 2001,    
    quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",  
    tag:"Business Quote"
  },  
  {    
    id: 84, 
    author: "Jack Welch",  
    year: 2001,    
    quote: "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.",  
    tag:"Business Quote"
  },  
  {   id: 85,    
    author: "Mark Zuckerberg",    
    year: 2012,    
    quote: "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", 
    tag:"Business Quote"
  },  
  {    
    id: 86,    
    author: "Elon Musk",    
    year: 2008,    
    quote: "If something is important enough, even if the odds are against you, you should still do it.",  
    tag:"Business Quote"
  },  
  {   
    id: 87,    
    author: "Bill Gates",    
    year: 1995,    
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",  
    tag:"Business Quote"
  },  
  {    
    id: 88,    
    author: "Sheryl Sandberg",    
    year: 2013,    
    quote: "Done is better than perfect.", 
    tag:"Business Quote"
  },  
  {    
    id: 89,    
    author: "Jeff Bezos",    
    year: 1997,    
    quote: "We're not competitor obsessed, we're customer obsessed. We start with what the customer needs and we work backwards.",  
    tag:"Business Quote"
  },  
  {    
    id: 90,    
    author: "Richard Branson",    
    year: 2006,    
    quote: "Train people well enough so they can leave, treat them well enough so they don't want to.",  
    tag:"Business Quote"
  },  
  {    
    id: 91,    
    author: "Sara Blakely",    
    year: 2013,    
    quote: "Don't be intimidated by what you don't know. That can be your greatest strength and ensure that you do things differently from everyone else.",  
    tag:"Business Quote"
  },
  {
    id: 92,
    author: "Nelson Mandela",
    year: 2005,
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    tag: "Famous Quote"
  },
  {
    id: 93,
    author: "Martin Luther King Jr.",
    year: 2002,
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    tag: "Famous Quote"
  },
  {
    id: 94,
    author: "Maya Angelou",
    year: 2015,
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    tag: "Famous Quote"
  },
  {
    id: 95,
    author: "Albert Einstein",
    year: 1978,
    quote: "Try not to become a man of success. Rather become a man of value.",
    tag: "Famous Quote"
  },
  {
    id: 96,
    author: "Mahatma Gandhi",
    year: 1856,
    quote: "Be the change that you wish to see in the world.",
    tag: "Famous Quote"
  },
  {
    id: 97,
    author: "Oscar Wilde",
    year: 1956,
    quote: "Be yourself; everyone else is already taken.",
    tag: "Famous Quote"
  },
  {
    id: 98,
    author: "Mother Teresa",
    year: 1789,
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    tag: "Famous Quote"
  },
  {
    id: 99,
    author: "Winston Churchill",
    year: 1889,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    tag: "Famous Quote"
  },
  {
    id: 100,
    author: "Steve Jobs",
    year: 2003,
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    tag: "Famous Quote"
  }
]     


