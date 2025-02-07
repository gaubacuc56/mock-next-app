/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
export const metadata: Metadata = {
  title: "Shop Products - Best Deals | My Store",
  description: "Discover the best products at amazing prices. Browse our latest collection now!",
  openGraph: {
    title: "Shop Products - Best Deals | My Store",
    description: "Discover the best products at amazing prices. Browse our latest collection now!",
    type: "website",
    url: "https://mystore.com/products",
    images: [
      {
        url: "https://mystore.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Store - Best Deals",
      },
    ],
  },
};
export default async function Page() {
  const t = await getTranslations('APP');
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const products = data.products;

  return (
    <div>
      <h1>{t('PRODUCT_TITLE')}</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/dashboard/product/${product.id}`}>{product.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}