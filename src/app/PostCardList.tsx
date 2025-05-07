import PostCard, { PostResponse } from "./PostCard";

async function loadPosts(): Promise<PostResponse[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    return json
}

export default async function PostCardList() {

    const posts = await loadPosts()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                posts.map(post => (
                    <PostCard 
                        key={post.id}
                        id={post.id}
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                    />
                ))
            }
        </div>
    )
}