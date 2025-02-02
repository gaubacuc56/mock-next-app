// app/products/ProductDetail.tsx (Client Component)
"use client";
import { useState } from "react";

export default function AddToCart({ productId }: { productId: string }) {
    const [loading, setLoading] = useState(false);

    const addToCart = async () => {
        setLoading(true);

        await fetch('https://dummyjson.com/carts/add', {
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                products: [
                    {
                        id: productId,
                        quantity: 4,
                    }
                ]
            }),
            headers: { "Content-Type": "application/json" },
        });
        setLoading(false);
        alert("Product added to cart!");
    };

    return (
        <button onClick={addToCart} disabled={loading}>
            {loading ? "Adding..." : "Add to Cart"}
        </button>
    );
}
