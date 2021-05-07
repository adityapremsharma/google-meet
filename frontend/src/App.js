import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Meeting from "./pages/Meeting";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/:id">
          <Meeting />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
