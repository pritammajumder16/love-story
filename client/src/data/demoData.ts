// Demo data for the proposal app - customize this with your real story!

export interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  image?: string;
}

export interface Memory {
  id: string;
  date: string;
  title: string;
  description?: string;
  image: string;
  type: "image" | "video";
}

// Diary entries - start from your actual meeting date and add your story!
export const demoEntriesData: DiaryEntry[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "The First Hello",
    content:
      "Today will always be unforgettable – the day you found me on the matrimony site and simply said 'hi.' That one small word started it all. I told you about myself – what I do, where I come from, and the kind of partner I dreamt of. I didn’t know then that this simple exchange would change my life forever. It was the very first page of our story, Sonaii.",
    image: "/images/diary1.jpg",
  },
  {
    id: "2",
    date: "2025-06-28",
    title: "Opening Up",
    content:
      "We continued talking today, and I shared even more about my life and the kind of person I hope to spend it with. You listened, you responded, and in those conversations I felt something pure and real. It felt like we weren’t just two strangers anymore — we were two souls trying to understand each other.",
    image: "/images/diary2.jpg",
  },
  {
    id: "3",
    date: "2025-06-29",
    title: "From My Main Account",
    content:
      "Today I messaged you from my main account, and that made everything feel more personal. I also realized that we share the same birthday, June 20 — what a magical coincidence! It felt like destiny had its hand in bringing us together. We laughed about it, but inside, I was already feeling a deep connection with you.",
    image: "/images/diary3.jpg",
  },
  {
    id: "2",
    date: "2025-06-29",
    title: "Day 2 with Sonaii",
    content:
      "We talked about studies, jobs, and the future. I loved how determined you are, and it made me imagine what our journey together could look like.",
    image: "/images/diary2.jpg",
  },
  {
    id: "3",
    date: "2025-06-30",
    title: "Day 3 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary3.jpg",
  },
  {
    id: "4",
    date: "2025-07-01",
    title: "Day 4 with Sonaii",
    content:
      "Today I discovered something magical – our birthdays match! It felt like destiny was aligning our paths. We laughed about it, but deep down I knew this was more than coincidence.",
    image: "/images/diary4.jpg",
  },
  {
    id: "5",
    date: "2025-07-02",
    title: "Day 5 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary5.jpg",
  },
  {
    id: "6",
    date: "2025-07-03",
    title: "Day 6 with Sonaii",
    content:
      "Today I discovered something magical – our birthdays match! It felt like destiny was aligning our paths. We laughed about it, but deep down I knew this was more than coincidence.",
    image: "/images/diary6.jpg",
  },
  {
    id: "7",
    date: "2025-07-04",
    title: "Day 7 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary7.jpg",
  },
  {
    id: "8",
    date: "2025-07-05",
    title: "Day 8 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary8.jpg",
  },
  {
    id: "9",
    date: "2025-07-06",
    title: "Day 9 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary9.jpg",
  },
  {
    id: "10",
    date: "2025-07-07",
    title: "Day 10 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary10.jpg",
  },
  {
    id: "11",
    date: "2025-07-08",
    title: "Day 11 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary11.jpg",
  },
  {
    id: "12",
    date: "2025-07-09",
    title: "Day 12 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary12.jpg",
  },
  {
    id: "13",
    date: "2025-07-10",
    title: "Day 13 with Sonaii",
    content:
      "Today I discovered something magical – our birthdays match! It felt like destiny was aligning our paths. We laughed about it, but deep down I knew this was more than coincidence.",
    image: "/images/diary13.jpg",
  },
  {
    id: "14",
    date: "2025-07-11",
    title: "Day 14 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary14.jpg",
  },
  {
    id: "15",
    date: "2025-07-12",
    title: "Day 15 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary15.jpg",
  },
  {
    id: "16",
    date: "2025-07-13",
    title: "Day 16 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary16.jpg",
  },
  {
    id: "17",
    date: "2025-07-14",
    title: "Day 17 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary17.jpg",
  },
  {
    id: "18",
    date: "2025-07-15",
    title: "Day 18 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary18.jpg",
  },
  {
    id: "19",
    date: "2025-07-16",
    title: "Day 19 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary19.jpg",
  },
  {
    id: "20",
    date: "2025-07-17",
    title: "Day 20 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary20.jpg",
  },
  {
    id: "21",
    date: "2025-07-18",
    title: "Day 21 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary21.jpg",
  },
  {
    id: "22",
    date: "2025-07-19",
    title: "Day 22 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary22.jpg",
  },
  {
    id: "23",
    date: "2025-07-20",
    title: "Day 23 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary23.jpg",
  },
  {
    id: "24",
    date: "2025-07-21",
    title: "Day 24 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary24.jpg",
  },
  {
    id: "25",
    date: "2025-07-22",
    title: "Day 25 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary25.jpg",
  },
  {
    id: "26",
    date: "2025-07-23",
    title: "Day 26 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary26.jpg",
  },
  {
    id: "27",
    date: "2025-07-24",
    title: "Day 27 with Sonaii",
    content:
      "Our day ended with good night wishes. Such a simple thing, yet it warmed my heart. I felt so connected, knowing we were thinking of each other before sleep.",
    image: "/images/diary27.jpg",
  },
  {
    id: "28",
    date: "2025-07-25",
    title: "Day 28 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary28.jpg",
  },
  {
    id: "29",
    date: "2025-07-26",
    title: "Day 29 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary29.jpg",
  },
  {
    id: "30",
    date: "2025-07-27",
    title: "Day 30 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary30.jpg",
  },
  {
    id: "31",
    date: "2025-07-29",
    title: "Day 31 with Sonaii",
    content:
      "Our day ended with good night wishes. Such a simple thing, yet it warmed my heart. I felt so connected, knowing we were thinking of each other before sleep.",
    image: "/images/diary31.jpg",
  },
  {
    id: "32",
    date: "2025-07-30",
    title: "Day 32 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary32.jpg",
  },
  {
    id: "33",
    date: "2025-07-31",
    title: "Day 33 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary33.jpg",
  },
  {
    id: "34",
    date: "2025-08-01",
    title: "Day 34 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary34.jpg",
  },
  {
    id: "35",
    date: "2025-08-02",
    title: "Day 35 with Sonaii",
    content:
      "Our day ended with good night wishes. Such a simple thing, yet it warmed my heart. I felt so connected, knowing we were thinking of each other before sleep.",
    image: "/images/diary35.jpg",
  },
  {
    id: "36",
    date: "2025-08-04",
    title: "Day 36 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary36.jpg",
  },
  {
    id: "37",
    date: "2025-08-05",
    title: "Day 37 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary37.jpg",
  },
  {
    id: "38",
    date: "2025-08-06",
    title: "Day 38 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary38.jpg",
  },
  {
    id: "39",
    date: "2025-08-07",
    title: "Day 39 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary39.jpg",
  },
  {
    id: "40",
    date: "2025-08-08",
    title: "Day 40 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary40.jpg",
  },
  {
    id: "41",
    date: "2025-08-09",
    title: "Day 41 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary41.jpg",
  },
  {
    id: "42",
    date: "2025-08-10",
    title: "Day 42 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary42.jpg",
  },
  {
    id: "43",
    date: "2025-08-11",
    title: "Day 43 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary43.jpg",
  },
  {
    id: "44",
    date: "2025-08-12",
    title: "Day 44 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary44.jpg",
  },
  {
    id: "45",
    date: "2025-08-13",
    title: "Day 45 with Sonaii",
    content:
      "Our day ended with good night wishes. Such a simple thing, yet it warmed my heart. I felt so connected, knowing we were thinking of each other before sleep.",
    image: "/images/diary45.jpg",
  },
  {
    id: "46",
    date: "2025-08-14",
    title: "Day 46 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary46.jpg",
  },
  {
    id: "47",
    date: "2025-08-15",
    title: "Day 47 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary47.jpg",
  },
  {
    id: "48",
    date: "2025-08-16",
    title: "Day 48 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary48.jpg",
  },
  {
    id: "49",
    date: "2025-08-17",
    title: "Day 49 with Sonaii",
    content:
      "We had our very first call today. Even though it was short, hearing your voice made my heart race. Suddenly, you felt so much closer.",
    image: "/images/diary49.jpg",
  },
  {
    id: "50",
    date: "2025-08-18",
    title: "Day 50 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary50.jpg",
  },
  {
    id: "51",
    date: "2025-08-19",
    title: "Day 51 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary51.jpg",
  },
  {
    id: "52",
    date: "2025-08-20",
    title: "Day 52 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary52.jpg",
  },
  {
    id: "53",
    date: "2025-08-21",
    title: "Day 53 with Sonaii",
    content:
      "Our day ended with good night wishes. Such a simple thing, yet it warmed my heart. I felt so connected, knowing we were thinking of each other before sleep.",
    image: "/images/diary53.jpg",
  },
  {
    id: "54",
    date: "2025-08-22",
    title: "Day 54 with Sonaii",
    content:
      "Our day ended with good night wishes. Such a simple thing, yet it warmed my heart. I felt so connected, knowing we were thinking of each other before sleep.",
    image: "/images/diary54.jpg",
  },
  {
    id: "55",
    date: "2025-08-23",
    title: "Day 55 with Sonaii",
    content:
      "Another beautiful day of conversations with you. Every word we shared brought me closer, and I couldn’t help but dream of where this bond would take us.",
    image: "/images/diary55.jpg",
  },
];

