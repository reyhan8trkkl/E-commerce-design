import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  signLink,
} from "../styles/login";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Link to="/" style={{ width: "100%" }}>
            <Button>LOGIN</Button>
          </Link>
          <signLink style={{ textDecoration: "underline", cursor: "pointer" }}>
            DO NOT YOU REMEMBER THE PASSWORD?
          </signLink>
          <signLink style={{ textDecoration: "underline", cursor: "pointer" }}>
            CREATE A NEW ACCOUNT
          </signLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
