// src/routes/[slug]/+page.server.ts
import { LoadBlogPost } from '$lib/server/blog.js';

export async function load({ params }) {
  const { slug } = params;
  const post = LoadBlogPost(slug)
  return post
}