// Demo memories - add your real photos here!
export const demoMemoriesData: Memory[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "Our First Conversation",
    description:
      "The very first message that started our beautiful love story. A moment I’ll treasure forever.",
    image: "/images/june27-1.jpeg",
    type: "image",
  },
  {
    id: "2",
    date: "2025-07-03",
    title: "Matching Horoscopes",
    description:
      "The first time we matched our hands for compatibility with an astrologer named Jagadish. A sweet and memorable step together.",
    image: "/images/jul3-1.jpeg",
    type: "image",
  },
  {
    id: "3",
    date: "2025-07-11",
    title: "Our First Unplanned Date",
    description:
      "That unexpected call from you to meet at Sealdah, before you left for Chunakhali to see your mom. The start of something magical.",
    image: "/images/jul11-1.jpeg",
    type: "image",
  },
  {
    id: "4",
    date: "2025-07-28",
    title: "Our First Planned Date",
    description:
      "When I went to Habra to pick you up, and we went to Inox Forum Mall together. It was the first time I truly felt your deep trust in me.",
    image: "/images/jul28-1.jpeg",
    type: "image",
  },
  {
    id: "5",
    date: "2025-08-03",
    title: "Dinner at Hazarduari",
    description:
      "Our second date at Barasat, where I captured this moment at Hazarduari restaurant. A simple yet perfect evening.",
    image: "/images/aug3-1.jpeg",
    type: "image",
  },
  {
    id: "6",
    date: "2025-08-10",
    title: "Sealdah Date – A Recreation",
    description:
      "Another planned date at Sealdah, recreating our first meeting. I dropped you off at your aunt’s home afterwards, just like before.",
    image: "/images/aug10-1.jpeg",
    type: "image",
  },
  {
    id: "7",
    date: "2025-08-16",
    title: "Taking Care of You",
    description:
      "A special date at Barasat, where I accompanied you for your eye treatment. Small moments of care that mean the most.",
    image: "/images/aug16-1.jpeg",
    type: "image",
  },
];

