import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import RedwallColorPallete from '@redwallsolutions/color-pallete-component-module';
import theming from 'styled-theming';

var Theming = function Theming() {
  _classCallCheck(this, Theming);
};

Theming.createThemeWithAppearance = function (additionalTheme) {
  return theming.variants('mode', 'appearance', _objectSpread({}, additionalTheme, {
    primary: {
      light: {
        color: function color(props) {
          return props.theme.primary || RedwallColorPallete.primary;
        },
        contrast: function contrast(props) {
          return props.theme.primaryContrast || RedwallColorPallete.primaryContrast;
        }
      },
      dark: {
        color: function color(props) {
          return props.theme.primaryDark || RedwallColorPallete.primaryDark;
        },
        contrast: function contrast(props) {
          return props.theme.primaryContrastDark || RedwallColorPallete.primaryContrastDark;
        }
      }
    },
    secondary: {
      light: {
        color: function color(props) {
          return props.theme.secondary || RedwallColorPallete.secondary;
        },
        contrast: function contrast(props) {
          return props.theme.secondaryContrast || RedwallColorPallete.secondaryContrast;
        }
      },
      dark: {
        color: function color(props) {
          return props.theme.secondaryDark || RedwallColorPallete.secondaryDark;
        },
        contrast: function contrast(props) {
          return props.theme.secondaryContrastDark || RedwallColorPallete.secondaryContrastDark;
        }
      }
    },
    default: {
      light: {
        color: function color(props) {
          return props.theme.default || RedwallColorPallete._default;
        },
        contrast: function contrast(props) {
          return props.theme.defaultContrast || RedwallColorPallete.defaultContrast;
        }
      },
      dark: {
        color: function color(props) {
          return props.theme.defaultDark || RedwallColorPallete.defaultDark;
        },
        contrast: function contrast(props) {
          return props.theme.defaultContrastDark || RedwallColorPallete.defaultContrastDark;
        }
      }
    }
  }));
};

export default Theming;