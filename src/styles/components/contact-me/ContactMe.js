import {Box, Flex, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import {HeadingStyled} from "../styled/HeadingStyled";
import {ContactNavs} from "./contact-navs/ContactNavs";
import {ContactSocial} from "./contact-social/ContactSocial";
import {DesktopStroke} from "./ui-strokes/DesktopStroke";
import {MobileStroke} from "./ui-strokes/MobileStroke";

export const ContactMe = () => {

    const [isMobile] = useMediaQuery("(max-width: 1000px)")
    const color = useColorModeValue('#474747', '#F7F5FB')

    return <Flex
        as={'section'}
        w={'100%'}
        maxW={'1120px'}
        flexDirection={'column'}
        position={'relative'}
        mt={'50px'}
    >
        <HeadingStyled id={'contacts'} text={'Контакты'}/>
        <Flex
            borderBottom={isMobile ? 'none' : `1px solid ${color}`}
            borderTop={isMobile ? 'none' : `1px solid ${color}`}
            position={'relative'}
            mt={'30px'}
            alignItems={'center'}
            justify={isMobile ? 'center' : 'space-between'}
            flexDirection={isMobile ? 'column' : 'raw'}
            mb={'30px'}
        >
            <Flex
                p={'32px'}
                w={'100%'}
                maxW={'310px'}
                justify={'left'}
                alignItems={'center'}
                position={'relative'}
                borderBottom={isMobile ? `1px solid ${color}` : 'none'}
                borderTop={isMobile ? `1px solid ${color}` : 'none'}
            >
                { isMobile ? <>
                    <MobileStroke l={'5%'} />
                    <MobileStroke r={'5%'}/>
                </> :<DesktopStroke/>}
                <ContactSocial/>
            </Flex>
            <Flex
                p={isMobile ? '32px 0px' : '32px'}
                w={'100%'}
                maxW={isMobile ? '400px' : '500px'}
                justify={'center'}
                alignItems={'center'}
                position={'relative'}
            >
                { isMobile ? <></> :<DesktopStroke/>}
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
                position={'relative'}
                borderBottom={isMobile ? `1px solid ${color}` : 'none'}
                borderTop={isMobile ? `1px solid ${color}` : 'none'}
            >
                <ContactNavs/>
            </Flex>
        </Flex>
    </Flex>
}