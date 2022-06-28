import { SendTwoTone } from "@material-ui/icons";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "../styles/newsletter";
import { useState } from "react";

const NewsLetter = () => {
  const [input, setInput] = useState("");

  const inputValue = (e) => {
    setInput(e.target.value);
  };
  const sendEmail = () => {
    input ? alert("Email sent!") : alert("Can't be blank");
    setInput("");
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input
          placeholder="Your email..."
          value={input}
          onChange={inputValue}
        />
        <Button onClick={sendEmail}>
          <SendTwoTone />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
