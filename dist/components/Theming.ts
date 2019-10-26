import RedwallColorPallete from '@redwallsolutions/color-pallete-component-module';
import theming from 'styled-theming';

class Theming {
  static createThemeWithAppearance = (additionalTheme:any):any => {
    return theming.variants('mode', 'appearance', {
      ...additionalTheme,
      primary: {
        light: {
          color: (props:any) => props.theme.primary || RedwallColorPallete.primary,
          contrast: (props:any) => props.theme.primaryContrast || RedwallColorPallete.primaryContrast
        },
        dark: {
          color: (props:any) => props.theme.primaryDark || RedwallColorPallete.primaryDark,
          contrast: (props:any) => props.theme.primaryContrastDark || RedwallColorPallete.primaryContrastDark
        }
      },
      secondary: {
        light: {
          color: (props:any) => props.theme.secondary || RedwallColorPallete.secondary,
          contrast: (props:any) => props.theme.secondaryContrast || RedwallColorPallete.secondaryContrast
        },
        dark: {
          color: (props:any) => props.theme.secondaryDark || RedwallColorPallete.secondaryDark,
          contrast: (props:any) => props.theme.secondaryContrastDark || RedwallColorPallete.secondaryContrastDark
        }
      },
      default: {
        light: {
          color: (props:any) => props.theme.default || RedwallColorPallete._default,
          contrast: (props:any) => props.theme.defaultContrast || RedwallColorPallete.defaultContrast
        },
        dark: {
          color: (props:any) => props.theme.defaultDark || RedwallColorPallete.defaultDark,
          contrast: (props:any) => props.theme.defaultContrastDark || RedwallColorPallete.defaultContrastDark
        }
      }
    })
  }
}

export default Theming;
