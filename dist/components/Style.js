import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import Theming from './../../lib';
var theme = Theming.createThemeWithAppearance();
export var ItsWorkingStyled = styled.h1(_templateObject(), function (props) {
  return console.log(theme(props).color(props), theme(props).contrast(props));
});
ItsWorkingStyled.defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance: 'default'
};