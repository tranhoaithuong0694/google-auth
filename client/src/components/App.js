import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";

import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;
