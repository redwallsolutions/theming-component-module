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
          color: props => props.theme.primaryDark || RedwallColorPallete.primaryDark,
          contrast: props => props.theme.secondaryContrastDark || RedwallColorPallete.secondaryContrastDark
        }
      },
      neutral: {
        light: {
          color: props => props.theme.neutral || RedwallColorPallete.neutral,
          contrast: props => props.theme.neutralContrast || RedwallColorPallete.neutralContrast
        },
        dark: {
          color: props => props.theme.neutralDark || RedwallColorPallete.neutralDark,
          contrast: props => props.theme.neutralContrastDark || RedwallColorPallete.neutralContrastDark
        }
      }
    })
  }
}

export default Theming;
