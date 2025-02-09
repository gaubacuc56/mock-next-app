import AddToCart from "../AddToCart";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id

    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    return (
        <div>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <AddToCart productId={product.id} />
        </div>
    );
}