import Navbar from "../components/Navbar";
import Anouncements from "../components/Anouncements";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { React, useState } from "react";
import { Remove, Add } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Title,
  ImgContainer,
  Img,
  Button,
  InfoContainer,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  AddContainer,
  AmountContainer,
  Amount,
  Price,
} from "../styles/productpage";

const Product = () => {
  const [counter, setCounter] = useState(1);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    counter > 1 ? setCounter((count) => count - 1) : setCounter(counter);
  };
  return (
    <Container>
      <Navbar />
      <Anouncements />
      <Wrapper>
        <ImgContainer>
          <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} onClick={decrease} />
              <Amount>{counter}</Amount>
              <Add style={{ cursor: "pointer" }} onClick={increase} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
