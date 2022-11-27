import {Box, Flex, Text, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from "react";
import Mail from "../../../../svg/mail.svg";
import WhatsApp from "../../../../svg/whatsapp.svg";
import Telegram from "../../../../svg/telegram.svg" ;
import Current from "../../../../svg/current.svg";
import Data from "../../../../svg/data.svg";
import Phone from "../../../../svg/phone.svg";

export const ContactSocial = () => {
    const [isMobile] = useMediaQuery("(max-width: 1000px)")
    const color = useColorModeValue('#36382E', '#F7F5FB')

    return <VStack
        w={'100%'}
        alignItems={isMobile ? 'center':'space-between'}
        spacing={7}
    >
        <Flex
            w={'100%'}
            alignItems={'center'}
        >
            <Box
                w={'23px'}
            >
                <Phone/>
            </Box>
            <Text
                pl={'18px'}
                color={color}
                fontSize={'16px'}
                fontFamily={'"Jost", sans-serif'}
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
        </Flex>
        <Flex
            w={'100%'}
            alignItems={'center'}
        >
            <Box
                w={'17px'}
            >
                <Current/>
            </Box>
            <Text
                pl={'26px'}
                color={color}
                fontSize={'12px'}
                fontFamily={'"Jost", sans-serif'}
            >
                Краснодарский край, город <br/>Новороссийск,
                улица Котанова,<br/> дом 6
            </Text>
        </Flex>
        <Flex
            w={'100%'}
            alignItems={'center'}
        >
            <Box
                w={'21px'}
            >
                <Data/>
            </Box>
            <Text
                pl={'20px'}
                color={color}
                fontSize={'12px'}
                fontFamily={'"Jost", sans-serif'}
            >
                Пн-Пт: 10:00 - 18:00 <br/>Сб-Вс: выходной
            </Text>
        </Flex>
        <Flex
            justify={'left'}
            alignItems={'center'}
        >
            <Box
                mr={'20px'}
                w={'32px'}
            >
                <WhatsApp/>
            </Box>
            <Box
                mr={'20px'}
                w={'32px'}
            >
                <Telegram/>
            </Box>
            <Box
                mr={'20px'}
                w={'32px'}
            >
                <Mail/>
            </Box>
        </Flex>
    </VStack>
}