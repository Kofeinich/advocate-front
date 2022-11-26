import * as React from 'react'
import {
    ThemeProvider,
    ColorModeProvider,
} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Layout} from "../styles/components/layout/Layout";
import {Adverting} from "../styles/components/adverting/Adverting";
import {Titles} from "../styles/components/titles/Titles";
import {Profile} from "../styles/components/profile/Profile";
import {Services} from "../styles/components/services/Services";


const MainPage = () => {

    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
               <Layout>
                   <Profile/>
                   <Adverting/>
                   <Services/>
                   <Titles/>
               </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default MainPage
