"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useAuthStore } from "@/store/hooks/useAuthStore";

export default function AddToCart({ productId }: { productId: string }) {
    const [loading, setLoading] = useState(false);
    const t = useTranslations('APP');
    const { items, addItem, removeItem } = useAuthStore();
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
        <>
            <button onClick={addToCart} disabled={loading}>
                {loading ? "Adding..." : t("ADD_TO_CART")}
            </button>
            <div className="flex gap-3">
                <button onClick={() => removeItem()}>-</button>
                <h3>{items.length}</h3>
                <button onClick={() => addItem(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))}>+</button>

            </div>
        </>
    );
}
