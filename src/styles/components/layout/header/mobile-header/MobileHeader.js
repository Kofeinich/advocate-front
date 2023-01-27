import React from 'react';
import {
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Flex,
    VStack,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react";
import CloseButton from "../../../../../svg/orangecloseicon.svg" ;
import {Contacts} from "../contacts/Contacts";
import Logo from "../../../../../svg/logo.svg";
import {Switcher} from "../switcher/Switcher";
import {Navs} from "../navs/Navs";
import scrollTo from "gatsby-plugin-smoothscroll";
import {Link} from "gatsby";

export const MobileHeader = ({onClose}) => {
    const bg = useColorModeValue('#F7F5FB', '#36382E')
    const color = useColorModeValue('#474747', '#F7F5FB')

    return <Flex w={'100%'}>
        <DrawerOverlay/>
        <DrawerContent
            maxW={'420px'}
            w={'100vw'}
        >
            <Flex
                p={'15px'}
                w={'100%'}
                h={'80px'}
                justify={'center'}
                alignItems={'center'}
                bg={bg}
            >
                <Flex
                    w={'100%'}
                    justify={'space-between'}
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
                    <Flex
                        justify={'right'}
                    >
                        <Flex
                            justify={'center'}
                            alignItems={'center'}
                            p={'0 10px'}
                            w={'50px'}
                            mr={'10px'}
                        >
                            <Switcher/>
                        </Flex>
                        <Flex
                            justify={'center'}
                            alignItems={'center'}
                            w={'43px'}
                            onClick={onClose}
                        >
                            <CloseButton/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <DrawerBody
                w={'100%'}
                bg={bg}
                textAlign={'center'}
            >
                <Heading
                    as={'h2'}
                    h={'60px'}
                    lineHeight={'60px'}
                    fontFamily={'Prata'}
                    fontSize={'40px'}
                    fontWeight={400}
                    color={color}
                >
                    Меню
                </Heading>
                <VStack mt={'20px'} alignItems="left" spacing={3.5}>
                    <button  onClick={() => {
                        scrollTo('#service')
                        onClose()
                    }}
                    >
                        <Navs text={'Услуги'}/>
                    </button>
                    <button  onClick={() => {
                        scrollTo('#practice')
                        onClose()
                    }}
                    >
                        <Navs text={'Моя практика'}/>
                    </button>
                    <button onClick={() => {
                        scrollTo('#contacs')
                        onClose()
                    }}
                    >
                        <Navs text={'Оставить заявку'}/>
                    </button>
                    <button  onClick={() => {
                        scrollTo('#contacs')
                        onClose()
                    }}
                    >
                        <Navs text={'Контакты'}/>
                    </button>
                    <Link to='/prices'>
                        <Navs text={'Цены'}></Navs>
                    </Link>
                    <Contacts/>
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Flex>
}
