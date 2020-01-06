import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamList from "./streams/StreamList";
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
