import {createThemeWithAppearance} from './Theming'

test('Theming', () => {
    expect(createThemeWithAppearance).toBeDefined()
    const theming = createThemeWithAppearance()
    expect(theming).toBeDefined()
})
