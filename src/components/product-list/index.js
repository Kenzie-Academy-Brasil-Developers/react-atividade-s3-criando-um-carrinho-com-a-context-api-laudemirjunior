import Button from "../button";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import { Card, Container } from "./styles";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <Container>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
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

export default ProductList;
