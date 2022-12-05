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
import {ContactMe} from "../styles/components/contact-me/ContactMe";
import {SEO} from "../seo/SEO";

const MainPage = () => {

    return (
        <ThemeProvider resetCSS theme={colorTheme}>
            <ColorModeProvider>
               <Layout isMain={true}>
                   <SEO
                       haveArticle={true}
                       title="Юрист в Новороссийске - арбитраж, разводы, взыскание долгов и алиментов. Юридическая консультация."
                       href={'advocate-etalon.ru'}
                       description={'Помощь в расторжении брака, взыскании алиментов, регистрации недвижимости. Ведение любых категорий арбитражных дел. Защита прав в суде и юридическое сопровождение бизнеса.'}
                       keys={'Юрист, Новороссийск, Услуги юриста, Консультации юриста, Юридическая помощь адвоката, семейный юрист, арбитраж в Новороссийске '}
                       articleBody={'Меня зовут Владимир. Мой стаж адвокатской деятельности 18 лет. Я специализируюсь на решении сложных дел. Основная специализация — это судебные споры, арбитражные суды, суды общей юрисдикции.'}
                       articleDescription={'Юрист Владимир Конюхов'}
                   />
                   <Profile/>
                   <Adverting/>
                   <Services/>
                   <Titles/>
                   <ContactMe/>
               </Layout>
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default MainPage
