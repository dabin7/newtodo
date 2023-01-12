import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 500px;
  height: 700px;

  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 50px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);
  background: white;
  border-radius: 15px;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
