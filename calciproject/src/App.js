import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import productpage from './components/productpage';
import productdetailpage from './components/productdetailpage';

function Application() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={productpage} />
        <Route path="/product/:id" component={productdetailpage} />
      </Switch>
    </Router>
  );
}
export default Application;
