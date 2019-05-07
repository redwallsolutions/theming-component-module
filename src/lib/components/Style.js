import styled from 'styled-components'
import Theming from './../../lib'

const theme = Theming.createThemeWithAppearance();

const ItsWorkingStyled = styled.h1`
  padding: 5em;
  background-color: ${props => theme(props).contrast(props)};
  color: ${props => theme(props).color(props)};
`

ItsWorkingStyled.defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance: 'secondary'
}

export {ItsWorkingStyled}
