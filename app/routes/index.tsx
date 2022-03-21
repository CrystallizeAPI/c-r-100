import { json, Link, LinksFunction, useLoaderData } from "remix";

import styles from "../styles/products.css";

function removeShopFromPath(item: any) {
  return {
    ...item,
    path: item.path.replace(/^\/shop/, ""),
  };
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export async function loader() {
  const res = await fetch("https://api.crystallize.com/dounot/catalogue", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          catalogue(path: "/shop") {
            children {
              path
              name
              ... on Product {
                defaultVariant {
                  price
                  firstImage {
                    url
                    altText
                    variants {
                      width
                      height
                      size
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });
  return json(
    await res
      .json()
      .then((c) => c.data.catalogue.children.map(removeShopFromPath))
  );
}

export default function Index() {
  const products = useLoaderData();

  return (
    <ul className="products">
      {products.map((p: any) => (
        <li key={p.path}>
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <Link prefetch="intent" to={product.path} className="product_card">
      {product.path}
    </Link>
  );
}
