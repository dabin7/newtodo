import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

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
  left: 415px;
  top: 615px;

  z-index: 5;
  cursor: pointer;

  color: white;

  border: none;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoCreate = () => {
  return (
    <>
      {/* {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
          </InsertForm>
        </InsertFormPositioner>
      )} */}
      <CircleButton>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
