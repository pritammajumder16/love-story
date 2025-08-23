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
  type: 'image' | 'video';
}

// Diary entries - start from your actual meeting date and add your story!
export const demoEntriesData: DiaryEntry[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "The Day We Started Talking",
    content: "Today marks the beginning of something beautiful. When we first started talking, I had no idea that this conversation would change my life forever. Your voice, your laugh, the way you think - everything about you captivated me from day one. I remember feeling this incredible connection, like I'd been waiting my whole life to meet someone like you, Paro.",
    image: "/images/diary1.jpg"
  },
  {
    id: "2", 
    date: "2025-06-28",
    title: "Getting to Know You Better",
    content: "Our second day of talking and I was already falling for your intelligence and wit. The way you shared your thoughts, your dreams, and your perspectives on life - I knew I was talking to someone extraordinary. Every message from you made my heart skip a beat. I started looking forward to our conversations more than anything else in my day.",
    image: "/images/diary2.jpg"
  },
  {
    id: "3",
    date: "2025-06-29", 
    title: "Realizing Something Special",
    content: "I couldn't stop thinking about you today. Every song reminded me of our conversations, every sunset made me wish you were here to see it with me. I realized that what we have is something truly special. From Mollargate to Habra Post Office Road, the distance felt like nothing when we were talking. You make everything in my world brighter, Paramita.",
    image: "/images/diary3.jpg"
  },
  {
    id: "4",
    date: "2025-06-30",
    title: "Dreams of Our Future",
    content: "I found myself daydreaming about our future together. What would it be like to wake up next to you every morning? To share our dreams, our struggles, our victories together? I imagined taking you to all my favorite places in Kolkata, and you showing me the beautiful spots around Habra. The thought of building a life with you fills my heart with such joy and hope.",
    image: "/images/diary4.jpg"
  }
];

// Demo memories - add your real photos here!
export const demoMemoriesData: Memory[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "Our First Conversation Screenshot",
    description: "The very first message that started our beautiful love story. I'll treasure this moment forever.",
    image: "/images/memory1.jpg",
    type: "image"
  },
  {
    id: "2", 
    date: "2025-07-01",
    title: "Sunset That Reminded Me of You",
    description: "This beautiful sunset made me think of you and how you light up my world just like this golden sky.",
    image: "/images/memory2.jpg", 
    type: "image"
  },
  {
    id: "3",
    date: "2025-07-05",
    title: "The Song That Made Me Think of Us",
    description: "Every time I hear this song, I think about our love story and how perfect we are for each other.",
    image: "/images/memory3.jpg",
    type: "image"
  }
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
  relationshipStart: "2025-06-27"
};

// Proposal text - customize this with your own words!
export const proposalText = {
  mainMessage: "From the moment we started talking on June 27th, 2025, I knew you were special. Every conversation, every laugh, every shared moment has only made me fall deeper in love with you. You are my best friend, my confidant, and the love of my life.",
  secondMessage: "I want to wake up next to you every morning, share all of life's adventures with you, and grow old together. You complete me in ways I never thought possible.",
  finalQuestion: "So, Paro, my love, will you marry me and make me the happiest man alive?",
  yesResponse: "🎉 YES! She Said Yes! 🎉",
  yesMessage: "I can't wait to start our forever together, my beautiful Paro!",
  maybeResponse: "Take All the Time You Need 💕", 
  maybeMessage: "I'll wait forever for you, my love. You're worth every moment of waiting."
};

// Love reasons - customize with why you love your partner
export const loveReasons = [
  {
    title: "Your Beautiful Smile",
    description: "Every time you smile, my world lights up with a thousand stars. Your joy is contagious and makes every moment magical.",
    icon: "😊"
  },
  {
    title: "Your Kind Heart", 
    description: "Your compassion and kindness towards everyone around you shows the beautiful soul you have. You make the world a better place.",
    icon: "💝"
  },
  {
    title: "Your Dreams and Ambitions",
    description: "Your ambitions and dreams inspire me every day. I want to be part of your journey and support you in achieving everything you desire.", 
    icon: "⭐"
  }
];