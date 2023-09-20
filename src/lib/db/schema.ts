/** @format */

import { pgTable, serial, text, timestamp, varchar, integer, pgEnum } from "drizzle-orm/pg-core";

export const userSystemEnum = pgEnum("user_system_enum", ["system", "user"]);

export const chats = pgTable("chats", {
	id: serial("id").primaryKey(),
	docName: text("doc_name").notNull(),
	docUrl: text("doc_url").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	userId: varchar("user_id", { length: 256 }).notNull(),
	fileKey: text("file_key").notNull(),
});

export const message = pgTable("message", {
	id: serial("id").primaryKey(),
	chatId: integer("chat_id")
		.references(() => chats.id)
		.notNull(),
	content: text("content").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	role: userSystemEnum("role").notNull(),
});
