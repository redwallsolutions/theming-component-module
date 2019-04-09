import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import RedwallColorPallete from 'color-pallete-component-module';
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
          return props.theme.primaryDark || RedwallColorPallete.primaryDark;
        },
        contrast: function contrast(props) {
          return props.theme.secondaryContrastDark || RedwallColorPallete.secondaryContrastDark;
        }
      }
    },
    neutral: {
      light: {
        color: function color(props) {
          return props.theme.neutral || RedwallColorPallete.neutral;
        },
        contrast: function contrast(props) {
          return props.theme.neutralContrast || RedwallColorPallete.neutralContrast;
        }
      },
      dark: {
        color: function color(props) {
          return props.theme.neutralDark || RedwallColorPallete.neutralDark;
        },
        contrast: function contrast(props) {
          return props.theme.neutralContrastDark || RedwallColorPallete.neutralContrastDark;
        }
      }
    }
  }));
};

export default Theming;