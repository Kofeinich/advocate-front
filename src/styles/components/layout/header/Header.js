import * as React from 'react'
import {Flex, useColorModeValue,} from "@chakra-ui/react";
import Logo from "../../../../svg/logo.svg" ;
import {Contacts} from "./contacts/Contacts";
import {Switcher} from "./switcher/Switcher";
import {Navs} from "./navs/Navs";

export const Header = () => {

    const bg = useColorModeValue('#F7F5FB', '#36382E')

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
                w={'100%'}
                maxW={'1400px'}
                justify={'space-between'}
            >
                <Flex
                    as={'nav'}
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
                    <Navs text={'Услуги'}/>
                    <Navs text={'Моя практика'}/>
                    <Navs text={'Оставить заявку'}/>
                    <Navs text={'Контакты'}/>
                </Flex>
                <Flex
                    minW={'300px'}
                    alignItems={'center'}
                    justify={'right'}

                >
                    <Switcher/>
                    <Flex
                        alignItems={'center'}
                    >
                        <Contacts/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}