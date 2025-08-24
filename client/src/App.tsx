import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { FloatingHearts } from "@/components/floating-hearts";
import Home from "@/pages/home";
import Diary from "@/pages/diary";
import Memories from "@/pages/memories";
import NotFound from "@/pages/not-found";
import Footer from "./pages/footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diary" component={Diary} />
      <Route path="/memories" component={Memories} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <TooltipProvider>
      <div className="overflow-y-hidden min-h-screen overflow-x-hidden bg-background text-foreground">
        <FloatingHearts />
        <Navigation />
        <Toaster />
        <Router />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
