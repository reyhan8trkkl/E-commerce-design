import { Container } from "../styles/products";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </Container>
  );
};

export default Products;
