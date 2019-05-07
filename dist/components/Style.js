import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 5em;\n  background-color: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import Theming from './../../lib';
var theme = Theming.createThemeWithAppearance();
var ItsWorkingStyled = styled.h1(_templateObject(), function (props) {
  return theme(props).contrast(props);
}, function (props) {
  return theme(props).color(props);
});
ItsWorkingStyled.defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance: 'secondary'
};
export { ItsWorkingStyled };