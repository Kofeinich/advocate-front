import {Flex, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import {HeadingStyled} from "../styled/HeadingStyled";
import {ContactNavs} from "./contact-navs/ContactNavs";
import {ContactSocial} from "./contact-social/ContactSocial";

export const ContactMe = () => {

    const [isMobile] = useMediaQuery("(max-width: 1000px)")

    return <Flex
        as={'section'}
        w={'100%'}
        maxW={'1120px'}
        flexDirection={'column'}
        position={'relative'}
        mt={'30px'}
    >
        <HeadingStyled text={'Контакты'}/>
        <Flex
            position={'relative'}
            mt={'30px'}
            alignItems={'center'}
            justify={isMobile ? 'center':'space-between'}
            flexDirection={isMobile ?'column' : 'raw'}
        >
            <Flex
                p={'32px'}
                w={'100%'}
                maxW={'310px'}
                justify={'left'}
                alignItems={'center'}
            >
                <ContactSocial/>
            </Flex>
            <Flex
                p={ isMobile ? '5px' : '32px'}
                w={'100%'}
                maxW={'420px'}
                justify={'center'}
                alignItems={'center'}
            >
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Af7f76e8ebad9a602dd6fdcd7ced640122a8e99cc5429da23fd715633b2659154&amp;source=constructor"
                    width="100%" height="240" frameBorder="0">
                </iframe>
            </Flex>
            <Flex
                p={'32px'}
                w={'100%'}
                maxW={'310px'}
                justify={'left'}
                alignItems={'center'}
            >
                <ContactNavs/>
            </Flex>
        </Flex>
    </Flex>
}