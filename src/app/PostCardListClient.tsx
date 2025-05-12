"use client"

import { useEffect, useState } from "react";
import PostCard, { PostResponse } from "./PostCard";

export default function PostCardListClient() {
    
  const [loading, setLoading] = useState<boolean>(false)
  const [posts, setPosts] = useState<PostResponse[]>([]);

  useEffect(() => {
    // Define function to load data
    async function loadPosts() {
      setLoading(true)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setPosts(json)
      setLoading(false)
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
        <h1>Loading Data...</h1>
    )
  }

  if (!loading) {
    return (
        <div className="grid grid-cols-4 gap-5">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      );
  }
}
