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
    <ul className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-">
      {products.map((p: any) => (
        <li key={p.path} className="flex">
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
      className="block flex flex-col justify-between"
    >
      <Image
        {...product.defaultVariant.firstImage}
        className="block w-full"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
      />
      <h2 className="text-lg text-center mt-2">{product.name}</h2>
    </Link>
  );
}
