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
  images: string[];
  type: "image" | "video";
}

// Diary entries - start from your actual meeting date and add your story!
export const demoEntriesData: DiaryEntry[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "The First Hello",
    content:
      "First was on 27th June 5:15, she messaged me on my Facebook. I had joined and posted an advertisement on a matrimony page and she found me there and messaged me 'Hi' on there but the message went to spam so I wasn't able to reply to it that day. This is where our story began.",
    image: "/images/diary1.jpg",
  },
  {
    id: "2",
    date: "2025-06-28",
    title: "Opening Up",
    content:
      "Next day at 2 am I saw that message request in spam and replied her with all my details. I apologized for replying late and gave her my details like date of birth, place, education, future aspirations, and what kind of partner I am looking for and what are my dreams that I want to fulfill with my partner. Then she wanted to confirm if I am 27 because according to her I was looking a bit older. So I told her I am a bit overweight but I'll work on it for my partner anyways. Then she gave her details and photo as well (but sent that photo with view once only). When I opened that photo I was stunned. It was the most beautiful lady I had laid my eyes on. She said that all that matters to her is how the person is and how much he will love her and nothing else, not looks or money. She said she wants loyalty, a caring person and said she wants to know me before coming into a relation, to which I agreed.\n\nThen I messaged her from my main account and said we can speak from this account from now on because until now I was using an alt account on Facebook. I permanently deleted that account. I told her that her birthday and my birthday are exactly the same! We both were shocked and laughed at it. She was teaching her students while texting me during this time. I said great then can we have an audio call for 2 mins for a quick vibe check. She denied as she wanted more time to know me and not rush, but gave me a photo in view only mode. She asked for my zodiac and gan and I gave those details. She said family does raise issues when astrology doesn't match and said it has happened to her in the past. She asked if I liked her so far. I said yes and she asked about my expectations with my partner. I gave her my entire detail that I want my journey of life to be nice and for that a great partner is required. I will take care of her forever, make sure everything she says is listened to and will unconditionally love her forever. We spoke on this topic for a bit and then about general things like likes and dislikes. Finally, she gave me a few more pictures in view once mode, and then we wished each other good night at 12:10 am.",
    image: "/images/diary2.jpg",
  },
  {
    id: "3",
    date: "2025-06-29",
    title: "Day 3 with Sonaii",
    content:
      "Today we shared a warm and caring conversation filled with everyday details and support. I explained how Netflix and Amazon Prime need separate downloads. I encouraged her to focus on her studies and wished her success for the exam the next day. She mentioned her younger sibling’s plans and possible visit to her elder sister’s house, and I shared about my Airtel subscription offering many benefits. We talked about her college near Khardah and how her exams were going—some good, some bad, and some mixed experiences. I reassured her not to be disturbed too much, urged her to eat well, and hoped her exams would go smoothly. Later, I checked if she had dinner and wished her good night, hoping she would rest well and perform well in her exam. These exchanges deepened our connection as we cared for and supported each other through daily life and challenges.",
    image: "/images/diary3.jpg",
  },

  {
    id: "5",
    date: "2025-06-30",
    title: "Day 4 with Sonaii",
    content:
      "Good morning greetings started the day warmly. I asked her how her exam went, and she replied that it went well. We chatted about our current activities, and I invited her for an audio call. She agreed but mentioned she was at the station. She said if I was busy, it was okay not to call. We exchanged playful remarks about catching the train and timing. She mentioned her father called her and the train was arriving soon. She planned to go home and complete her tasks. I wished her well, told her to rest, and hoped she would sleep peacefully. It was a day full of caring support and shared moments despite the busy schedules.",
    image: "/images/diary5.jpg",
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
// Updated demoMemoriesData with images array
// Updated demoMemoriesData with specified image counts
export const demoMemoriesData: Memory[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "Our First Conversation",
    description:
      "The very first message that started our beautiful love story. A moment I’ll treasure forever.",
    images: ["/images/june27-1.jpeg", "/images/june27-2.jpeg"],
    type: "image",
  },
  {
    id: "2",
    date: "2025-07-03",
    title: "Matching Horoscopes",
    description:
      "The first time we matched our hands for compatibility with an astrologer named Jagadish. A sweet and memorable step together.",
    images: Array.from({ length: 5 }, (_, i) => `/images/jul3-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "3",
    date: "2025-07-11",
    title: "Our First Unplanned Date",
    description:
      "That unexpected call from you to meet at Sealdah, before you left for Chunakhali to see your mom. The start of something magical.",
    images: Array.from({ length: 6 }, (_, i) => `/images/jul11-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "4",
    date: "2025-07-28",
    title: "First Movie Together at Inox",
    description:
      "When I went to Habra to pick you up, and we went to Inox Forum Mall together. Not only was it our first planned date, but it was also your very first movie theatre experience—a memory I’ll always cherish.",
    images: Array.from({ length: 9 }, (_, i) => `/images/jul28-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "5",
    date: "2025-08-03",
    title: "Our First Breakfast at Hazarduari",
    description:
      "Our second date at Barasat became extra special because it was our very first breakfast together, shared at Hazarduari restaurant. A simple yet perfect noon filled with warmth.",
    images: Array.from({ length: 18 }, (_, i) => `/images/aug3-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "6",
    date: "2025-08-10",
    title: "Sealdah Date – A Recreation",
    description:
      "Another planned date at Sealdah, recreating our first meeting. I dropped you off at your sister’s home in Sonarpur afterwards, just like before.",
    images: Array.from({ length: 7 }, (_, i) => `/images/aug10-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "7",
    date: "2025-08-16",
    title: "Our First Lunch in Barasat",
    description:
      "A special date at Barasat, where I accompanied you for your eye treatment. It also became our very first lunch together—a simple yet deeply meaningful moment of care and love.",
    images: Array.from({ length: 10 }, (_, i) => `/images/aug16-${i + 1}.jpeg`),
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
  meetingDateFormat: new Date("2025-06-27"),
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
