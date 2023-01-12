import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    color: #343a40;
  }

  div {
    color: #d5d8db;
  }

  margin: 0 20px;
  padding: 40px 20px 30px 20px;
  border-bottom: 1px solid #d5d8db;
`;

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <h1>2022년 12월 25일</h1>
      <div>일요일</div>
      <div>할 일 5개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
