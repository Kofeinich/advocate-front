import * as React from 'react'
import {ColorModeProvider, ThemeProvider} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Layout} from "../styles/components/layout/Layout";
import {Price} from "../styles/components/prices/Price";


const Prices = () => {
    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
                <Layout isMain={false}>
                    <Price/>
                </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default Prices