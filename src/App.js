import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer';
import FlightContainer from './FlightContainer';
import ReportContainer from './ReportContainer';
import CreateContainer from './CreateContainer';
import EditContainer from './EditContainer';
import ShowContainer from './ShowContainer';

const My404 = () => {
  return (
    <div>
      your are looser...lol
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ HomeContainer } />
        <Route exact path="/flight" component={ FlightContainer } />
        <Route exact path="/report" component={ ReportContainer } />
        <Route exact path="/report/new" component={ CreateContainer } />
        <Route exact path="/:id/edit" component={ EditContainer } />
        <Route exact path="/:id" component={ ShowContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}

export default App;
