import * as React from 'react'
import {ColorModeProvider, ThemeProvider} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Layout} from "../styles/components/layout/Layout";
import {PracticeDescription} from "../styles/components/practice-description/PracticeDescription";

const Practice = () => {
    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
                <Layout isMain={false}>
                    <PracticeDescription/>
                </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}
export default Practice