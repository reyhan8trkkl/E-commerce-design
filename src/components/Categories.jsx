import {Container} from "../styles/categories"
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem category={item} />
      ))}
    </Container>
  );
};

export default Categories;
