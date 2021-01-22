import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Path/Header";
import Banner from "./RoomDetail/banner";
import { LoginProvider } from './contexts/LoginProvider';

import routes from "./routes";

const showContentMenus = (routes) => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return result;
};

const App = () => {
  return (
    <LoginProvider>
      <Router>
        <div className="App-container">
          <Header />
          <div className="App-body">
            <Switch>{showContentMenus(routes)}</Switch>
          </div>
          <br />
          <br />
          <br />
          <br />
          {/* <Footer /> */}
        </div>
      </Router>
    </LoginProvider>
  );
};
export default App;
