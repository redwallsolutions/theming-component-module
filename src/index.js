import React from 'react';
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';


const App = () => (
  <ThemeProvider theme={{mode:'dark'}}>
    Theming Component Module
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
