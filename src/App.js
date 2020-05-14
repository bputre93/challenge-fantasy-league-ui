import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Teams from './containers/Teams';
import Statistics from './containers/Statistics';
import Main from './containers/Main';
import Scoring from './containers/Scoring';
import Layout from './hoc/Layout/Layout';
import { createBrowserHistory } from 'history';
import Challengers from './containers/Challengers';

const history = createBrowserHistory();
const location = history.location;
console.log(location)

const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
if (path) {
    console.log(path)
    history.replace(path);
}

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/teams" exact component={Teams}/>
        <Route path="/stats" exact component={Statistics}/>
        <Route path="/scoring" exact component={Scoring}/>
        <Route path="/challengers" exact component={Challengers}/>
      </Switch>
    </Layout>
  );
}

export default App;
