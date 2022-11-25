import * as React from "react";
import {Box, Flex, Text, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import Mail from "../../../../../svg/mail.svg";
import WhatsApp from "../../../../../svg/whatsapp.svg";
import Telegram from "../../../../../svg/telegram.svg" ;

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
                <WhatsApp/>
            </Box>
            <Box
                w={isMobile ? '34px' :'24px'}
                m={'0 10px'}
            >
                <Telegram/>
            </Box>
            <Box
                w={isMobile ? '34px' :'24px'}
                m={'0 10px'}
            >
                <Mail/>
            </Box>
        </Flex>

    </Flex>
}