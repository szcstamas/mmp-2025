export interface Clue {
  title: string;
  description: string;
  location: string;
  image: string;
  requires?: string;
  requiresMiniGame?: "lock" | "spotlight" | "findTheItem";
}
