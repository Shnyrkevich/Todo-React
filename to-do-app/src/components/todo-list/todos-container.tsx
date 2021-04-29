import React, { useEffect, useState } from 'react';
import { StyledTodosContainer } from './styled-todos';
import Todo from './todo/todo';
import { db } from '../../firebase';

export default function TodosContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection('todos')
    .get()
    .then((docs: any) => {
      const todos = docs.docs.map((doc: any) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      setTodos(todos);
    })
    .catch((er) => {
      console.log(er);
    });
  }, []);
  

  return (
    <StyledTodosContainer>
      {
        todos.map((todo: any) => <Todo key={todo.id} title={todo.title} />)
      }
    </StyledTodosContainer>
  );
}