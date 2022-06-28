import { Link } from "react-router-dom";
import { Container, Img, Info, Title, Button } from "../styles/categoryitem";

const CategoryItem = ({ category }) => {
  return (
    <Container key={category.id}>
      <Img src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
