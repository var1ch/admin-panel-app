import React from "react";
import { StyledLogInPage } from "./StyledLogInPage";
import Form from "./components/FormComponent";

export default class LoginPage extends React.Component {
  componentDidMount() {
    document.title = "Sign-In";
  }
  render() {
    return (
      <StyledLogInPage>
        <Form />
      </StyledLogInPage>
    );
  }
}
