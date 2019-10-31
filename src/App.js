import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Home = () => <div>
  <Link to="/topics">Topics</Link>

  <h1>Home Page</h1>
</div>;
const Topics = (props) => <div>
  <Link className="link" to="/home">Home</Link>
    <Link className="link" to={`${props.match.url}/13`}>Topic 13</Link>
  <Link className="link"  to={`${props.match.url}/12`}>Topics 12</Link>
  <h1>Topics Page</h1>
</div>;
const TopicDetail = (props) => {
  const {
    match,
    match: { params },
    match: { params: { id } }
  } = props;
  console.log(match, params);
  return <div>
    <button className="link" onClick={() => {props.history.push("/topics")}}>Topics</button>
    <Link className="link" to="/home">Home</Link>
    <h1>Topic Detail Page {id}</h1>
  </div>
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/topics/lala" component={Topics}></Route>
        <Route exact path="/topics/lala/:id" component={TopicDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