// Personal details - customize with your real information
export const personalInfo = {
  yourName: "Pritam",
  yourNickname: "Prit",
  yourLocation: "Mollargate, Kolkata",
  partnerName: "Paramita",
  partnerNickname: "Paro",
  partnerLocation: "House number 75, Habra post office road, West Bengal",
  meetingDate: "June 27th, 2025",
  relationshipStart: "2025-06-27",
};

// Proposal text - customize this with your own words!
export const proposalText = {
  mainMessage:
    "From the moment we started talking on June 27th, 2025, I knew you were special. Every conversation, every laugh, every shared moment has only made me fall deeper in love with you. You are my best friend, my confidant, and the love of my life.",
  secondMessage:
    "I want to wake up next to you every morning, share all of life's adventures with you, and grow old together. You complete me in ways I never thought possible.",
  finalQuestion:
    "So, Paro, my love, will you marry me and make me the happiest man alive?",
  yesResponse: "🎉 YES! She Said Yes! 🎉",
  yesMessage: "I can't wait to start our forever together, my beautiful Paro!",
  maybeResponse: "Take All the Time You Need 💕",
  maybeMessage:
    "I'll wait forever for you, my love. You're worth every moment of waiting.",
};

// Love reasons - customize with why you love your partner
export const loveReasons = [
  {
    title: "Your Beautiful Smile",
    description:
      "Every time you smile, my world lights up with a thousand stars. Your joy is contagious and makes every moment magical.",
    icon: "😊",
  },
  {
    title: "Your Kind Heart",
    description:
      "Your compassion and kindness towards everyone around you shows the beautiful soul you have. You make the world a better place.",
    icon: "💝",
  },
  {
    title: "Your Dreams and Ambitions",
    description:
      "Your ambitions and dreams inspire me every day. I want to be part of your journey and support you in achieving everything you desire.",
    icon: "⭐",
  },
];
