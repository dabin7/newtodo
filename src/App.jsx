import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

const App = () => {
  return <GlobalStyle />;
};

export default App;
