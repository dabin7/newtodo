import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../Context';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  width: 70px;
  height: 70px;
  font-size: 60px;
  position: absolute;
  left: 395px;
  top: 50px;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);

  z-index: 5;
  cursor: pointer;

  color: white;

  border: none;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  top: 480px;
  position: absolute;
`;

const InsertForm = styled.form``;

const Input = styled.input`
  padding: 13px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  width: 86%;
  font-size: 18px;
  box-sizing: border-box;
  margin: 143px 0 0 20px;
  font-weight: bold;
  color: #343a40;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.05);
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(!open);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    nextId.current += 1;
    setOpen(false);
    setValue('');
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              placeholder='작성 후 Enter를 누르세요.'
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default React.memo(TodoCreate);
