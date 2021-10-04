import Button from "../button";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { Card, Container } from "../product-list/styles";

const Cart = ({ type }) => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      {type === "cart" &&
        cart.map((item, index) => (
          <Card key={index}>
            <p>{item.name.slice(0, 40).concat("...")}</p>
            <img src={item.image} alt={item.name} />
            <p>
              {item.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <Button type={type} item={item} />
          </Card>
        ))}
    </Container>
  );
};

export default Cart;
