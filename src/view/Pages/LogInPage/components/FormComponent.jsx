import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserNameAction } from "../../../../state";

export default function Form() {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form>
          <input
            value={inputValues.username}
            type="text"
            placeholder="USERNAME"
            onChange={(i) =>
              setInputValues({ ...inputValues, username: i.target.value })
            }
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={inputValues.password}
            onChange={(i) =>
              setInputValues({ ...inputValues, password: i.target.value })
            }
          />
        </form>
        <Link
          to={
            inputValues.username === "" || inputValues.password === ""
              ? "sign-in"
              : "admin-panel"
          }
          onClick={() => {
            if (inputValues.username !== "" || inputValues.password !== "") {
              dispatch(setUserNameAction(inputValues.username));
            } else {
              alert("Please fill the USERNAME and PASSWORD fields");
            }
          }}
        >
          Sign-In
        </Link>
      </div>
    </div>
  );
}
