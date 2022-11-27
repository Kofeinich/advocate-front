import * as React from 'react'
import {Button, Flex, useColorModeValue} from "@chakra-ui/react";
import { Link } from "gatsby"
import Logo from "../../../../svg/logo.svg";
import Arrow from "../../../../svg/arrow.svg"

export const PracticeHeader = () => {
    const bg = useColorModeValue('#F7F5FB', '#36382E')
    return <Flex
        as={'header'}
        w={'100%'}
        h={'80px'}
        position={'fixed'}
        top={0}
        left={0}
        zIndex={2000}
        bg={bg}
        justify={'center'}
        alignItems={'center'}
        p={'15px'}
    >
        <Flex
            w={'100%'}
            maxW={'1400px'}
            justify={'left'}
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
            <Link to='/'>
                <Button
                    borderRadius={'none'}
                    alignItems={'center'}
                    justify={'center'}
                    ml={'30px'}
                    leftIcon= {<Arrow/>}
                    w={'178px'}
                    h={'52px'}
                    color={'#474747'}
                    bg={'#FFC759'}
                    fontFamily={`'Jost', sans-serif`}
                    fontWeight={400}
                    fontSize={'16px'}
                    _hover={{
                        cursor: 'pointer',
                        bg: "#F06449"
                    }}
                >
                    На главную
                </Button>
            </Link>
        </Flex>
    </Flex>
}