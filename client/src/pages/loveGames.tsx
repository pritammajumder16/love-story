import { motion } from "framer-motion";
import {
  Heart,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  ArrowUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RomanticButton } from "@/components/ui/romantic-button";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef, forwardRef } from "react";
import { pageTransition, staggerContainer } from "@/lib/animations";

// Animation variants for game cards
const cardVariants = {
  hidden: { opacity: 0, y: 20, rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  hover: {
    y: -10,
    scale: 1.03,
    rotate: -1,
    transition: { type: "spring", stiffness: 300 },
  },
};

// Memory data for Memory Match game
const demoMemoriesData = [
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
];

// Demo game data
interface Game {
  id: string;
  title: string;
  description: string;
  type:
    | "trivia"
    | "dare"
    | "match"
    | "riddle"
    | "wouldYouRather"
    | "hangman"
    | "wordSearch"
    | "ticTacToe"
    | "dinoRun"
    | "snake"
    | "simonSays"
    | "flappyBird"
    | "puzzle"
    | "maze"
    | "heartCatcher"
    | "cupidsArrow";
  content: any[];
}

const demoGames: Game[] = [
  {
    id: "1",
    title: "Love Trivia",
    description: "Test your knowledge of love with fun questions!",
    type: "trivia",
    content: [
      {
        question: "What does 'I love you' mean in French?",
        options: ["Je t'aime", "Bonjour", "Au revoir", "Merci"],
        correct: 0,
      },
      {
        question: "Who wrote Romeo and Juliet?",
        options: ["Shakespeare", "Hemingway", "Austen", "Tolstoy"],
        correct: 0,
      },
      {
        question: "What flower symbolizes love?",
        options: ["Rose", "Daisy", "Tulip", "Lily"],
        correct: 0,
      },
      {
        question: "In what year was Valentine's Day first celebrated?",
        options: ["496 AD", "14th century", "19th century", "Ancient Rome"],
        correct: 0,
      },
    ],
  },
  {
    id: "2",
    title: "Romantic Challenge",
    description: "Get a random romantic challenge to spark joy!",
    type: "dare",
    content: [
      "Write a love note and hide it somewhere special! 📝",
      "Plan a surprise date idea and share it! 🌹",
      "Recall a favorite memory and tell the story! 💭",
      "Create a playlist of love songs! 🎵",
      "Draw a heart and color it with love! ❤️",
    ],
  },
  {
    id: "3",
    title: "Memory Match",
    description: "Match our special moments to test your memory!",
    type: "match",
    content: demoMemoriesData
      .flatMap((memory) =>
        memory.images.slice(0, 2).map((image, index) => ({
          image,
          pairId: `${memory.id}-${index}`,
        }))
      )
      .reduce((acc, curr, index) => {
        if (index < 8) acc.push(curr, { ...curr }); // Limit to 4 pairs
        return acc;
      }, [] as { image: string; pairId: string }[]),
  },
  {
    id: "4",
    title: "Romantic Riddles",
    description: "Solve fun riddles about love!",
    type: "riddle",
    content: [
      {
        riddle:
          "I can break, I can be clogged, I can be attacked, I can be given, I can be kept, I can be crushed, yet I can be whole at the same time. What am I?",
        answer: "heart",
      },
      {
        riddle:
          "What starts with 'e' and ends with 'e' but only has one letter?",
        answer: "envelope",
      },
      {
        riddle:
          "I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",
        answer: "fire",
      },
      {
        riddle: "What can you catch but not throw?",
        answer: "cold",
      },
    ],
  },
  {
    id: "5",
    title: "Would You Rather",
    description: "Choose between romantic scenarios!",
    type: "wouldYouRather",
    content: [
      {
        option1: "Cuddle under the stars",
        option2: "Dance in the rain",
        reveal: "Both are romantic, but stars win for coziness! ⭐",
      },
      {
        option1: "Receive flowers every day",
        option2: "Get love notes weekly",
        reveal: "Love notes add a personal touch! 💌",
      },
      {
        option1: "Travel the world together",
        option2: "Build a home and stay cozy",
        reveal: "Adventure or comfort? Both are great! 🌍🏡",
      },
    ],
  },
  {
    id: "6",
    title: "Love Hangman",
    description: "Guess the romantic word before the hearts run out!",
    type: "hangman",
    content: [
      { word: "love", hint: "A deep affection" },
      { word: "heart", hint: "Symbol of love" },
      { word: "kiss", hint: "Romantic gesture" },
      { word: "romance", hint: "Love story" },
      { word: "forever", hint: "Eternal love" },
    ],
  },
  {
    id: "7",
    title: "Romantic Word Search",
    description: "Find hidden romantic words in the grid!",
    type: "wordSearch",
    content: [
      {
        grid: [
          ["L", "O", "V", "E", "H"],
          ["K", "I", "S", "S", "E"],
          ["H", "E", "A", "R", "A"],
          ["R", "O", "M", "A", "R"],
          ["T", "E", "D", "Y", "T"],
        ],
        words: ["LOVE", "KISS", "HEART", "ROMANCE", "TEDDY"],
      },
    ],
  },
  {
    id: "8",
    title: "Love Tic-Tac-Toe",
    description: "Play Tic-Tac-Toe with love symbols against AI!",
    type: "ticTacToe",
    content: [],
  },
  {
    id: "9",
    title: "Heart Runner",
    description: "Jump over broken hearts like the Chrome dinosaur game!",
    type: "dinoRun",
    content: [],
  },
  {
    id: "10",
    title: "Love Snake",
    description: "Collect hearts without hitting walls!",
    type: "snake",
    content: [],
  },
  {
    id: "11",
    title: "Romantic Simon Says",
    description: "Repeat the sequence of love colors!",
    type: "simonSays",
    content: ["red", "pink", "purple", "gold"],
  },
  {
    id: "12",
    title: "Flappy Heart",
    description: "Flap through obstacles to reach your love!",
    type: "flappyBird",
    content: [],
  },
  {
    id: "13",
    title: "Love Puzzle",
    description: "Slide tiles to form a romantic image!",
    type: "puzzle",
    content: [{ image: "/images/june27-1.jpeg", tiles: 9 }],
  },
  {
    id: "14",
    title: "Love Maze",
    description: "Navigate a heart-shaped maze to find your love!",
    type: "maze",
    content: [
      {
        grid: [
          ["W", "W", "W", "W", "W"],
          ["S", " ", " ", " ", "W"],
          ["W", " ", "W", " ", "W"],
          ["W", " ", " ", " ", "E"],
          ["W", "W", "W", "W", "W"],
        ],
      },
    ],
  },
  {
    id: "15",
    title: "Heart Catcher",
    description: "Catch falling hearts to show your love!",
    type: "heartCatcher",
    content: [],
  },
  {
    id: "16",
    title: "Cupid’s Arrow",
    description: "Aim and shoot arrows at moving hearts!",
    type: "cupidsArrow",
    content: [],
  },
];

// Shuffle function
const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Wrap RomanticButton with forwardRef to handle refs
const ForwardedRomanticButton = (props: any) => <RomanticButton {...props} />;
ForwardedRomanticButton.displayName = "ForwardedRomanticButton";

export default function LoveGame() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [currentContentIndex, setCurrentContentIndex] = useState<
    Record<string, number>
  >({});
  const [currentGameContent, setCurrentGameContent] = useState<
    Record<string, any>
  >({});
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string[]>>(
    {}
  );
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  // Hangman state
  const [hangmanGuesses, setHangmanGuesses] = useState<
    Record<string, Set<string>>
  >({});
  const [hangmanLives, setHangmanLives] = useState<Record<string, number>>({});
  // Word Search state
  const [wordSearchFound, setWordSearchFound] = useState<
    Record<string, string[]>
  >({});
  // Tic-Tac-Toe state
  const [ticTacToeBoard, setTicTacToeBoard] = useState<
    Record<string, string[][]>
  >({});
  const [ticTacToeTurn, setTicTacToeTurn] = useState<Record<string, string>>(
    {}
  );
  const [ticTacToeWinner, setTicTacToeWinner] = useState<
    Record<string, string>
  >({});
  // Dino Run state
  const [dinoPosition, setDinoPosition] = useState<Record<string, number>>({});
  const [obstacles, setObstacles] = useState<Record<string, number[]>>({});
  const [dinoScore, setDinoScore] = useState<Record<string, number>>({});
  const [gameOver, setGameOver] = useState<Record<string, boolean>>({});
  const dinoRef = useRef<NodeJS.Timeout | null>(null);
  // Snake state
  const [snake, setSnake] = useState<
    Record<string, { x: number; y: number }[]>
  >({});
  const [direction, setDirection] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [food, setFood] = useState<Record<string, { x: number; y: number }>>(
    {}
  );
  const [snakeScore, setSnakeScore] = useState<Record<string, number>>({});
  const [snakeGameOver, setSnakeGameOver] = useState<Record<string, boolean>>(
    {}
  );
  const snakeRef = useRef<NodeJS.Timeout | null>(null);
  // Simon Says state
  const [simonSequence, setSimonSequence] = useState<Record<string, string[]>>(
    {}
  );
  const [userSequence, setUserSequence] = useState<Record<string, string[]>>(
    {}
  );
  const [simonLevel, setSimonLevel] = useState<Record<string, number>>({});
  const [currentFlash, setCurrentFlash] = useState<Record<string, string>>({});
  // Flappy Bird state
  const [flappyPosition, setFlappyPosition] = useState<Record<string, number>>(
    {}
  );
  const [pipes, setPipes] = useState<
    Record<string, { x: number; height: number }[]>
  >({});
  const [flappyScore, setFlappyScore] = useState<Record<string, number>>({});
  const [flappyGameOver, setFlappyGameOver] = useState<Record<string, boolean>>(
    {}
  );
  const flappyRef = useRef<NodeJS.Timeout | null>(null);
  // Puzzle state
  const [puzzleTiles, setPuzzleTiles] = useState<Record<string, number[]>>({});
  const [puzzleEmpty, setPuzzleEmpty] = useState<Record<string, number>>({});
  // Maze state
  const [mazePosition, setMazePosition] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [mazeScore, setMazeScore] = useState<Record<string, number>>({});
  const [mazeGameOver, setMazeGameOver] = useState<Record<string, boolean>>({});
  // Heart Catcher state
  const [catcherPosition, setCatcherPosition] = useState<
    Record<string, number>
  >({});
  const [hearts, setHearts] = useState<
    Record<string, { x: number; y: number }[]>
  >({});
  const [catcherScore, setCatcherScore] = useState<Record<string, number>>({});
  const catcherRef = useRef<NodeJS.Timeout | null>(null);
  // Cupid's Arrow state
  const [arrowPosition, setArrowPosition] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [arrowVelocity, setArrowVelocity] = useState<Record<string, number>>(
    {}
  );
  const [targets, setTargets] = useState<
    Record<string, { x: number; y: number }[]>
  >({});
  const [arrowScore, setArrowScore] = useState<Record<string, number>>({});
  const [arrowGameOver, setArrowGameOver] = useState<Record<string, boolean>>(
    {}
  );
  const arrowRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  const handleSelectGame = (game: Game) => {
    setSelectedGame(game);
    setCurrentContentIndex((prev) => ({ ...prev, [game.id]: 0 }));
    setSelectedCards([]);
    setMatchedPairs((prev) => ({ ...prev, [game.id]: [] }));
    setScores((prev) => ({ ...prev, [game.id]: 0 }));
    setUserAnswer("");
    setShowResult(false);
    if (game.type === "hangman") {
      setHangmanGuesses((prev) => ({ ...prev, [game.id]: new Set() }));
      setHangmanLives((prev) => ({ ...prev, [game.id]: 6 }));
    }
    if (game.type === "wordSearch") {
      setWordSearchFound((prev) => ({ ...prev, [game.id]: [] }));
    }
    if (game.type === "ticTacToe") {
      setTicTacToeBoard((prev) => ({
        ...prev,
        [game.id]: Array(3)
          .fill(null)
          .map(() => Array(3).fill("")),
      }));
      setTicTacToeTurn((prev) => ({ ...prev, [game.id]: "X" }));
      setTicTacToeWinner((prev) => ({ ...prev, [game.id]: "" }));
    }
    if (game.type === "dinoRun") {
      setDinoPosition((prev) => ({ ...prev, [game.id]: 0 }));
      setObstacles((prev) => ({ ...prev, [game.id]: [] }));
      setDinoScore((prev) => ({ ...prev, [game.id]: 0 }));
      setGameOver((prev) => ({ ...prev, [game.id]: false }));
    }
    if (game.type === "snake") {
      setSnake((prev) => ({ ...prev, [game.id]: [{ x: 5, y: 5 }] }));
      setDirection((prev) => ({ ...prev, [game.id]: { x: 1, y: 0 } }));
      setFood((prev) => ({ ...prev, [game.id]: { x: 10, y: 10 } }));
      setSnakeScore((prev) => ({ ...prev, [game.id]: 0 }));
      setSnakeGameOver((prev) => ({ ...prev, [game.id]: false }));
    }
    if (game.type === "simonSays") {
      setSimonSequence((prev) => ({ ...prev, [game.id]: [] }));
      setUserSequence((prev) => ({ ...prev, [game.id]: [] }));
      setSimonLevel((prev) => ({ ...prev, [game.id]: 1 }));
      setCurrentFlash((prev) => ({ ...prev, [game.id]: "" }));
      startSimonSequence(game.id, game.content as string[]);
    }
    if (game.type === "flappyBird") {
      setFlappyPosition((prev) => ({ ...prev, [game.id]: 100 }));
      setPipes((prev) => ({ ...prev, [game.id]: [] }));
      setFlappyScore((prev) => ({ ...prev, [game.id]: 0 }));
      setFlappyGameOver((prev) => ({ ...prev, [game.id]: false }));
    }
    if (game.type === "puzzle") {
      const tiles = Array.from({ length: 9 }, (_, i) => i);
      shuffle(tiles);
      setPuzzleTiles((prev) => ({ ...prev, [game.id]: tiles }));
      setPuzzleEmpty((prev) => ({ ...prev, [game.id]: tiles.indexOf(8) }));
    }
    if (game.type === "maze") {
      setMazePosition((prev) => ({ ...prev, [game.id]: { x: 0, y: 1 } }));
      setMazeScore((prev) => ({ ...prev, [game.id]: 0 }));
      setMazeGameOver((prev) => ({ ...prev, [game.id]: false }));
    }
    if (game.type === "heartCatcher") {
      setCatcherPosition((prev) => ({ ...prev, [game.id]: 150 }));
      setHearts((prev) => ({ ...prev, [game.id]: [] }));
      setCatcherScore((prev) => ({ ...prev, [game.id]: 0 }));
    }
    if (game.type === "cupidsArrow") {
      setArrowPosition((prev) => ({ ...prev, [game.id]: { x: 50, y: 100 } }));
      setArrowVelocity((prev) => ({ ...prev, [game.id]: 0 }));
      setTargets((prev) => ({ ...prev, [game.id]: [] }));
      setArrowScore((prev) => ({ ...prev, [game.id]: 0 }));
      setArrowGameOver((prev) => ({ ...prev, [game.id]: false }));
    }
    if (game.type === "match") {
      const shuffledContent = shuffle([...game.content]);
      setCurrentGameContent((prev) => ({
        ...prev,
        [game.id]: shuffledContent,
      }));
    }
  };

  const handleNextContent = (gameId: string, contentLength: number) => {
    setCurrentContentIndex((prev) => ({
      ...prev,
      [gameId]: ((prev[gameId] || 0) + 1) % contentLength,
    }));
    setShowResult(false);
    setUserAnswer("");
  };

  const handlePrevContent = (gameId: string, contentLength: number) => {
    setCurrentContentIndex((prev) => ({
      ...prev,
      [gameId]: ((prev[gameId] || 0) - 1 + contentLength) % contentLength,
    }));
    setShowResult(false);
    setUserAnswer("");
  };

  const getRandomIndex = (length: number) => Math.floor(Math.random() * length);

  const handleGetRandomDare = (gameId: string, content: string[]) => {
    const randomIndex = getRandomIndex(content.length);
    setCurrentContentIndex((prev) => ({ ...prev, [gameId]: randomIndex }));
  };

  const handleTriviaChoice = (gameId: string, selectedIndex: number) => {
    if (!selectedGame) return;
    const item = (selectedGame.content as { correct: number }[])[
      currentContentIndex[gameId] || 0
    ];
    const isCorrect = selectedIndex === item.correct;
    setScores((prev) => ({
      ...prev,
      [gameId]: (prev[gameId] || 0) + (isCorrect ? 1 : 0),
    }));
    toast({
      title: isCorrect ? "Correct! 💖" : "Wrong!",
      description: isCorrect ? "Great job!" : "Try the next one!",
      className: isCorrect
        ? "bg-romantic-pink text-white border-romantic-purple"
        : "bg-romantic-purple text-white border-romantic-pink",
    });
    if ((currentContentIndex[gameId] || 0) + 1 < selectedGame.content.length) {
      handleNextContent(gameId, selectedGame.content.length);
    } else {
      setShowResult(true);
    }
  };

  const handleRiddleSubmit = (gameId: string) => {
    if (!selectedGame) return;
    const item = (selectedGame.content as { answer: string }[])[
      currentContentIndex[gameId] || 0
    ];
    const isCorrect =
      userAnswer.toLowerCase().trim() === item.answer.toLowerCase();
    setScores((prev) => ({
      ...prev,
      [gameId]: (prev[gameId] || 0) + (isCorrect ? 1 : 0),
    }));
    toast({
      title: isCorrect ? "Correct! 💖" : "Wrong!",
      description: isCorrect ? "Well done!" : `The answer was: ${item.answer}`,
      className: isCorrect
        ? "bg-romantic-pink text-white border-romantic-purple"
        : "bg-romantic-purple text-white border-romantic-pink",
    });
    setUserAnswer("");
    if ((currentContentIndex[gameId] || 0) + 1 < selectedGame.content.length) {
      handleNextContent(gameId, selectedGame.content.length);
    } else {
      setShowResult(true);
    }
  };

  const handleWouldYouRatherChoice = (gameId: string, choice: number) => {
    if (!selectedGame) return;
    const item = (selectedGame.content as { reveal: string }[])[
      currentContentIndex[gameId] || 0
    ];
    toast({
      title: `You chose option ${choice + 1}!`,
      description: item.reveal,
      className: "bg-romantic-pink text-white border-romantic-purple",
    });
    if ((currentContentIndex[gameId] || 0) + 1 < selectedGame.content.length) {
      handleNextContent(gameId, selectedGame.content.length);
    } else {
      setShowResult(true);
    }
  };

  const handleCardClick = (
    gameId: string,
    cardIndex: string,
    pairId: string
  ) => {
    if (
      !selectedGame ||
      selectedCards.length >= 2 ||
      matchedPairs[gameId]?.includes(pairId) ||
      selectedCards.includes(cardIndex)
    )
      return;

    const newSelectedCards = [...selectedCards, cardIndex];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      const cards = currentGameContent[gameId] || selectedGame.content;
      const firstCard = cards[parseInt(newSelectedCards[0])];
      const secondCard = cards[parseInt(newSelectedCards[1])];

      if (firstCard.pairId === secondCard.pairId) {
        setMatchedPairs((prev) => ({
          ...prev,
          [gameId]: [...(prev[gameId] || []), firstCard.pairId],
        }));
        setScores((prev) => ({ ...prev, [gameId]: (prev[gameId] || 0) + 1 }));
        toast({
          title: "Match Found! 💖",
          description: "You found a romantic pair!",
          className: "bg-romantic-pink text-white border-romantic-purple",
        });
      } else {
        toast({
          title: "No Match",
          description: "Try again!",
          className: "bg-romantic-purple text-white border-romantic-pink",
        });
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }

    if (
      (matchedPairs[gameId]?.length || 0) + 1 ===
      selectedGame.content.length / 2
    ) {
      setShowResult(true);
    }
  };

  // Hangman logic
  const handleHangmanGuess = (gameId: string, letter: string) => {
    if (!selectedGame || selectedGame.type !== "hangman") return;
    const item = (selectedGame.content as { word: string }[])[
      currentContentIndex[gameId] || 0
    ];
    const word = item.word.toLowerCase();
    const guesses = hangmanGuesses[gameId] || new Set();
    if (guesses.has(letter) || hangmanLives[gameId] === 0) return;

    const newGuesses = new Set(guesses);
    newGuesses.add(letter);
    setHangmanGuesses((prev) => ({ ...prev, [gameId]: newGuesses }));

    if (!word.includes(letter)) {
      setHangmanLives((prev) => ({
        ...prev,
        [gameId]: (prev[gameId] || 6) - 1,
      }));
    }

    const guessedWord = word.split("").every((l) => newGuesses.has(l));
    if (guessedWord || hangmanLives[gameId] - 1 === 0) {
      setScores((prev) => ({
        ...prev,
        [gameId]: (prev[gameId] || 0) + (guessedWord ? 1 : 0),
      }));
      toast({
        title: guessedWord ? "Correct! 💖" : "Game Over!",
        description: guessedWord
          ? "You guessed the word!"
          : `The word was: ${item.word}`,
        className: guessedWord
          ? "bg-romantic-pink text-white border-romantic-purple"
          : "bg-romantic-purple text-white border-romantic-pink",
      });
      if (
        (currentContentIndex[gameId] || 0) + 1 <
        selectedGame.content.length
      ) {
        handleNextContent(gameId, selectedGame.content.length);
        setHangmanGuesses((prev) => ({ ...prev, [gameId]: new Set() }));
        setHangmanLives((prev) => ({ ...prev, [gameId]: 6 }));
      } else {
        setShowResult(true);
      }
    }
  };

  const getHangmanDisplay = (gameId: string) => {
    if (!selectedGame || selectedGame.type !== "hangman") return "";
    const item = (selectedGame.content as { word: string }[])[
      currentContentIndex[gameId] || 0
    ];
    if (!item || !item.word) return "";
    const word = item.word.toLowerCase();
    const guesses = hangmanGuesses[gameId] || new Set();
    return word
      .split("")
      .map((l) => (guesses.has(l) ? l : "_"))
      .join(" ");
  };

  // Word Search logic
  const handleWordSearchClick = (gameId: string, word: string) => {
    if (!selectedGame) return;
    const found = wordSearchFound[gameId] || [];
    if (found.includes(word)) return;

    const newFound = [...found, word];
    setWordSearchFound((prev) => ({ ...prev, [gameId]: newFound }));
    setScores((prev) => ({ ...prev, [gameId]: newFound.length }));

    if (
      newFound.length ===
      (selectedGame.content[0] as { words: string[] }).words.length
    ) {
      setShowResult(true);
    }
  };

  // Tic-Tac-Toe logic
  const handleTicTacToeClick = (gameId: string, row: number, col: number) => {
    if (!selectedGame) return;
    const board = ticTacToeBoard[gameId] || [];
    if (board[row][col] || ticTacToeWinner[gameId]) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = ticTacToeTurn[gameId];
    setTicTacToeBoard((prev) => ({ ...prev, [gameId]: newBoard }));

    let winner = checkTicTacToeWinner(newBoard);
    if (winner) {
      setTicTacToeWinner((prev) => ({ ...prev, [gameId]: winner }));
      setScores((prev) => ({
        ...prev,
        [gameId]: winner === "X" ? (prev[gameId] || 0) + 1 : prev[gameId] || 0,
      }));
      toast({
        title: winner === "X" ? "You Win! 💖" : "AI Wins!",
        description: winner === "X" ? "Great job!" : "Try again!",
        className:
          winner === "X"
            ? "bg-romantic-pink text-white border-romantic-purple"
            : "bg-romantic-purple text-white border-romantic-pink",
      });
      setShowResult(true);
      return;
    }
    if (newBoard.flat().every((cell) => cell !== "")) {
      setTicTacToeWinner((prev) => ({ ...prev, [gameId]: "Draw" }));
      setShowResult(true);
      return;
    }

    setTicTacToeTurn((prev) => ({ ...prev, [gameId]: "O" }));
    // Simple AI move
    const available = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (newBoard[i][j] === "") available.push([i, j]);
      }
    }
    if (available.length) {
      const [aiRow, aiCol] =
        available[Math.floor(Math.random() * available.length)];
      newBoard[aiRow][aiCol] = "O";
      setTicTacToeBoard((prev) => ({ ...prev, [gameId]: newBoard }));
      winner = checkTicTacToeWinner(newBoard);
      if (winner) {
        setTicTacToeWinner((prev) => ({ ...prev, [gameId]: winner }));
        toast({
          title: "AI Wins!",
          description: "Try again!",
          className: "bg-romantic-purple text-white border-romantic-pink",
        });
        setShowResult(true);
        return;
      }
      if (newBoard.flat().every((cell) => cell !== "")) {
        setTicTacToeWinner((prev) => ({ ...prev, [gameId]: "Draw" }));
        setShowResult(true);
        return;
      }
      setTicTacToeTurn((prev) => ({ ...prev, [gameId]: "X" }));
    }
  };

  const checkTicTacToeWinner = (board: string[][]) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      )
        return board[i][0];
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      )
        return board[0][i];
    }
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    )
      return board[0][0];
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    )
      return board[0][2];
    return "";
  };

  // Dino Run logic
  useEffect(() => {
    if (
      selectedGame?.type === "dinoRun" &&
      !gameOver[selectedGame.id] &&
      selectedGame.id
    ) {
      const gameId = selectedGame.id;
      const interval = setInterval(() => {
        setDinoScore((prev) => ({
          ...prev,
          [gameId]: (prev[gameId] || 0) + 1,
        }));
        setObstacles((prev) => {
          const obs = (prev[gameId] || [])
            .map((x) => x - 5)
            .filter((x) => x > -20);
          if (Math.random() > 0.95) obs.push(300);
          return { ...prev, [gameId]: obs };
        });
        setDinoPosition((prev) => {
          let pos = prev[gameId] || 0;
          if (pos > 0) pos = Math.max(0, pos - 10); // Gravity
          return { ...prev, [gameId]: pos };
        });
        const pos = dinoPosition[gameId] || 0;
        if (obstacles[gameId]?.some((x) => x > 0 && x < 30 && pos < 20)) {
          setGameOver((prev) => ({ ...prev, [gameId]: true }));
          toast({
            title: "Game Over!",
            description: "You hit a broken heart!",
            className: "bg-romantic-purple text-white border-romantic-pink",
          });
          clearInterval(interval);
        }
      }, 50);
      dinoRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [selectedGame, gameOver, dinoPosition, obstacles]);

  const handleDinoJump = (gameId: string) => {
    if (dinoPosition[gameId] <= 0) {
      setDinoPosition((prev) => ({ ...prev, [gameId]: 80 })); // Jump height
    }
  };

  // Snake logic
  useEffect(() => {
    if (
      selectedGame?.type === "snake" &&
      !snakeGameOver[selectedGame.id] &&
      selectedGame.id
    ) {
      const gameId = selectedGame.id;
      const interval = setInterval(() => {
        setSnake((prev) => {
          const s = [...(prev[gameId] || [])];
          const head = {
            x: s[0].x + direction[gameId].x,
            y: s[0].y + direction[gameId].y,
          };
          if (
            head.x < 0 ||
            head.x >= 20 ||
            head.y < 0 ||
            head.y >= 20 ||
            s.some((p) => p.x === head.x && p.y === head.y)
          ) {
            setSnakeGameOver((prev) => ({ ...prev, [gameId]: true }));
            toast({
              title: "Game Over!",
              description: "You hit something!",
              className: "bg-romantic-purple text-white border-romantic-pink",
            });
            clearInterval(interval);
            return prev;
          }
          s.unshift(head);
          if (head.x === food[gameId].x && head.y === food[gameId].y) {
            setSnakeScore((prev) => ({
              ...prev,
              [gameId]: (prev[gameId] || 0) + 1,
            }));
            setFood((prev) => ({
              ...prev,
              [gameId]: {
                x: Math.floor(Math.random() * 20),
                y: Math.floor(Math.random() * 20),
              },
            }));
          } else {
            s.pop();
          }
          return { ...prev, [gameId]: s };
        });
      }, 150); // Slower for playability
      snakeRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [selectedGame, snakeGameOver, direction, food]);

  const handleSnakeDirection = (
    gameId: string,
    dir: { x: number; y: number }
  ) => {
    const currentDir = direction[gameId];
    if (dir.x !== -currentDir.x && dir.y !== -currentDir.y) {
      setDirection((prev) => ({ ...prev, [gameId]: dir }));
    }
  };

  // Simon Says logic
  const startSimonSequence = (gameId: string, colors: string[]) => {
    const seq: string[] = [];
    for (let i = 0; i < (simonLevel[gameId] || 1); i++) {
      seq.push(colors[getRandomIndex(colors.length)]);
    }
    setSimonSequence((prev) => ({ ...prev, [gameId]: seq }));
    setUserSequence((prev) => ({ ...prev, [gameId]: [] }));
    let index = 0;
    const flashInterval = setInterval(() => {
      setCurrentFlash((prev) => ({ ...prev, [gameId]: seq[index] }));
      setTimeout(() => {
        setCurrentFlash((prev) => ({ ...prev, [gameId]: "" }));
      }, 300);
      index++;
      if (index >= seq.length) clearInterval(flashInterval);
    }, 500);
  };

  const handleSimonClick = (gameId: string, color: string) => {
    if (!selectedGame || currentFlash[gameId]) return;
    const userSeq = [...(userSequence[gameId] || []), color];
    setUserSequence((prev) => ({ ...prev, [gameId]: userSeq }));
    if (
      userSeq[userSeq.length - 1] !== simonSequence[gameId][userSeq.length - 1]
    ) {
      toast({
        title: "Wrong Sequence!",
        description: "Game Over!",
        className: "bg-romantic-purple text-white border-romantic-pink",
      });
      setShowResult(true);
      return;
    }
    if (userSeq.length === simonSequence[gameId].length) {
      setScores((prev) => ({ ...prev, [gameId]: (prev[gameId] || 0) + 1 }));
      toast({
        title: "Correct!",
        description: "Next level!",
        className: "bg-romantic-pink text-white border-romantic-purple",
      });
      setSimonLevel((prev) => ({ ...prev, [gameId]: (prev[gameId] || 1) + 1 }));
      setTimeout(
        () => startSimonSequence(gameId, selectedGame.content as string[]),
        1000
      );
    }
  };

  // Flappy Bird logic
  useEffect(() => {
    if (
      selectedGame?.type === "flappyBird" &&
      !flappyGameOver[selectedGame.id] &&
      selectedGame.id
    ) {
      const gameId = selectedGame.id;
      const interval = setInterval(() => {
        setFlappyPosition((prev) => ({
          ...prev,
          [gameId]: Math.max(0, Math.min(200, (prev[gameId] || 100) + 3)), // Gravity +3 down
        }));
        setPipes((prev) => {
          const p = (prev[gameId] || [])
            .map((pipe) => ({ ...pipe, x: pipe.x - 3 }))
            .filter((pipe) => pipe.x > -50);
          if (p.length === 0 || p[p.length - 1].x < 150) {
            p.push({ x: 300, height: Math.floor(Math.random() * 80) + 20 });
          }
          return { ...prev, [gameId]: p };
        });
        setFlappyScore((prev) => ({
          ...prev,
          [gameId]: (prev[gameId] || 0) + 0.1,
        }));

        const pos = flappyPosition[gameId] || 100;
        if (pos <= 0 || pos >= 200) {
          setFlappyGameOver((prev) => ({ ...prev, [gameId]: true }));
          toast({
            title: "Game Over!",
            description: "You crashed!",
            className: "bg-romantic-purple text-white border-romantic-pink",
          });
          clearInterval(interval);
          return;
        }
        pipes[gameId]?.forEach((pipe) => {
          if (pipe.x < 30 && pipe.x > 10) {
            if (pos < pipe.height || pos > pipe.height + 80) {
              setFlappyGameOver((prev) => ({ ...prev, [gameId]: true }));
              toast({
                title: "Game Over!",
                description: "You hit a pipe!",
                className: "bg-romantic-purple text-white border-romantic-pink",
              });
              clearInterval(interval);
            }
          }
        });
      }, 30);
      flappyRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [selectedGame, flappyGameOver, flappyPosition, pipes]);

  const handleFlappyFlap = (gameId: string) => {
    setFlappyPosition((prev) => ({
      ...prev,
      [gameId]: Math.max(0, (prev[gameId] || 100) - 30), // Flap up
    }));
  };

  // Puzzle logic
  const handlePuzzleClick = (gameId: string, index: number) => {
    if (!selectedGame) return;
    const tiles = puzzleTiles[gameId] || [];
    const empty = puzzleEmpty[gameId] || 8;
    const col = index % 3;
    const row = Math.floor(index / 3);
    const emptyCol = empty % 3;
    const emptyRow = Math.floor(empty / 3);
    if (
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1)
    ) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[empty]] = [newTiles[empty], newTiles[index]];
      setPuzzleTiles((prev) => ({ ...prev, [gameId]: newTiles }));
      setPuzzleEmpty((prev) => ({ ...prev, [gameId]: index }));
      if (newTiles.every((tile, i) => tile === i)) {
        setScores((prev) => ({ ...prev, [gameId]: (prev[gameId] || 0) + 1 }));
        toast({
          title: "Puzzle Solved!",
          description: "Great job!",
          className: "bg-romantic-pink text-white border-romantic-purple",
        });
        setShowResult(true);
      }
    }
  };

  // Maze logic
  const handleMazeMove = (gameId: string, dir: { x: number; y: number }) => {
    if (!selectedGame || mazeGameOver[gameId]) return;
    const pos = mazePosition[gameId] || { x: 0, y: 1 };
    const newPos = { x: pos.x + dir.x, y: pos.y + dir.y };
    const grid = (selectedGame.content[0] as { grid: string[][] }).grid;
    if (
      newPos.x < 0 ||
      newPos.x >= grid[0].length ||
      newPos.y < 0 ||
      newPos.y >= grid.length ||
      grid[newPos.y][newPos.x] === "W"
    )
      return;
    setMazePosition((prev) => ({ ...prev, [gameId]: newPos }));
    setMazeScore((prev) => ({ ...prev, [gameId]: (prev[gameId] || 0) + 1 }));
    if (grid[newPos.y][newPos.x] === "E") {
      setMazeGameOver((prev) => ({ ...prev, [gameId]: true }));
      setScores((prev) => ({ ...prev, [gameId]: (prev[gameId] || 0) + 1 }));
      toast({
        title: "Maze Completed!",
        description: "You found the love!",
        className: "bg-romantic-pink text-white border-romantic-purple",
      });
      setShowResult(true);
    }
  };

  // Heart Catcher logic
  useEffect(() => {
    if (selectedGame?.type === "heartCatcher" && selectedGame.id) {
      const gameId = selectedGame.id;
      const interval = setInterval(() => {
        setHearts((prev) => {
          const h = (prev[gameId] || [])
            .map((heart) => ({ ...heart, y: heart.y + 3 }))
            .filter((heart) => heart.y < 250);
          if (Math.random() > 0.8)
            h.push({ x: Math.floor(Math.random() * 300), y: 0 });
          return { ...prev, [gameId]: h };
        });
        const catcherPos = catcherPosition[gameId] || 150;
        setHearts((prev) => {
          const h = (prev[gameId] || []).filter((heart) => {
            if (heart.y > 220 && Math.abs(heart.x - catcherPos) < 30) {
              setCatcherScore((prev) => ({
                ...prev,
                [gameId]: (prev[gameId] || 0) + 1,
              }));
              return false;
            }
            if (heart.y > 250) {
              // Missed, perhaps end game after misses
            }
            return true;
          });
          return { ...prev, [gameId]: h };
        });
      }, 30);
      catcherRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [selectedGame, catcherPosition]);

  const handleCatcherMove = (gameId: string, dir: number) => {
    setCatcherPosition((prev) => {
      const newPos = (prev[gameId] || 150) + dir * 20;
      return { ...prev, [gameId]: Math.max(0, Math.min(300, newPos)) };
    });
  };

  // Cupid's Arrow logic
  useEffect(() => {
    if (
      selectedGame?.type === "cupidsArrow" &&
      !arrowGameOver[selectedGame.id] &&
      selectedGame.id
    ) {
      const gameId = selectedGame.id;
      const interval = setInterval(() => {
        setTargets((prev) => {
          const t = (prev[gameId] || [])
            .map((target) => ({ ...target, x: target.x - 3 }))
            .filter((target) => target.x > -20);
          if (t.length < 3 && Math.random() > 0.7)
            t.push({ x: 300, y: Math.floor(Math.random() * 180) + 20 });
          return { ...prev, [gameId]: t };
        });
        const velocity = arrowVelocity[gameId] || 0;
        if (velocity > 0) {
          setArrowPosition((prev) => {
            const pos = prev[gameId] || { x: 50, y: 100 };
            const newX = pos.x + velocity;
            if (newX > 300) {
              setArrowVelocity((prev) => ({ ...prev, [gameId]: 0 }));
              setArrowPosition((prev) => ({
                ...prev,
                [gameId]: { x: 50, y: pos.y },
              }));
              setArrowGameOver((prev) => ({ ...prev, [gameId]: true }));
              toast({
                title: "Game Over!",
                description: "You missed!",
                className: "bg-romantic-purple text-white border-romantic-pink",
              });
              clearInterval(interval);
              return prev;
            }
            return { ...prev, [gameId]: { x: newX, y: pos.y } };
          });
        }
        // Check hits
        setTargets((prev) => {
          const pos = arrowPosition[gameId] || { x: 50, y: 100 };
          const t = (prev[gameId] || []).filter((target) => {
            if (
              Math.abs(target.x - pos.x) < 15 &&
              Math.abs(target.y - pos.y) < 15
            ) {
              setArrowScore((prev) => ({
                ...prev,
                [gameId]: (prev[gameId] || 0) + 1,
              }));
              setArrowVelocity((prev) => ({ ...prev, [gameId]: 0 }));
              setArrowPosition((prev) => ({
                ...prev,
                [gameId]: { x: 50, y: pos.y },
              }));
              return false;
            }
            return true;
          });
          return { ...prev, [gameId]: t };
        });
      }, 30);
      arrowRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [selectedGame, arrowGameOver, arrowPosition, arrowVelocity, targets]);

  const handleArrowShoot = (gameId: string) => {
    setArrowVelocity((prev) => ({ ...prev, [gameId]: 8 }));
  };

  const handleArrowMove = (gameId: string, dir: number) => {
    if (arrowVelocity[gameId] > 0) return; // Can't move while shooting
    setArrowPosition((prev) => {
      const pos = prev[gameId] || { x: 50, y: 100 };
      const newY = pos.y + dir * 10;
      return {
        ...prev,
        [gameId]: { x: pos.x, y: Math.max(20, Math.min(180, newY)) },
      };
    });
  };

  const isGameComplete = (game: Game | null) => {
    if (!game) return false;
    switch (game.type) {
      case "match":
        return matchedPairs[game.id]?.length === game.content.length / 2;
      case "hangman":
      case "wordSearch":
      case "ticTacToe":
      case "simonSays":
      case "puzzle":
      case "maze":
        return showResult;
      case "dinoRun":
        return gameOver[game.id];
      case "snake":
        return snakeGameOver[game.id];
      case "flappyBird":
        return flappyGameOver[game.id];
      case "cupidsArrow":
        return arrowGameOver[game.id];
      default:
        return (currentContentIndex[game.id] || 0) >= game.content.length - 1;
    }
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-20 bg-background"
    >
      {/* Header */}
      <section className="py-24 romantic-header-gradient relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-16 relative">
              <motion.div
                className="inline-flex items-center mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart
                  className="text-romantic-pink h-10 w-10 mr-4 animate-pulse-heart"
                  fill="currentColor"
                />
                <h1 className="font-romantic text-6xl md:text-7xl font-bold text-white">
                  Our Love Games
                </h1>
              </motion.div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                A collection of fun games to celebrate our love, Paro! 💖
              </p>
              <div className="w-32 h-1 bg-romantic-pink/50 mx-auto mt-8 rounded-full relative">
                <Heart
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-6 w-6 text-romantic-pink animate-pulse-heart"
                  fill="currentColor"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Game Selection */}
      <section className="py-24 romantic-gallery-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-10"
          >
            {demoGames.map((game, index) => (
              <ScrollReveal key={game.id} delay={index * 0.15}>
                <motion.div
                  className="love-card relative"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Dialog
                    open={selectedGame?.id === game.id}
                    onOpenChange={(open) => !open && setSelectedGame(null)}
                  >
                    <DialogTrigger asChild>
                      <div
                        className="romantic-glass rounded-3xl p-8 shadow-romantic relative group overflow-hidden cursor-pointer"
                        onClick={() => handleSelectGame(game)}
                      >
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                          style={{ pointerEvents: "none" }}
                        >
                          <Heart
                            className="h-24 w-24 text-romantic-pink/20 animate-pulse-heart"
                            fill="currentColor"
                          />
                        </motion.div>
                        <div className="text-center">
                          <Gamepad2
                            className="mx-auto h-14 w-14 text-romantic-pink mb-4 animate-pulse-heart"
                            fill="currentColor"
                          />
                          <h4 className="font-romantic text-2xl font-semibold text-romantic-dark mb-3">
                            {game.title}
                          </h4>
                          <p className="text-romantic-dark/80 text-sm leading-relaxed">
                            {game.description}
                          </p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-romantic-dark/95 romantic-glass p-8 rounded-3xl">
                      <DialogHeader>
                        <DialogTitle className="font-romantic text-3xl text-white relative">
                          <Heart
                            className="inline h-6 w-6 text-romantic-pink mr-2 animate-pulse-heart"
                            fill="currentColor"
                          />
                          {game.title}
                        </DialogTitle>
                      </DialogHeader>
                      {isGameComplete(selectedGame) ? (
                        <div className="text-center">
                          <p className="text-white text-lg mb-6">
                            Game Complete! Your score:{" "}
                            {Math.floor(scores[game.id] || 0)}
                          </p>
                          <ForwardedRomanticButton
                            onClick={() => handleSelectGame(game)}
                            className="bg-romantic-pink hover:bg-romantic-purple text-white"
                          >
                            Play Again
                          </ForwardedRomanticButton>
                        </div>
                      ) : (
                        <>
                          {game.type === "trivia" && (
                            <div className="text-center">
                              <p className="text-white text-lg mb-6">
                                {(game.content as { question: string }[])[
                                  currentContentIndex[game.id] || 0
                                ]?.question || "Loading..."}
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                {(game.content as { options: string[] }[])[
                                  currentContentIndex[game.id] || 0
                                ]?.options.map((option, idx) => (
                                  <Button
                                    key={`${game.id}-${idx}`}
                                    variant="outline"
                                    className="border-romantic-pink text-white hover:bg-romantic-pink/30 bg-romantic-purple/20"
                                    onClick={() =>
                                      handleTriviaChoice(game.id, idx)
                                    }
                                  >
                                    {option}
                                  </Button>
                                ))}
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {scores[game.id] || 0} /{" "}
                                {game.content.length}
                              </p>
                            </div>
                          )}
                          {game.type === "dare" && (
                            <div className="text-center">
                              <p className="text-white text-lg mb-6">
                                {(game.content as string[])[
                                  currentContentIndex[game.id] || 0
                                ] || "Loading..."}
                              </p>
                              <ForwardedRomanticButton
                                onClick={() =>
                                  handleGetRandomDare(
                                    game.id,
                                    game.content as string[]
                                  )
                                }
                                className="bg-romantic-pink hover:bg-romantic-purple text-white"
                              >
                                Get New Challenge
                              </ForwardedRomanticButton>
                            </div>
                          )}
                          {game.type === "match" && (
                            <div>
                              <div className="grid grid-cols-4 gap-4 mb-6">
                                {(
                                  currentGameContent[game.id] || game.content
                                ).map(
                                  (
                                    card: {
                                      pairId: string;
                                      image: string | undefined;
                                    },
                                    index: { toString: () => string }
                                  ) => (
                                    <motion.div
                                      key={`${game.id}-${index}`}
                                      className={`relative p-4 rounded-xl border-2 ${
                                        selectedCards.includes(
                                          index.toString()
                                        ) ||
                                        matchedPairs[game.id]?.includes(
                                          card.pairId
                                        )
                                          ? "border-romantic-pink bg-romantic-pink/30"
                                          : "border-romantic-purple/30 bg-romantic-dark/50"
                                      } cursor-pointer`}
                                      onClick={() =>
                                        handleCardClick(
                                          game.id,
                                          index.toString(),
                                          card.pairId
                                        )
                                      }
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      data-testid={`match-card-${game.id}-${index}`}
                                    >
                                      {selectedCards.includes(
                                        index.toString()
                                      ) ||
                                      matchedPairs[game.id]?.includes(
                                        card.pairId
                                      ) ? (
                                        <img
                                          src={card.image}
                                          alt="Memory card"
                                          className="w-full h-24 object-cover rounded-lg"
                                          onError={(e) => {
                                            e.currentTarget.src =
                                              "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100";
                                          }}
                                        />
                                      ) : (
                                        <Heart
                                          className="h-12 w-12 text-romantic-pink mx-auto"
                                          fill="currentColor"
                                        />
                                      )}
                                    </motion.div>
                                  )
                                )}
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {scores[game.id] || 0} /{" "}
                                {game.content.length / 2}
                              </p>
                            </div>
                          )}
                          {game.type === "riddle" && (
                            <div className="text-center">
                              <p className="text-white text-lg mb-6">
                                {(game.content as { riddle: string }[])[
                                  currentContentIndex[game.id] || 0
                                ]?.riddle || "Loading..."}
                              </p>
                              <Input
                                placeholder="Your answer..."
                                className="bg-romantic-dark/50 border-romantic-pink/50 text-white placeholder-romantic-purple/70 mb-4"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                              />
                              <ForwardedRomanticButton
                                onClick={() => handleRiddleSubmit(game.id)}
                                className="bg-romantic-pink hover:bg-romantic-purple text-white"
                              >
                                Submit Answer
                              </ForwardedRomanticButton>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {scores[game.id] || 0} /{" "}
                                {game.content.length}
                              </p>
                            </div>
                          )}
                          {game.type === "wouldYouRather" && (
                            <div className="text-center">
                              <p className="text-white text-lg mb-6">
                                Would you rather...
                              </p>
                              <div className="flex flex-col gap-4">
                                <Button
                                  variant="outline"
                                  className="border-romantic-pink text-white hover:bg-romantic-pink/30 bg-romantic-purple/20"
                                  onClick={() =>
                                    handleWouldYouRatherChoice(game.id, 0)
                                  }
                                >
                                  {(game.content as { option1: string }[])[
                                    currentContentIndex[game.id] || 0
                                  ]?.option1 || "Option 1"}
                                </Button>
                                <Button
                                  variant="outline"
                                  className="border-romantic-pink text-white hover:bg-romantic-pink/30 bg-romantic-purple/20"
                                  onClick={() =>
                                    handleWouldYouRatherChoice(game.id, 1)
                                  }
                                >
                                  {(game.content as { option2: string }[])[
                                    currentContentIndex[game.id] || 0
                                  ]?.option2 || "Option 2"}
                                </Button>
                              </div>
                            </div>
                          )}
                          {game.type === "hangman" && (
                            <div className="text-center">
                              <p className="text-white text-lg mb-6">
                                Hint:{" "}
                                {(game.content as { hint: string }[])[
                                  currentContentIndex[game.id] || 0
                                ]?.hint || "Loading..."}
                              </p>
                              <p className="text-romantic-pink text-xl mb-4">
                                {getHangmanDisplay(game.id) || "Loading..."}
                              </p>
                              <p className="text-romantic-pink text-sm mb-4">
                                Lives: {hangmanLives[game.id] || 6}
                              </p>
                              <div className="grid grid-cols-7 gap-2">
                                {"abcdefghijklmnopqrstuvwxyz"
                                  .split("")
                                  .map((letter) => (
                                    <Button
                                      key={`${game.id}-${letter}`}
                                      variant="outline"
                                      className="border-romantic-pink text-white hover:bg-romantic-pink/30 bg-romantic-purple/20 w-8 h-8 p-0"
                                      onClick={() =>
                                        handleHangmanGuess(game.id, letter)
                                      }
                                      disabled={
                                        (
                                          hangmanGuesses[game.id] || new Set()
                                        ).has(letter) ||
                                        hangmanLives[game.id] === 0
                                      }
                                    >
                                      {letter.toUpperCase()}
                                    </Button>
                                  ))}
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {scores[game.id] || 0} /{" "}
                                {game.content.length}
                              </p>
                            </div>
                          )}
                          {game.type === "wordSearch" && (
                            <div className="text-center">
                              <div className="grid grid-cols-5 gap-1 mb-4">
                                {(game.content[0] as { grid: string[][] })?.grid
                                  ?.flat()
                                  .map((letter, idx) => (
                                    <div
                                      key={`${game.id}-${idx}`}
                                      className="border-romantic-pink/30 border p-2 text-white bg-romantic-purple/20"
                                    >
                                      {letter}
                                    </div>
                                  ))}
                              </div>
                              <p className="text-white text-lg mb-6">
                                Find these words:
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                {(
                                  game.content[0] as { words: string[] }
                                )?.words.map((word) => (
                                  <Button
                                    key={`${game.id}-${word}`}
                                    variant="outline"
                                    className="border-romantic-pink text-white hover:bg-romantic-pink/30 bg-romantic-purple/20"
                                    onClick={() =>
                                      handleWordSearchClick(game.id, word)
                                    }
                                    disabled={(
                                      wordSearchFound[game.id] || []
                                    ).includes(word)}
                                  >
                                    {word}
                                  </Button>
                                ))}
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {scores[game.id] || 0} /{" "}
                                {(game.content[0] as { words: string[] })?.words
                                  .length || 0}
                              </p>
                            </div>
                          )}
                          {game.type === "ticTacToe" && (
                            <div className="text-center">
                              <div className="grid grid-cols-3 gap-1 mb-4">
                                {ticTacToeBoard[game.id]
                                  ?.flat()
                                  .map((cell, idx) => (
                                    <div
                                      key={`${game.id}-${idx}`}
                                      className="border-romantic-pink/30 border p-4 text-white text-2xl cursor-pointer bg-romantic-purple/20"
                                      onClick={() =>
                                        handleTicTacToeClick(
                                          game.id,
                                          Math.floor(idx / 3),
                                          idx % 3
                                        )
                                      }
                                    >
                                      {cell === "X" ? (
                                        <Heart fill="romantic-pink" size={32} />
                                      ) : cell === "O" ? (
                                        <X
                                          className="text-romantic-purple"
                                          size={32}
                                        />
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  ))}
                              </div>
                              {ticTacToeWinner[game.id] && (
                                <p className="text-white text-lg mb-6">
                                  {ticTacToeWinner[game.id] === "Draw"
                                    ? "It's a Draw!"
                                    : ticTacToeWinner[game.id] === "X"
                                    ? "You win!"
                                    : "AI wins!"}{" "}
                                  💕
                                </p>
                              )}
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {scores[game.id] || 0}
                              </p>
                              <ForwardedRomanticButton
                                onClick={() => handleSelectGame(game)}
                                className="bg-romantic-pink hover:bg-romantic-purple text-white mt-4"
                              >
                                New Game
                              </ForwardedRomanticButton>
                            </div>
                          )}
                          {game.type === "dinoRun" && (
                            <div className="text-center">
                              <div className="relative h-32 w-full bg-romantic-dark/50 rounded-lg mb-4 overflow-hidden">
                                <div
                                  style={{
                                    position: "absolute",
                                    bottom: dinoPosition[game.id] || 0,
                                    left: 20,
                                    width: 20,
                                    height: 20,
                                  }}
                                >
                                  <Heart fill="romantic-pink" size={20} />
                                </div>
                                {(obstacles[game.id] || []).map((x, i) => (
                                  <div
                                    key={`${game.id}-${i}`}
                                    style={{
                                      position: "absolute",
                                      bottom: 0,
                                      left: x,
                                      width: 20,
                                      height: 20,
                                    }}
                                  >
                                    <X
                                      size={20}
                                      className="text-romantic-purple"
                                    />
                                  </div>
                                ))}
                              </div>
                              <Button
                                variant="outline"
                                className="border-romantic-pink text-white hover:bg-romantic-pink/30 bg-romantic-purple/20"
                                onClick={() => handleDinoJump(game.id)}
                              >
                                Jump <ArrowUp className="ml-2" />
                              </Button>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {Math.floor(dinoScore[game.id] || 0)}
                              </p>
                              {gameOver[game.id] && (
                                <ForwardedRomanticButton
                                  onClick={() => handleSelectGame(game)}
                                  className="bg-romantic-pink hover:bg-romantic-purple text-white mt-4"
                                >
                                  Play Again
                                </ForwardedRomanticButton>
                              )}
                            </div>
                          )}
                          {game.type === "snake" && (
                            <div className="text-center">
                              <div className="grid grid-cols-20 gap-0 mb-4 bg-romantic-dark/50 rounded-lg">
                                {Array.from({ length: 20 * 20 }).map(
                                  (_, idx) => {
                                    const x = idx % 20;
                                    const y = Math.floor(idx / 20);
                                    let color = "bg-romantic-purple/20";
                                    if (
                                      snake[game.id]?.some(
                                        (p) => p.x === x && p.y === y
                                      )
                                    )
                                      color = "bg-romantic-pink";
                                    if (
                                      food[game.id]?.x === x &&
                                      food[game.id]?.y === y
                                    )
                                      color = "bg-romantic-gold";
                                    return (
                                      <div
                                        key={`${game.id}-${idx}`}
                                        className={`${color} w-4 h-4 border border-romantic-purple/30`}
                                      ></div>
                                    );
                                  }
                                )}
                              </div>
                              <div className="flex justify-center gap-4">
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleSnakeDirection(game.id, {
                                      x: 0,
                                      y: -1,
                                    })
                                  }
                                >
                                  Up
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleSnakeDirection(game.id, {
                                      x: -1,
                                      y: 0,
                                    })
                                  }
                                >
                                  Left
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleSnakeDirection(game.id, {
                                      x: 1,
                                      y: 0,
                                    })
                                  }
                                >
                                  Right
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleSnakeDirection(game.id, {
                                      x: 0,
                                      y: 1,
                                    })
                                  }
                                >
                                  Down
                                </Button>
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {snakeScore[game.id] || 0}
                              </p>
                              {snakeGameOver[game.id] && (
                                <ForwardedRomanticButton
                                  onClick={() => handleSelectGame(game)}
                                  className="bg-romantic-pink hover:bg-romantic-purple text-white mt-4"
                                >
                                  Play Again
                                </ForwardedRomanticButton>
                              )}
                            </div>
                          )}
                          {game.type === "simonSays" && (
                            <div className="text-center">
                              <p className="text-white text-lg mb-6">
                                Repeat the sequence!
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                {(game.content as string[]).map(
                                  (color, idx) => (
                                    <Button
                                      key={`${game.id}-${idx}`}
                                      className={`bg-${color}-500 hover:bg-${color}-600 text-white ${
                                        currentFlash[game.id] === color
                                          ? "scale-110 brightness-150"
                                          : ""
                                      } transition-transform`}
                                      onClick={() =>
                                        handleSimonClick(game.id, color)
                                      }
                                    >
                                      {color.charAt(0).toUpperCase() +
                                        color.slice(1)}
                                    </Button>
                                  )
                                )}
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Level: {simonLevel[game.id] || 1}
                              </p>
                            </div>
                          )}
                          {game.type === "flappyBird" && (
                            <div className="text-center">
                              <div className="relative h-64 w-full bg-romantic-dark/50 rounded-lg mb-4 overflow-hidden">
                                <div
                                  style={{
                                    position: "absolute",
                                    top: flappyPosition[game.id] || 100,
                                    left: 20,
                                  }}
                                >
                                  <Heart fill="romantic-pink" size={20} />
                                </div>
                                {(pipes[game.id] || []).map((pipe, i) => (
                                  <div key={`${game.id}-${i}`}>
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: pipe.x,
                                        height: pipe.height,
                                        width: 50,
                                        backgroundColor: "rgb(168, 85, 247)", // romantic-purple
                                      }}
                                    />
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: pipe.height + 80,
                                        left: pipe.x,
                                        height: 200 - pipe.height - 80,
                                        width: 50,
                                        backgroundColor: "rgb(168, 85, 247)",
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>
                              <Button
                                variant="outline"
                                className="border-romantic-pink text-white hover:bg-romantic-pink/30 bg-romantic-purple/20"
                                onClick={() => handleFlappyFlap(game.id)}
                              >
                                Flap <ArrowUp className="ml-2" />
                              </Button>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {Math.floor(flappyScore[game.id] || 0)}
                              </p>
                              {flappyGameOver[game.id] && (
                                <ForwardedRomanticButton
                                  onClick={() => handleSelectGame(game)}
                                  className="bg-romantic-pink hover:bg-romantic-purple text-white mt-4"
                                >
                                  Play Again
                                </ForwardedRomanticButton>
                              )}
                            </div>
                          )}
                          {game.type === "puzzle" && (
                            <div className="text-center">
                              <div className="grid grid-cols-3 gap-1 mb-4">
                                {(puzzleTiles[game.id] || []).map(
                                  (tile, idx) => (
                                    <div
                                      key={`${game.id}-${idx}`}
                                      className={`border-romantic-pink/30 border p-2 cursor-pointer bg-romantic-purple/20 ${
                                        tile === 8 ? "invisible" : ""
                                      }`}
                                      onClick={() =>
                                        handlePuzzleClick(game.id, idx)
                                      }
                                    >
                                      {tile !== 8 && (
                                        <img
                                          src={
                                            (
                                              game.content[0] as {
                                                image: string;
                                              }
                                            ).image
                                          }
                                          alt="Puzzle piece"
                                          className="w-full h-20 object-cover"
                                          style={{
                                            objectPosition: `${
                                              -(tile % 3) * 33.33
                                            }% ${
                                              -Math.floor(tile / 3) * 33.33
                                            }%`,
                                          }}
                                        />
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {scores[game.id] || 0}
                              </p>
                              <ForwardedRomanticButton
                                onClick={() => handleSelectGame(game)}
                                className="bg-romantic-pink hover:bg-romantic-purple text-white mt-4"
                              >
                                New Puzzle
                              </ForwardedRomanticButton>
                            </div>
                          )}
                          {game.type === "maze" && (
                            <div className="text-center">
                              <div className="grid grid-cols-5 gap-0 mb-4 bg-romantic-dark/50 rounded-lg">
                                {(game.content[0] as { grid: string[][] })?.grid
                                  ?.flat()
                                  .map((cell, idx) => {
                                    const x = idx % 5;
                                    const y = Math.floor(idx / 5);
                                    let color =
                                      cell === "W"
                                        ? "bg-romantic-purple"
                                        : "bg-romantic-pink/20";
                                    if (
                                      mazePosition[game.id]?.x === x &&
                                      mazePosition[game.id]?.y === y
                                    )
                                      color = "bg-romantic-gold";
                                    if (cell === "S")
                                      color = "bg-romantic-pink/50";
                                    if (cell === "E")
                                      color = "bg-romantic-pink";
                                    return (
                                      <div
                                        key={`${game.id}-${idx}`}
                                        className={`${color} w-8 h-8 border border-romantic-purple/30`}
                                      ></div>
                                    );
                                  })}
                              </div>
                              <div className="flex justify-center gap-4">
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleMazeMove(game.id, { x: 0, y: -1 })
                                  }
                                >
                                  Up
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleMazeMove(game.id, { x: -1, y: 0 })
                                  }
                                >
                                  Left
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleMazeMove(game.id, { x: 1, y: 0 })
                                  }
                                >
                                  Right
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() =>
                                    handleMazeMove(game.id, { x: 0, y: 1 })
                                  }
                                >
                                  Down
                                </Button>
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {mazeScore[game.id] || 0}
                              </p>
                            </div>
                          )}
                          {game.type === "heartCatcher" && (
                            <div className="text-center">
                              <div className="relative h-64 w-full bg-romantic-dark/50 rounded-lg mb-4 overflow-hidden">
                                <div
                                  style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: catcherPosition[game.id] || 150,
                                    width: 40,
                                    height: 20,
                                  }}
                                  className="bg-romantic-gold rounded-t"
                                />
                                {(hearts[game.id] || []).map((heart, i) => (
                                  <div
                                    key={`${game.id}-${i}`}
                                    style={{
                                      position: "absolute",
                                      top: heart.y,
                                      left: heart.x,
                                    }}
                                  >
                                    <Heart fill="romantic-pink" size={20} />
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-center gap-4">
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() => handleCatcherMove(game.id, -1)}
                                >
                                  Left
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() => handleCatcherMove(game.id, 1)}
                                >
                                  Right
                                </Button>
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {catcherScore[game.id] || 0}
                              </p>
                            </div>
                          )}
                          {game.type === "cupidsArrow" && (
                            <div className="text-center">
                              <div className="relative h-64 w-full bg-romantic-dark/50 rounded-lg mb-4 overflow-hidden">
                                <div
                                  style={{
                                    position: "absolute",
                                    top: arrowPosition[game.id]?.y || 100,
                                    left: arrowPosition[game.id]?.x || 50,
                                  }}
                                >
                                  <ArrowUp
                                    className="text-romantic-gold"
                                    size={20}
                                  />
                                </div>
                                {(targets[game.id] || []).map((target, i) => (
                                  <div
                                    key={`${game.id}-${i}`}
                                    style={{
                                      position: "absolute",
                                      top: target.y,
                                      left: target.x,
                                    }}
                                  >
                                    <Heart fill="romantic-pink" size={20} />
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-center gap-4">
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() => handleArrowMove(game.id, -1)}
                                >
                                  Up
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() => handleArrowShoot(game.id)}
                                >
                                  Shoot
                                </Button>
                                <Button
                                  className="bg-romantic-pink text-white hover:bg-romantic-purple"
                                  onClick={() => handleArrowMove(game.id, 1)}
                                >
                                  Down
                                </Button>
                              </div>
                              <p className="text-romantic-pink text-sm mt-4">
                                Score: {arrowScore[game.id] || 0}
                              </p>
                              {arrowGameOver[game.id] && (
                                <ForwardedRomanticButton
                                  onClick={() => handleSelectGame(game)}
                                  className="bg-romantic-pink hover:bg-romantic-purple text-white mt-4"
                                >
                                  Play Again
                                </ForwardedRomanticButton>
                              )}
                            </div>
                          )}
                          {game.content.length > 1 &&
                            ![
                              "dare",
                              "match",
                              "hangman",
                              "wordSearch",
                              "ticTacToe",
                              "dinoRun",
                              "snake",
                              "simonSays",
                              "flappyBird",
                              "puzzle",
                              "maze",
                              "heartCatcher",
                              "cupidsArrow",
                            ].includes(game.type) && (
                              <div className="flex justify-between mt-6">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="bg-romantic-purple/50 hover:bg-romantic-purple/70 text-white rounded-full w-12 h-12"
                                  onClick={() =>
                                    handlePrevContent(
                                      game.id,
                                      game.content.length
                                    )
                                  }
                                  data-testid={`button-prev-content-${game.id}`}
                                >
                                  <ChevronLeft className="h-7 w-7" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="bg-romantic-purple/50 hover:bg-romantic-purple/70 text-white rounded-full w-12 h-12"
                                  onClick={() =>
                                    handleNextContent(
                                      game.id,
                                      game.content.length
                                    )
                                  }
                                  data-testid={`button-next-content-${game.id}`}
                                >
                                  <ChevronRight className="h-7 w-7" />
                                </Button>
                              </div>
                            )}
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
