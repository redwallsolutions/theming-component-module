import styled from 'styled-components'
import Theming from './../../lib'

const theme = Theming.createThemeWithAppearance();

export const ItsWorkingStyled = styled.h1`
  ${props => console.log(theme(props).color(props), theme(props).contrast(props))};
`

ItsWorkingStyled.defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance: 'default'
}
