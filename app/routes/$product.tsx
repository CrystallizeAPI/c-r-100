import { Image } from "@crystallize/react-image";
import { json, useLoaderData } from "remix";
import { Price } from "~/components/price";

function removeShopFromPath(item: any) {
  return {
    ...item,
    path: item.path.replace(/^\/shop/, ""),
  };
}

export async function loader({ params }: { params: Record<string, any> }) {
  // Get some donuts
  const response = await fetch("https://api.crystallize.com/dounot/catalogue", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          catalogue(path: "/shop/${params.product}") {
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
      `,
    }),
  });

  return json(
    await response.json().then((c) => removeShopFromPath(c.data.catalogue))
  );
}

export default function Product() {
  const product = useLoaderData();

  return (
    <main>
      <h1 className="text-3xl mb-5">{product.name}</h1>
      <Image {...product.defaultVariant.firstImage} />
      <Price productVariant={product.defaultVariant} className="text-xl" />
    </main>
  );
}
