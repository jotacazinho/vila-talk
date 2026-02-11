const adjectives = [
  "Alvinegro", "Praiano", "Santista", "Guerreiro", "Fanático",
  "Bravo", "Fiel", "Raçudo", "Imortal", "Glorioso",
  "Peixeiro", "Lendário", "Veloz", "Sagrado",
  "Torcedor", "Radical", "Apaixonado", "Incansável", "Destemido",
];

const nouns = [
  "Peixe", "Vila", "Menino", "Rei", "Craque",
  "Gol", "Torcida", "Santos", "Mestre", "Ídolo",
  "Camisa10", "Baixada", "Pelé", "Neymar", "Robinho",
  "Coutinho", "Gabigol", "Aranha", "Dorval", "Pepe",
];

export function generateAnonymousName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 99) + 1;
  return `${adj}${noun}${num}`;
}

export function generateAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 40) + 180; // blue range
  return `hsl(${hue}, 60%, 55%)`;
}
