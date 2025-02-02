import Link from "next/link";

export default async function Product() {
  const response = await fetch('https://dummyjson.com/products');
  console.log("response", response);

  const data = await response.json();
  const products = data.products;

  return (
    <div>
      <h1>Products</h1>
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