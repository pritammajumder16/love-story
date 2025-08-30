import { Switch, Route, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { FloatingHearts } from "@/components/floating-hearts";
import Home from "@/pages/home";
import Diary from "@/pages/diary";
import Memories from "@/pages/memories";
import NotFound from "@/pages/not-found";
import Footer from "./pages/footer";
import LoveGame from "./pages/loveGames";
import Activities from "./pages/activities";
import InstallPWA from "./pages/pwaInstallation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diary" component={Diary} />
      <Route path="/memories" component={Memories} />
      <Route path="/games" component={LoveGame} />
      <Route path="/activities" component={Activities} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Simple Password Screen
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "416416") {
      localStorage.setItem("unlocked", "true");
      onUnlock();
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-2xl shadow-lg bg-card flex flex-col gap-4 w-80"
      >
        <h1 className="text-xl font-semibold text-center">Enter Password</h1>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter password"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-lg py-2 hover:opacity-90"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

function App() {
  const [location] = useLocation();
  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("unlocked") === "true";
  });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!authenticated) {
    return <PasswordGate onUnlock={() => setAuthenticated(true)} />;
  }

  return (
    <TooltipProvider>
      <div className="overflow-y-hidden min-h-screen overflow-x-hidden bg-background text-foreground">
        <FloatingHearts />
        <Navigation />
        <Toaster />
        <Router />
        <Footer /> <InstallPWA />
      </div>
    </TooltipProvider>
  );
}

export default App;
