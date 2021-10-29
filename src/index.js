import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import LogInPage from "./view/Pages/LogInPage/LogInPage";
import AdminPanelPage from "./view/Pages/AdminPanelPage/AdminPanelPage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/sign-in" />
          <Route path="/sign-in" component={LogInPage} title="Sign-In" />
          <Route
            path="/admin-panel"
            component={AdminPanelPage}
            title="Admin Panel"
          />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
