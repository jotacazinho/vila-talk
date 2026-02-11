export type UserRole = "torcedor" | "jornalista" | "rival";

const ROLE_KEY = "vila_talk_role";
const RIVAL_FLAG = "vila_talk_was_rival";

export function getUserRole(): UserRole | null {
  return localStorage.getItem(ROLE_KEY) as UserRole | null;
}

export function wasEverRival(): boolean {
  return localStorage.getItem(RIVAL_FLAG) === "true";
}

export function setUserRole(role: UserRole): void {
  if (role === "rival") {
    localStorage.setItem(RIVAL_FLAG, "true");
  }
  localStorage.setItem(ROLE_KEY, role);
}

export function canPost(role: UserRole | null): boolean {
  if (!role) return false;
  if (wasEverRival()) return false;
  if (role === "rival") return false;
  return true;
}
