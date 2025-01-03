Queries!

```
import { db } from "../utils/db";
import { users } from "../schemas/users";

export const getAllUsers = async () => {
  return db.select().from(users);
};

export const getUserById = async (id: number) => {
  return db.select().from(users).where(users.id.eq(id));
};

export const createUser = async (name: string, email: string, password: string) => {
  return db.insert(users).values({ name, email, password });
};


import { db } from "../utils/db";
import { posts } from "../schemas/posts";

export const getAllPosts = async () => {
  return db.select().from(posts);
};

export const createPost = async (title: string, content: string, userId: number) => {
  return db.insert(posts).values({ title, content, userId });
};

```