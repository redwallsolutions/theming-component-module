import RedwallColorPallete from 'color-pallete-component-module';
import theming from 'styled-theming';

class Theming {
  static createThemeWithAppearance = (additionalTheme) => {
    return theming.variants('mode', 'appearance', {
      ...additionalTheme,
      primary: {
        light: {
          color: props => props.theme.primary || RedwallColorPallete.primary,
          contrast: props => props.theme.primaryContrast || RedwallColorPallete.primaryContrast
        },
        dark: {
          color: props => props.theme.primaryDark || RedwallColorPallete.primaryDark,
          contrast: props => props.theme.primaryContrastDark || RedwallColorPallete.primaryContrastDark
        }
      },
      secondary: {
        light: {
          color: props => props.theme.secondary || RedwallColorPallete.secondary,
          contrast: props => props.theme.secondaryContrast || RedwallColorPallete.secondaryContrast
        },
        dark: {
          color: props => props.theme.secondaryDark || RedwallColorPallete.secondaryDark,
          contrast: props => props.theme.secondaryContrastDark || RedwallColorPallete.secondaryContrastDark
        }
      },
      default: {
        light: {
          color: props => props.theme.default || RedwallColorPallete._default,
          contrast: props => props.theme.defaultContrast || RedwallColorPallete.defaultContrast
        },
        dark: {
          color: props => props.theme.defaultDark || RedwallColorPallete.defaultDark,
          contrast: props => props.theme.defaultContrastDark || RedwallColorPallete.defaultContrastDark
        }
      }
    })
  }
}

export default Theming;
