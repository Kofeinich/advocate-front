import {extendTheme} from "@chakra-ui/react"

const config = {
    initialColorMode: localStorage.getItem('chakra-ui-color-mode') || 'dark',
    useSystemColorMode: true,
}
const colorTheme = extendTheme({
    config,
    fonts: {
        heading: `'Prata', serif`,
        body: `'Jost', sans-serif`
    },
    mode: {
        light: {
            base: '#F7F5FB',
            primary: '#F06449',
            heading1: '#F06449',
            heading3: '#F06449',
            font: '#474747',
            additional: '#FFC7594D',
        },
        dark: {
            base: '#36382E',
            primary: '#F06449',
            heading1: '#F7F5FB',
            heading3: '#FFC759',
            font: '#F7F5FB',
            additional: '#474747',
        },
    },
})

export default colorTheme