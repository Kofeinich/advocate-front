import * as React from 'react'
import {
    ThemeProvider,
    useColorMode,
    ColorModeProvider,
} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Layout} from "../styles/components/layout/Layout";
import {Adverting} from "../styles/components/adverting/Adverting";
import {Titles} from "../styles/components/titles/Titles";


const MainPage = () => {

    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
               <Layout>
                   <Adverting/>
                   <Titles/>
               </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default MainPage
