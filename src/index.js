import React from 'react';
import { render } from "react-dom";
import Theming from './lib';

console.log(Theming.createThemeWithAppearance()({theme: {mode:'light'}, appearance: 'primary'}));


const App = () => (
  <p>Look at the console. :)</p>
);

render(<App />, document.getElementById("root"));
