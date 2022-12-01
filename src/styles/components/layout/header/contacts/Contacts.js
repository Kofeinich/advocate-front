import * as React from "react";
import {Box, Flex, Text, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {WhatsApp} from "../../../../icons/WhatsApp";
import {Telegram} from "../../../../icons/Telegram";
import {Mail} from "../../../../icons/Mail";

export const Contacts = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 1100px)")


    return <Flex
        w={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
        ml={'100px'}
    >
        <Flex
            w={'100%'}
            alignItems={'center'}
            justify={'center'}
        >
            <a href='tel:+79180675105'>
                <Text
                    textAlign={'center'}
                    color={color}
                    fontSize={isMobile ? '28px' : '16px'}
                    lineHeight={isMobile ? '42px' :'24px'}
                    fontFamily={isMobile ? '"Prata",serif': '"Jost", sans-serif'}
                    _hover={{
                        color: "#F06449"
                    }}
                    _active={{
                        color: "#F06449"
                    }}
                    _focus={{
                        color: "#F06449"
                    }}
                >
                    +7 (918) 067-51-05
                </Text>
            </a>
        </Flex>
        <Flex
            w={'100%'}
            p={'5px'}
            alignItems={'center'}
            justify={'center'}
        >
            <Box
                w={ isMobile ? '34px' :'24px'}
                m={'0 10px'}
            >
                <a href="https://skobelkin.ru/whatsapp/79180675105?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82,+%D1%8F+%D1%81+%D1%81%D0%B0%D0%B9%D1%82%D0%B0" target="_blank" rel="external">
                    <WhatsApp width={'100%'} margin={'0'}/>
                </a>
            </Box>
            <Box
                w={isMobile ? '34px' :'24px'}
                m={'0 10px'}
            >
                <a className={'link'} href="https://tlgg.ru/konyukhov_vladimir" target="_blank" rel="external">
                    <Telegram width={'100%'} margin={'0'}/>
                </a>
            </Box>
            <Box
                w={isMobile ? '34px' :'24px'}
                m={'0 10px'}
            >
                <a href="mailto:kvr165@mail.ru" target="_blank" rel="external">
                    <Mail  width={'100%'} margin={'0'}/>
                </a>
            </Box>
        </Flex>

    </Flex>
}