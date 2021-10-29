import styled from "styled-components";

export const StyledLogInPage = styled.div`
  min-width: 720px;
  max-width: 720px;
  max-height: 100vh;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-wrapper {
    padding-left: 200px;
    padding-right: 200px;
    flex: 1;
    .form-container {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      /* background-color: #fcfcfc; */
      border-radius: 5px;
      padding: 35px;
      display: flex;
      flex-direction: column;
      a {
        text-align: center;
        padding: 10px;
        background-color: #5353fa;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        border-radius: 3px;
      }
      form {
        display: flex;
        flex-direction: column;
        input {
          outline: none;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 35px;
          padding: 10px;
          &:focus {
            border-bottom: 1px solid blue;
          }
        }
      }
    }
  }
`;
