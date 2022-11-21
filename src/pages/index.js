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

const MainPage = () => {
    const {toggleColorMode} = useColorMode();

    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
               <Layout>
                   <Adverting/>
               </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default MainPage
