import { Image } from "@crystallize/react-image";
import { json, Link, useLoaderData } from "remix";

function removeShopFromPath(item: any) {
  return {
    ...item,
    path: item.path.replace(/^\/shop/, ""),
  };
}

export async function loader() {
  // Get some donuts
  const response = await fetch("https://api.crystallize.com/dounot/catalogue", {
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
    await response
      .json()
      .then((c) => c.data.catalogue.children.map(removeShopFromPath))
  );
}

export default function Index() {
  const products = useLoaderData();

  return (
    <ul className="products grid gap-3 grid-cols-3">
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
    <Link
      prefetch="intent"
      to={product.path}
      className="bg-white p-2 drop-shadow rounded block"
    >
      <Image {...product.defaultVariant.firstImage} />
      <h2 className="text-xl">{product.name}</h2>
    </Link>
  );
}
