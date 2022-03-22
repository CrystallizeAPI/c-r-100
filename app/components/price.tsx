import { FC, HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<any> {
  productVariant: {
    price: number;
  };
}

export const Price: FC<Props> = ({ productVariant, ...rest }) => {
  return (
    <span {...rest}>
      {new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "EUR",
      }).format(productVariant.price)}
    </span>
  );
};
