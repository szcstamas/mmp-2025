import { useState, useEffect } from "react";
import type { Clue } from "../types/Clue";

const STORAGE_KEY = "bag_items";

export function useBag() {
  const [bag, setBag] = useState<Clue[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bag));
  }, [bag]);

  const addItem = (item: Clue) => {
    if (!item) return;
    if (!bag.some((i) => i.title === item.title)) {
      setBag((prev) => [...prev, item]);
    }
  };

  const removeItem = (title: string) => {
    setBag((prev) => prev.filter((i) => i.title !== title));
  };

  const hasItem = (title: string) => bag.some((i) => i.title === title);

  return { bag, addItem, removeItem, hasItem };
}
