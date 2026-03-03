"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { DrawerState } from "@/lib/types";

interface DrawerContextType {
  drawer: DrawerState;
  openDrawer: (opts?: { industry?: string; source?: string }) => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [drawer, setDrawer] = useState<DrawerState>({ isOpen: false });

  const openDrawer = useCallback(
    (opts?: { industry?: string; source?: string }) => {
      setDrawer({
        isOpen: true,
        industry: opts?.industry,
        source: opts?.source,
      });
    },
    []
  );

  const closeDrawer = useCallback(() => {
    setDrawer({ isOpen: false });
  }, []);

  return (
    <DrawerContext.Provider value={{ drawer, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used within DrawerProvider");
  return ctx;
}
