import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import IndustryReport from "./pages/IndustryReport";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/industries"} component={Industries} />
      <Route path={"/industries/:slug"} component={IndustryReport} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Fix for Framer Motion animations freezing in background tabs.
 * Browsers pause requestAnimationFrame for hidden tabs, causing
 * Framer Motion's animation loop to freeze at opacity:0.
 *
 * Two strategies:
 * 1. visibilitychange listener: When tab becomes visible, force stuck animations.
 * 2. Timeout fallback: After 3s, if above-the-fold elements are still invisible,
 *    force them visible (handles edge cases like slow tab activation).
 */
function useBackgroundTabAnimationFix() {
  useEffect(() => {
    const forceUnstick = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const stuck = document.querySelectorAll<HTMLElement>('[style*="opacity"]');
          stuck.forEach((el) => {
            if (el.style.opacity === "0") {
              el.style.transition =
                "opacity 0.6s ease-out, transform 0.6s ease-out";
              el.style.opacity = "1";
              el.style.transform = "none";
            }
          });
        });
      });
    };

    // Strategy 1: Listen for tab becoming visible
    const onVisible = () => {
      if (document.hidden) return;
      document.removeEventListener("visibilitychange", onVisible);
      forceUnstick();
    };

    if (document.hidden) {
      document.addEventListener("visibilitychange", onVisible);
    }

    // Strategy 2: Timeout fallback — if after 3s the page still looks blank
    const timeout = setTimeout(() => {
      const hero = document.querySelector("section");
      if (!hero) return;
      const stuckElements = hero.querySelectorAll<HTMLElement>('[style*="opacity"]');
      const hasStuck = Array.from(stuckElements).some(
        (el) => el.style.opacity === "0"
      );
      if (hasStuck) forceUnstick();
    }, 3000);

    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      clearTimeout(timeout);
    };
  }, []);
}

function App() {
  useBackgroundTabAnimationFix();

  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
