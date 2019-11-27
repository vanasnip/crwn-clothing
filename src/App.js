import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';

const NotFound = () => (
  <div className="not-found">404 not found</div>
)
const HatsComp = ({match:{params:{loc}}}) => (<div>{loc.toUpperCase()}</div>);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/:loc" component={HatsComp}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
        <Route exact path="/*" component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;