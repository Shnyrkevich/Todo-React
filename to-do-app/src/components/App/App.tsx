import React from 'react';
import Header from '../header/header';
import TodosContainer from '../todo-list/todos-container';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <TodosContainer />
    </div>
  );
}
