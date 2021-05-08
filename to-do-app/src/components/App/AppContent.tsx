import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodosContainer from '../todo-list/todos-container';

export default function AppContent() {

  return (
    <Switch>
      <Route exact={true} path='/' render={() => <TodosContainer />} />
    </Switch>
  );
}