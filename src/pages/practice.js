import * as React from 'react'
import {ColorModeProvider, ThemeProvider} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Layout} from "../styles/components/layout/Layout";
import {PracticeDescription} from "../styles/components/practice-description/PracticeDescription";
import {Hashtags} from "../styles/components/hashtags/Hashtags";

const Practice = () => {
    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
                <Layout isMain={false}>
                    <PracticeDescription/>
                    <Hashtags/>
                </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}
export default Practice