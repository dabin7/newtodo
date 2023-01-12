import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
`;
const CheckBox = styled.div`
  width: 32px;
  height: 32px;
  font-size: 24px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  border: 1px solid #38d9a9;
  border-radius: 50%;
  color: #38d9a9;
`;
const Text = styled.div`
  font-size: 20px;
  margin: 0 10px;
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  padding-top: 2px;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItem = () => {
  return (
    <TodoItemBlock>
      <CheckBox>
        <MdDone />
      </CheckBox>
      <Text>산책하기</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
