import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../Context';

const TodoListBlock = styled.div`
  margin: 20px 20px 30px 20px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 13px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #38d9a9;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((item) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          key={item.id}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
