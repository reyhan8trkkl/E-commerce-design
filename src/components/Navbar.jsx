import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Center,
  Left,
  Right,
  Wrapper,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "../styles/navbar";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>Search</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shoppin' Center</Logo>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/shoppingcart" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
