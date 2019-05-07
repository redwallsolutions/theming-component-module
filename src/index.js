import React from 'react';
import { render } from "react-dom";
import Theming from './lib';

const theme = Theming.createThemeWithAppearance()
const props = {theme:{mode:'light'}, appearance: 'default'}

console.log("default light", theme(props).color(props), theme(props).contrast(props))
const App = () => (
  <p>Look at the console. :)</p>
);

render(<App />, document.getElementById("root"));
