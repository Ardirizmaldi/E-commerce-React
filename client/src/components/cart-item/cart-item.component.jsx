import React from "react";

import "./cart-item.styles.scss";
import { CartItemContainer, ItemImage, ItemDetails } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetails>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
