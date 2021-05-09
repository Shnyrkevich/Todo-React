import React, { useContext, useEffect, useState } from 'react';
import { StyledTodosContainer } from './styled-todos';
import Todo from './todo/todo';

import DBContext from '../../context/db';
import { RouteComponentProps } from 'react-router';
import { getCollection } from '../../api/api';

interface MatchParams {
  listId: string
}

interface Props extends RouteComponentProps<MatchParams> {
}

export default function TodosContainer({ match }: Props) {
  console.log(match)
  const [todos, setTodos] = useState([]);
  const db = useContext(DBContext);

  useEffect(() => {
    getCollection('todos', match.params.listId).then((todos: any) => setTodos(todos));
    console.log(todos);
  }, [db, match.params.listId]);

  return (
    <StyledTodosContainer>
      {
        todos.map((todo: any) => <Todo key={todo.id} title={todo.title} />)
      }
    </StyledTodosContainer>
  );
}