import React, { useEffect } from "react";
import { StyledLogInPage } from "./StyledLogInPage";
import Form from "./components/FormComponent";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Admin Panel";
  }, []);
  return (
    <StyledLogInPage>
      <Form />
    </StyledLogInPage>
  );
}
