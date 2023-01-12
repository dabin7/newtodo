import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '..Context/';

const TodoListBlock = styled.div`
  padding: 30px 20px 45px 20px;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((item) => (
        <TodoItem id={item.id} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
