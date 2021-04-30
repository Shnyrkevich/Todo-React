import React from 'react';
import Sidebar from '../sidebar/sidebar';
import TodosContainer from '../todo-list/todos-container';
import { AppContainer } from './styled-app';

export default function App() {
  return (
    <AppContainer>
      <Sidebar />
      <TodosContainer />
    </AppContainer>
  );
}
