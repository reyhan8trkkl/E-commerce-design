import { Info, Container, Circle, Icon, Img } from "../styles/product";
import {
  ShoppingCartTwoTone,
  SearchTwoTone,
  FavoriteTwoTone,
} from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Img src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartTwoTone />
        </Icon>
        <Icon>
          <SearchTwoTone />
        </Icon>
        <Icon>
          <FavoriteTwoTone />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
