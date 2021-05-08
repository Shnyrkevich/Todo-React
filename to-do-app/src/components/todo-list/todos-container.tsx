import React, { useEffect, useState } from 'react';
import { StyledTodosContainer } from './styled-todos';
import Todo from './todo/todo';
import { getCollection } from '../../api/api';

export default function TodosContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getCollection('todos').then((todos: any) => setTodos(todos));
  }, []);
  

  return (
    <StyledTodosContainer>
      {
        todos.map((todo: any) => <Todo key={todo.id} title={todo.title} />)
      }
    </StyledTodosContainer>
  );
}