import * as React from 'react'
import {
    ThemeProvider,
    useColorMode,
    useColorModeValue,
    ColorModeProvider, Box,
} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Switcher} from "../styles/components/switcher/Switcher";
import {Layout} from "../styles/components/layout/Layout";
import {Adverting} from "../styles/components/adverting/Adverting";
import {Titles} from "../styles/components/titles/Titles";


const MainPage = () => {
    const {toggleColorMode} = useColorMode();

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
