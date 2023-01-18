import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Periods = styled.div`
  position: absolute;
  top: -30px;
  left: 10px;
  display: flex;
  z-index: -1;

  .today {
    background-color: #f95947;
  }

  .month {
    background-color: #f9ed47;
  }

  .year {
    background-color: #68f947;
  }
`;

const Period = styled(Link)`
  width: 70px;
  height: 40px;
  box-shadow: 1px -2px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
`;

const TodoPeriod = () => {
  return (
    <Periods>
      <Period className='today' to='/'></Period>
      <Period className='month' to='/month'></Period>
      <Period className='year' to='/year'></Period>
    </Periods>
  );
};

export default TodoPeriod;
