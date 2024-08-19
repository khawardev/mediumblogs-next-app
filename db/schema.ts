import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { AdapterAccount } from "next-auth/adapters";
import crypto from "crypto";
import { relations, sql } from "drizzle-orm";

export const user = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const account = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const session = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationToken = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  })
);

export const userRelations = relations(user, ({ many }) => ({
  stories: many(story), // A user can have many stories
  comment: many(comment), // A user can have many comment
  reply: many(reply), // A user can have many replys to comments
  clap: many(clap),
  save: many(save),
}));

// story
export const story = pgTable("story", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  content: text("content"),
  topics: text("topics")
    .array()
    .default(sql`'{}'::text[]`),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  publish: boolean("publish").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const storyRelations = relations(story, ({ one, many }) => ({
  auther: one(user, {
    fields: [story.userId],
    references: [user.id],
  }),
  comment: many(comment), // A story can have multiple comments
  clap: many(clap), // A story can have multiple claps
  save: many(save),
}));

// comments
export const comment = pgTable("comment", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  content: text("content").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  storyId: text("storyId")
    .notNull()
    .references(() => story.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const commentRelations = relations(comment, ({ one, many }) => ({
  auther: one(user, {
    fields: [comment.userId],
    references: [user.id],
  }),
  story: one(story, {
    fields: [comment.storyId],
    references: [story.id],
  }),
  // comment: many(comment), // A comment can have multiple comments
  reply: many(reply), // A comment can have multiple replys
  clap: many(clap), // A comment can have multiple claps
}));

// reply
export const reply = pgTable("reply", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  content: text("content").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  commentId: text("commentId")
    .notNull()
    .references(() => comment.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const replyRelations = relations(reply, ({ one, many }) => ({
  auther: one(user, {
    fields: [reply.userId],
    references: [user.id],
  }),
  comment: one(comment, {
    fields: [reply.commentId],
    references: [comment.id],
  }),
  clap: many(clap),
}));

// clap
export const clap = pgTable("clap", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  // content: text("content"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  commentId: text("commentId").references(() => comment.id, {
    onDelete: "cascade",
  }),
  replyId: text("replyId").references(() => reply.id, {
    onDelete: "cascade",
  }),
  storyId: text("storyId")
    .notNull()
    .references(() => story.id, { onDelete: "cascade" }),
  clapCount: integer("clapCount").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const clapRelations = relations(clap, ({ one, many }) => ({
  auther: one(user, {
    fields: [clap.userId],
    references: [user.id],
  }),
  comment: one(comment, {
    fields: [clap.commentId],
    references: [comment.id],
  }),
  reply: one(reply, {
    fields: [clap.replyId],
    references: [reply.id],
  }),
  story: one(story, {
    fields: [clap.storyId],
    references: [story.id],
  }),
  // comment: many(comment),
}));

//save
export const save = pgTable("save", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  storyId: text("storyId")
    .notNull()
    .references(() => story.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const saveRelations = relations(save, ({ one, many }) => ({
  auther: one(user, {
    fields: [save.userId],
    references: [user.id],
  }),
  story: one(story, {
    fields: [save.storyId],
    references: [story.id],
  }),
  // comment: many(comment),
}));

// topics
export const topics = pgTable("topics", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  topics: text("topics")
    .array()
    .default(sql`'{}'::text[]`),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
