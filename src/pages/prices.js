import * as React from 'react'
import {ColorModeProvider, ThemeProvider} from "@chakra-ui/react";
import colorTheme from "../styles/theme";
import {Layout} from "../styles/components/layout/Layout";
import {Price} from "../styles/components/prices/Price";
import {SEO} from "../seo/SEO";


const Prices = () => {
    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
                <Layout isMain={false}>
                    <SEO
                        haveArticle={true}
                        title="Юридическая консультация. Семейные споры, взыскание долгов, бесплатная консультация."
                        href={'advocate-etalon.ru/prices'}
                        description={'Актуальные цены на юридические услуги. Бесплатная консультация, решение семейных вопросов. '}
                        keys={'Юридическая помощь, семейные споры, развод, общение с ребенком, общение отца с ребенком, брачный договор, взыскание долгов цена. '}
                        articleBody={''}
                        articleDescription={'Цены на юридические услуги'}
                    />
                    <Price/>
                </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default Prices