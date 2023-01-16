import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../Context';

const CheckBox = styled.div`
  width: 32px;
  height: 32px;
  font-size: 24px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  border: 1px solid #ced4da;
  border-radius: 50%;
  color: #ced4da;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  margin: 0 10px;
  color: #343a40;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  margin-right: 20px;
  padding-top: 2px;
  font-size: 22px;
  cursor: pointer;
  display: none;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id,
    });
  };

  const onRemove = () => {
    console.log(id);
    dispatch({
      type: 'REMOVE',
      id,
    });
  };

  return (
    <TodoItemBlock>
      <CheckBox done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckBox>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
