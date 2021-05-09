import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { AppContainer } from './styled-app';
import { getCollection } from '../../api/api';
import { Route, Switch } from 'react-router-dom';

import DBContent from '../../context/db';

import TodosContainer from '../todo-list/todos-container';

export default function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getCollection('lists').then((lists: any) => setLists(lists));
  }, []);

  return (
    <DBContent.Provider value={{ lists }}>
      <AppContainer>
        <Sidebar lists={lists} />
        <Switch>
          <Route path='/:listId' component={TodosContainer} />
        </Switch>
      </AppContainer>
    </DBContent.Provider>
  );
}
