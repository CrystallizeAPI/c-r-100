import { Image } from "@crystallize/react-image";
import { json, Link, useLoaderData } from "remix";
import { Price } from "~/components/price";
import { useScreens } from "../hooks/tailwind";

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
    <main>
      <ul className="flex flex-row flex-wrap">
        {products.map((p: any) => (
          <li key={p.path} className="flex w-1/2 md:w-1/3">
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </main>
  );
}

function ProductCard({ product }: { product: any }) {
  const screens = useScreens();

  return (
    <Link
      prefetch="intent"
      to={product.path}
      className="block flex flex-col justify-between"
    >
      <Image
        {...product.defaultVariant.firstImage}
        className="block w-full"
        sizes={`(min-width: ${screens.md}) 33vw - calc(calc(100vw - ${screens.md}) / 3), 50vw`}
      />
      <div className="text-center">
        <h2 className="text-lg text-center mt-2">{product.name}</h2>
        <Price productVariant={product.defaultVariant} />
      </div>
    </Link>
  );
}
