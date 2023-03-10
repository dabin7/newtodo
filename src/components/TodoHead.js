import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../Context';

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    color: #343a40;
    font-size: 38px;
  }

  .day {
    color: #868e96;
    font-size: 21px;
    font-weight: bold;
  }

  .tasks {
    color: #343a40;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }

  margin: 0 20px;
  padding: 40px 20px 20px 20px;
  border-bottom: 1px solid #d5d8db;
`;

const TodoHead = () => {
  const today = new Date();

  const dateString = today.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleString('en-US', { weekday: 'long' });
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks'>Remaining Tasks : {undoneTasks.length}</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
