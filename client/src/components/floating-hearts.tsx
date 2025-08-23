import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  left: number;
  animationDelay: number;
  size: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const heartCount = 8;
    const newHearts: FloatingHeart[] = [];

    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        size: Math.random() * 8 + 16, // 16-24px
      });
    }

    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-romantic-pink/30 animate-float"
          style={{
            left: `${heart.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${heart.animationDelay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
}
