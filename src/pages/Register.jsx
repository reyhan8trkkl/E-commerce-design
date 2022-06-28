import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Agreement,
} from "../styles/register";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link to="/" style={{ width: "100%" }}>
            <Button>CREATE</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
