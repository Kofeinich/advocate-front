import * as React from 'react'
import {Box, Flex, Text, useColorMode, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import Logo from "../../../../svg/logo.svg" ;
import {Contacts} from "./contacts/Contacts";
import {Switcher} from "./switcher/Switcher";

export const Header = () => {
    const {colorMode} = useColorMode()
    const [isMobile] = useMediaQuery("(max-width: 768px)")

    const bg = useColorModeValue('#F7F5FB', '#36382E')
    const color = useColorModeValue('#474747', '#F7F5FB')

    return (
        <Flex
            as={'header'}
            w={'100%'}
            h={'80px'}
            position={'fixed'}
            top={0}
            left={0}
            zIndex={1000}
            bg={bg}
            justify={'center'}
            alignItems={'center'}
            p={'15px'}
        >
            <Flex
                maxW={'1200px'}
                justify={'space-between'}
            >
                <Flex
                    justify={'left'}
                    minW={'600px'}
                    alignItems={'center'}
                >
                    <Flex
                        justify={'center'}
                        alignItems={'center'}
                        p={'0 10px'}
                        w={'50px'}
                    >
                        <Logo/>
                    </Flex>
                    <Text
                        p={'0 30px'}
                    >
                        Моя практика
                    </Text>
                    <Text
                        p={'0 30px'}
                    >
                        Моя практика
                    </Text>
                    <Text
                        p={'0 30px'}
                    >
                        Оставить заявку
                    </Text>
                    <Text
                        p={'0 30px'}
                    >
                        Контакты
                    </Text>
                </Flex>
                <Flex
                    minW={'400px'}
                    alignItems={'center'}
                    justify={'right'}

                >
                    <Switcher/>
                    <Contacts/>
                </Flex>
            </Flex>

        </Flex>
    )
}