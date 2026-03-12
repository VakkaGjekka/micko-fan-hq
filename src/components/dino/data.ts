import { Crown, Users, Laugh, Heart } from "lucide-react";

export const reasons = [
  { icon: Crown, title: "Swedish Royalty Energy", emoji: "👑", color: "bg-[hsl(var(--dino-gold))]/10 text-[hsl(var(--dino-blue))]" },
  { icon: Users, title: "Life of the Party", emoji: "🎉", color: "bg-[hsl(var(--dino-ice))]/30 text-[hsl(var(--dino-blue))]" },
  { icon: Laugh, title: "Effortlessly Hilarious", emoji: "😂", color: "bg-[hsl(var(--dino-gold))]/20 text-[hsl(var(--dino-navy))]" },
  { icon: Heart, title: "Heart of Gold", emoji: "💛", color: "bg-[hsl(var(--dino-ice))]/20 text-[hsl(var(--dino-blue))]" },
];

export const quotes = [
  { text: "I'm not Swedish for nothing.", emoji: "🇸🇪" },
  { text: "Papi doesn't chase, papi attracts.", emoji: "🧲" },
  { text: "They call me Swedish Papi for a reason.", emoji: "😏" },
  { text: "Cold weather, hot vibes.", emoji: "❄️" },
  { text: "Scandinavian by birth, legend by choice.", emoji: "🏔️" },
  { text: "I don't need IKEA instructions to build greatness.", emoji: "🔨" },
];

export const testimonials = [
  { name: "Filip", text: "Dino is the kind of guy who walks in and the temperature drops because he's that cool.", stars: 5 },
  { name: "Micko", text: "Swedish Papi is the real deal. Even I'm a fan.", stars: 5 },
  { name: "Kristi", text: "Dino has that Scandinavian charm that's impossible to resist.", stars: 5 },
  { name: "Arslan", text: "Bro got the Swedish rizz on another level fr fr.", stars: 5 },
  { name: "Ervan", text: "Dino walked in and everyone forgot their name.", stars: 5 },
  { name: "ABBA", text: "He's our dancing queen. Well, king.", stars: 5 },
];

export const STORAGE_KEY = "dino-fan-messages";
