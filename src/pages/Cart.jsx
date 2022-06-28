import Navbar from "../components/Navbar";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { React, useState } from "react";
import {
  Container,
  Wrapper,
  Top,
  Title,
  TopButton,
  TopTexts,
  TopText,
  Image,
  Details,
  Product,
  ProductName,
  ProductSize,
  ProductPrice,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductId,
  ProductColor,
  ProductDetail,
  Hr,
  Bottom,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Button,
  Info,
} from "../styles/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [counterShoe, setCounterShoe] = useState(1);
  const [counterShirt, setCounterShirt] = useState(1);
  const [subTotal, setSubTotal] = useState(50);

  const increaseShoe = () => {
    setCounterShoe((count) => count + 1);
    setSubTotal(subTotal + 30);
  };
  const increaseShirt = () => {
    setCounterShirt((count) => count + 1);
    setSubTotal(subTotal + 20);
  };
  const decreaseShoe = () => {
    counterShoe > 1
      ? setCounterShoe((count) => count - 1)
      : setCounterShoe(counterShoe);
    if (counterShoe > 1) {
      setSubTotal(subTotal - 30);
    }
  };

  const decreaseShirt = () => {
    counterShirt > 1
      ? setCounterShirt((count) => count - 1)
      : setCounterShirt(counterShirt);
    if (counterShirt > 1) {
      setSubTotal(subTotal - 20);
    }
  };

  return (
    <Container>
      <Navbar />
      <Anouncements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/productlist" style={{ textDecoration: "none" }}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: "pointer" }} onClick={increaseShoe} />
                  <ProductAmount>{counterShoe}</ProductAmount>
                  <Remove
                    style={{ cursor: "pointer" }}
                    onClick={decreaseShoe}
                  />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: "pointer" }} onClick={increaseShirt} />
                  <ProductAmount>{counterShirt}</ProductAmount>
                  <Remove
                    style={{ cursor: "pointer" }}
                    onClick={decreaseShirt}
                  />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {subTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {subTotal}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
