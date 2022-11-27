import {Flex, Text, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from "react";

import {Current} from "../../../icons/Current";
import {Data} from "../../../icons/Data";
import {Phone} from "../../../icons/Phone";
import {Telegram} from "../../../icons/Telegram";
import {WhatsApp} from "../../../icons/WhatsApp";
import {Mail} from "../../../icons/Mail";

export const ContactSocial = () => {
    const [isMobile] = useMediaQuery("(max-width: 1000px)")
    const color = useColorModeValue('#36382E', '#F7F5FB')

    return <VStack
        w={'100%'}
        alignItems={isMobile ? 'center' : 'space-between'}
        spacing={7}
    >
        <Flex
            w={'100%'}
            alignItems={'center'}
        >
            <Phone width={'23px'} margin={'0'}/>
            <Text
                pl={'18px'}
                color={color}
                fontSize={'16px'}
                fontFamily={'"Jost", sans-serif'}
                _hover={{
                    color: "#F06449",
                    cursor: 'pointer'
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
            <Current width={'17px'} margin={'0'}/>
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
            <Data width={'21px'} margin={'0'}/>
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
            <WhatsApp width={'32px'} margin={'0px 20px 0px 0px'}/>
            <Telegram width={'32px'} margin={'0px 20px 0px 0px'}/>
            <Mail width={'32px'} margin={'0px 20px 0px 0px'}/>
        </Flex>
    </VStack>
}