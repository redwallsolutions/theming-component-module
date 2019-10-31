import React, { useEffect } from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { createThemeWithAppearance } from './lib'

const App = () => {
	return (
		<ThemeProvider theme={{ mode: 'light' }}>
			<AppContent />
		</ThemeProvider>
	)
}

const theming = createThemeWithAppearance()

const NiceWarning:any = styled.div`
	${(props) => {
		console.log("Theming Object: ", theming, "Theming With Props: ", theming(props), "Theming color with props: ", theming(props).color(props))
		return null
	}}
`

const defaultProps = {
	appearance: 'primary'
}

NiceWarning.defaultProps = defaultProps

const AppContent = (props:any) => {
	useEffect(() => {
		console.log(props)
	}, [props])
	return <NiceWarning>Look at console!</NiceWarning>
}

render(<App />, document.getElementById('root'))
