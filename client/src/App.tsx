import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { FloatingHearts } from "@/components/floating-hearts";
import Home from "@/pages/home";
import Diary from "@/pages/diary";
import Memories from "@/pages/memories";
import NotFound from "@/pages/not-found";

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
  return (
    <TooltipProvider>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <FloatingHearts />
        <Navigation />
        <Toaster />
        <Router />
      </div>
    </TooltipProvider>
  );
}

export default App;
