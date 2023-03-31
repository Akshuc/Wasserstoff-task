import './App.css';
import Home from './components/Home/Home';
import { Route, Switch} from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/Dashboard">
          <DashBoard />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
