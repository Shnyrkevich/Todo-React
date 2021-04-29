import React from 'react';
import { StyledTodoContainer, TodoTitle } from './styled-todo';

type TProps = {
  title: string;
};

export default function Todo({ title }: TProps) {
  return (
    <StyledTodoContainer>
      <TodoTitle>{ title }</TodoTitle>
    </StyledTodoContainer>
  );
}