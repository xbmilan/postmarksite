import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

/**
 * Waitlist signups table schema for PostgreSQL
 * Note: Uses PostgreSQL-specific gen_random_uuid() function
 */
export const waitlistSignups = pgTable('waitlist_signups', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Zod schemas for validation
export const insertWaitlistSignupSchema = createInsertSchema(waitlistSignups, {
  name: z.string().min(1, 'Name is required').trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .transform((email) => email.toLowerCase().trim()),
}).omit({
  id: true,
  createdAt: true,
});

export const selectWaitlistSignupSchema = createSelectSchema(waitlistSignups);

// TypeScript types
export type InsertWaitlistSignup = z.infer<typeof insertWaitlistSignupSchema>;
export type WaitlistSignup = z.infer<typeof selectWaitlistSignupSchema>;
