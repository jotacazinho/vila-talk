import { generateAnonymousName } from "./anonymousNames";

export interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  liked: boolean;
}

const contents = [
  "O Santos é o maior time do mundo e não aceito discussão! 🐟⚫⚪",
  "Saudades da Vila Belmiro lotada num clássico... a energia é inexplicável!",
  "Alguém mais acha que o time tá jogando bem esse ano? Confiança total na molecada!",
  "Pelé eterno rei. Nenhum clube no mundo tem uma história como a nossa. 👑",
  "Dia de jogo é sagrado. Quem vai na Vila hoje? ⚽",
  "A torcida do Santos é a mais fiel do Brasil. Na série A ou B, sempre lotando.",
  "Neymar deveria ter ficado mais tempo no Santos... imagina o que teria sido",
  "Quem lembra daquele gol do Gabigol contra o Palmeiras? Arrepiou a Vila inteira!",
  "Santos FC não é só futebol, é uma religião. Quem entende, entende. 🙏",
  "Baixada Santista representando! Orgulho de ser santista desde criança ⚫⚪",
  "O meninos da Vila são o futuro do futebol brasileiro. Formação de elite!",
  "Hoje é dia de Santos jogar e meu coração já tá acelerado 🫀⚽",
  "Vamos voltar aos tempos de glória! O Peixe merece estar no topo!",
  "A camisa do Santos é a mais bonita do futebol mundial. Simples e elegante.",
  "Bora Santos! Pra cima deles, sem medo! 💪🐟",
];

export function generateMockPosts(count: number = 15): Post[] {
  return contents.slice(0, count).map((content, i) => ({
    id: `post-${i}`,
    author: generateAnonymousName(),
    content,
    timestamp: new Date(Date.now() - Math.random() * 86400000 * 3),
    likes: Math.floor(Math.random() * 200),
    comments: Math.floor(Math.random() * 40),
    liked: Math.random() > 0.7,
  }));
}

export const trendingTopics = [
  { tag: "#SantosFC", posts: 2340 },
  { tag: "#VilaBelmiro", posts: 1822 },
  { tag: "#PeixeÉNóis", posts: 1503 },
  { tag: "#MeninosDaVila", posts: 1201 },
  { tag: "#AlvinegroPraiano", posts: 987 },
  { tag: "#ReiPelé", posts: 876 },
  { tag: "#BaixadaSantista", posts: 654 },
];
