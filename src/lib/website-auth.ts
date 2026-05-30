import { createHmac, pbkdf2Sync, randomBytes, timingSafeEqual } from "node:crypto";

const iterations = 120000;

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string) {
  const [salt, originalHash] = storedHash.split(":");
  if (!salt || !originalHash) return false;
  const hash = pbkdf2Sync(password, salt, iterations, 32, "sha256");
  const original = Buffer.from(originalHash, "hex");
  return original.length === hash.length && timingSafeEqual(original, hash);
}

export function createWebsiteSession(userId: string) {
  const secret = process.env.NEXTAUTH_SECRET ?? "local-development-secret";
  const signature = createHmac("sha256", secret).update(userId).digest("hex");
  return `${userId}.${signature}`;
}
