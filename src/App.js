import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route paht="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
