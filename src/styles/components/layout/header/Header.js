import * as React from 'react'
import {Flex, Drawer, useColorModeValue, useDisclosure, useMediaQuery,} from "@chakra-ui/react";
import Logo from "../../../../svg/logo.svg" ;
import MenuIcon from "../../../../svg/menuicon.svg"
import {Contacts} from "./contacts/Contacts";
import {Switcher} from "./switcher/Switcher";
import {Navs} from "./navs/Navs";
import {MobileHeader} from './mobile-header/MobileHeader';

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef();
    const [isMobile] = useMediaQuery("(max-width: 1100px)")
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
            {
                isMobile
                    ?
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
                                p={'0 10px'}
                                w={'50px'}
                                onClick={onOpen}
                            >
                                <MenuIcon/>
                            </Flex>
                        </Flex>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <MobileHeader click={onClose}/>
                        </Drawer>
                    </Flex>
                    :
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
            }
        </Flex>
    )
}