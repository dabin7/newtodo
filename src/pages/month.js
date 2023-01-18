import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoPeriod from '../components/TodoPeriod';
import TodoCreate from '../components/TodoCreate';
import { TodoProvider } from '../Context';

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

const month = () => {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoPeriod />
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
};

export default month;
