type ProductResponse = {
    title: string;
    description: string;
}

export default function ProductCard({
    title = "Default Title",
    description = "Default Description"
}: ProductResponse) {
    return (
        <div className="p-10 border border-amber-600">
            <h2>{title}</h2>
            <hr />
            <p>{description}</p>
        </div>
    )
}