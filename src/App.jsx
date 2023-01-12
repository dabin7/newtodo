import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Context from './Context';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoPeriod from './components/TodoPeriod';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <TodoPeriod />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
};

export default App;
