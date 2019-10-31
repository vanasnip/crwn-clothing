import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const NotFound = ()=> (
  <div className="not-found">404 not found</div>
)
const HatsPage = () => (
  <div>
    <h2>Hats Page</h2>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage}/>
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
