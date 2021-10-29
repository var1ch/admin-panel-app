import styled from "styled-components";

export const StyledAdminPanel = styled.div`
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  position: relative;
  input {
    outline: none;
    border: 0;
    border-bottom: 1px solid rgba(100, 100, 111, 0.2);
    margin-bottom: 35px;
    padding: 10px 0 10px 0;
    margin-right: 10px;
    font-size: 1rem;
    width: 200px;
    &:focus {
      border-bottom: 1px solid blue;
    }
  }
  button {
    text-align: center;
    padding: 10px 35px 10px 35px;
    border: none;
    background-color: #2d2dff;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    border-radius: 3px;
    margin: 10px;
    box-shadow: rgba(100, 100, 111, 0.35) 0px 7px 7px 0px;
    &:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: none;
      background-color: #6262ff;
    }
  }
  div.left-panel {
    flex: 1;
    background-color: #3f3ffc;
    color: white;
    font-size: 2rem;
    div.panel-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      background-color: #5353fa;
      text-align: center;
      span {
        font-size: 1.3rem;
        margin-left: 5px;
      }
    }
  }
  div.right-panel {
    flex: 7;
    padding: 35px;
    display: flex;
    flex-direction: column;
    position: relative;
    div.filter-form {
      padding: 15px;
      border: 1px solid rgba(100, 100, 111, 0.2);
      border-radius: 5px;
    }
    ul.data-list {
      margin-top: 35px;
      li.data-item {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid rgba(100, 100, 111, 0.2);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        &:hover {
          border: 1px solid blue;
        }
        span {
          display: inline-block;
          width: 190px;
          text-align: left;
          &:hover {
            cursor: default;
          }
        }
        span.id {
          width: initial;
        }
        div.options {
          color: #8484ff;
          .button:hover {
            cursor: pointer;
            color: #2d2dff;
          }
          .edit {
            margin-right: 10px;
          }
        }
      }
    }
    div.modal {
      position: absolute;
      z-index: 999;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: ${(props) => (props.isModalOpened ? "flex" : "none")};
      flex-direction: column;
      padding: 95px;
      background-color: white;
      border-radius: 5px;
      div.input-row {
        display: flex;
        span {
          padding: 10px 10px 10px 0;
          width: 90px;
        }
        input {
          margin-right: 0;
          width: 250px;
        }
      }

      button {
        margin: 10px 0 0 0;
      }
      div.buttons-container {
        display: flex;
        flex-direction: column;
      }
    }
    div.pagination-bar {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      color: #6666ff;
      font-size: 2rem;
      padding: 10px 0 10px 0;
      span {
        color: #2d2dff;
        font-size: 1.5rem;
      }
      & .pagination-button:hover {
        color: #2d2dff;
        cursor: pointer;
      }
    }
  }
  div.modal-overlay {
    position: relative;
    display: ${(props) => (props.isModalOpened ? "contents" : "none")};
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
