import React from "react";
import { Link } from "react-router-dom";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  // =========== REWRITE THIS!!! ===========================================
  onChangeUsernameHandler = (value) => this.setState({ username: value });
  onChangePasswordHandler = (value) => this.setState({ password: value });
  // =========== REWRITE THIS!!! ===========================================
  render() {
    return (
      <div className="form-wrapper">
        <div className="form-container">
          <form>
            <input
              value={this.state.username}
              type="text"
              placeholder="USERNAME"
              onChange={(i) => this.onChangeUsernameHandler(i.target.value)}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={(i) => this.onChangePasswordHandler(i.target.value)}
            />
          </form>
          <Link to="admin-panel">Sign-In</Link>
        </div>
      </div>
    );
  }
}
