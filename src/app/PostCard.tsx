export type PostResponse = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export default function PostCard({
    id = 0,
    userId = 0,
    title = "default",
    body = "default"
}: PostResponse) {
    return (
        <a href="#" className="my-5 block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
            <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div className="sm:order-last sm:shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="size-16 rounded-full object-cover sm:size-[72px]"
                    />
                </div>

                <div className="mt-4 sm:mt-0">
                    <h3 className="text-lg font-medium text-pretty text-gray-900">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">UserID: {id} | {userId}</p>

                    <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                        {body}
                    </p>
                </div>
            </div>
        </a>
    )
}