import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Components/Navigation/Home';
import Navigation from '../Components/Navigation';
import AboutComponent from '../Components/Navigation/About';

const Routers = () => {
  return (
    <>
    <Router>
        <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about"><AboutComponent /></Route>
      </Switch>
    </Router>
    </>
  );
};

export default Routers;
