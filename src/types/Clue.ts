export interface Clue {
  title: string;
  description: string;
  location: string;
  image: string;
  requires?: string;
  requiresMiniGame?: "anagram" | "lock" | "spotlight" | "findTheItem" | "code";
  fakeClue?: boolean;
}
