import React from 'react';
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Flex, Text, VStack, Button, Box, useColorModeValue,
} from "@chakra-ui/react";
import CloseButton from "../../../../../svg/orangecloseicon.svg" ;
import {Contacts} from "../contacts/Contacts";
import Logo from "../../../../../svg/logo.svg";
import {Switcher} from "../switcher/Switcher";

export const MobileHeader = ({click}) => {
    const bg = useColorModeValue('#F7F5FB', '#36382E')

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
                            onClick={click}
                        >
                            <CloseButton/>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <DrawerBody
                w={'100%'}
                bg={bg}
            >
                <VStack alignItems="left" spacing={2.5}>
                    <Contacts/>
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Flex>
}