import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { json, useLoaderData } from "remix";
import { Price } from "~/components/price";
import { useScreens } from "../hooks/tailwind";

export async function loader({ params }: { params: Record<string, any> }) {
  // Get some donuts
  const response = await fetch(
    "https://api.crystallize.com/learning-with-jason-prep/catalogue",
    {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          catalogue(path: "/${params.product}") {
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

              description: component(id: "description") {
                content {
                  ... on ParagraphCollectionContent {
                    paragraphs {
                      title { text }
                      body { json }
                      images {
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
          }
        }
      `,
      }),
    }
  );

  return json(await response.json().then((c) => c.data.catalogue));
}

export default function Product() {
  const product = useLoaderData();
  const screens = useScreens();

  return (
    <main>
      {/* Product name, price and image here */}
      <div className="container mx-auto max-w-md">
        <div className="text-center">
          <h1 className="text-3xl mb-5">{product.name}</h1>
          <Price productVariant={product.defaultVariant} className="text-xl" />
        </div>
        <Image {...product.defaultVariant.firstImage} />
      </div>

      {/* Product story here */}
      <div className="bg-slate-100 p-6 sm:p-12">
        <div className="container mx-auto max-w-xl">
          {product.description.content?.paragraphs.map(
            (paragraph: any, index: any) => {
              const title = paragraph.title?.text;
              const body = paragraph.body?.json;
              const images = paragraph.images || [];

              return (
                <div key={index} className="mb-12">
                  {title ? <h2 className="text-xl mb-6">{title}</h2> : null}
                  {body ? <ContentTransformer json={body} /> : null}
                  {images.map((image: any) => (
                    <Image
                      className="mt-6"
                      key={image.url}
                      {...image}
                      sizes={`(min-width: ${screens.md} 100vw - ) 100wv`}
                    />
                  ))}
                </div>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
}
