import * as React from 'react'
import {Flex, useColorModeValue} from "@chakra-ui/react";


export const Footer = () => {
    const bg = useColorModeValue('#F7F5FB', '#36382E')
    const color = useColorModeValue('#474747', '#F7F5FB')
    return (
        <Flex
            mt={'100px'}
            as={'footer'}
            alignItems={'center'}
            justify={'center'}
            w={'100%'}
            position={'relative'}
            bottom={0}
            left={0}
            zIndex={1000}
            bg={bg}
        >
            <Flex
                h={'52px'}
                top={0}
                left={0}
                position={'relative'}
                mw={'2000px'}
                p={'14px 20px'}
                w={'100%'}
                alignItems={'center'}
                justify={'right'}
                color={color}
                borderTop={`1px solid ${color}`}
                as={'p'}
                fontFamily={'"Jost", sans-serif'}
                fontSize={'16px'}
            >
                © 2019-2022 Все права защищены
            </Flex>

        </Flex>
    )
}