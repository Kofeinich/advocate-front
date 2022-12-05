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
            <a href='tel:+79180675105'>
                <Phone width={'23px'} margin={'0'}/>
            </a>
            <a href='tel:+79180675105'>
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
            </a>
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
            justify={isMobile ? 'center' : 'left'}
            alignItems={'center'}
        >
            <a href="https://skobelkin.ru/whatsapp/79180675105?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82,+%D1%8F+%D1%81+%D1%81%D0%B0%D0%B9%D1%82%D0%B0" target="_blank" rel="external">
                <WhatsApp width={'32px'} margin={'0px 20px 0px 0px'}/>
            </a>
            <a className={'link'} href="https://tlgg.ru/konyukhov_vladimir" target="_blank" rel="external">
                <Telegram width={'32px'} margin={'0px 20px 0px 0px'}/>
            </a>
            <a href="mailto:kvr165@mail.ru" target="_blank" rel="external">
                <Mail width={'32px'} margin={'0px 20px 0px 0px'}/>
            </a>
        </Flex>
    </VStack>
}
