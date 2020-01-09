import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import { Container } from "semantic-ui-react";
import StreamEdit from "./streams/StreamEdit";

import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <Container>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;
