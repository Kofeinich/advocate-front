import * as React from 'react'
import {ColorModeProvider, ThemeProvider} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Layout} from "../styles/components/layout/Layout";

const Practice = () => {
    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
                <Layout isMain={false}>

                </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}
export default Practice