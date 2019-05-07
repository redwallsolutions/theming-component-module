import React from 'react';
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';

import {ItsWorkingStyled} from './lib/components/Style';

const App = () => (
  <ThemeProvider theme={{mode:'dark'}}>
    <ItsWorkingStyled>
      Oi
    </ItsWorkingStyled>
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
