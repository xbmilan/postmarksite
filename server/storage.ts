import type { InsertWaitlistSignup, WaitlistSignup } from '../src/schema.js';

/**
 * Storage interface for waitlist operations
 */
export interface IStorage {
  createWaitlistSignup(signup: InsertWaitlistSignup): Promise<WaitlistSignup>;
  getWaitlistSignupByEmail(email: string): Promise<WaitlistSignup | undefined>;
  getWaitlistCount(): Promise<number>;
}

/**
 * In-memory storage implementation for development
 * Note: This is temporary and should be replaced with Drizzle ORM for production
 */
class MemStorage implements IStorage {
  private signups: WaitlistSignup[] = [];

  async createWaitlistSignup(
    signup: InsertWaitlistSignup
  ): Promise<WaitlistSignup> {
    // Check for duplicate email
    const existing = await this.getWaitlistSignupByEmail(signup.email);
    if (existing) {
      throw new Error('Email already exists');
    }

    const newSignup: WaitlistSignup = {
      id: crypto.randomUUID(),
      ...signup,
      createdAt: new Date(),
    };

    this.signups.push(newSignup);
    return newSignup;
  }

  async getWaitlistSignupByEmail(
    email: string
  ): Promise<WaitlistSignup | undefined> {
    return this.signups.find((signup) => signup.email === email);
  }

  async getWaitlistCount(): Promise<number> {
    return this.signups.length;
  }
}

// Singleton instance for development
export const storage: IStorage = new MemStorage();
