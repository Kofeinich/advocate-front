import * as React from 'react'
import {Flex, useColorModeValue} from "@chakra-ui/react";


export const Container = ({children}) => {
    const color = useColorModeValue( '#F7F5FB', '#36382E')

    return (
        <Flex
            as={'main'}
            w={'100%'}
            flexGrow={1}
            flexDirection={'column'}
            position={'relative'}
            p={'20px'}
            left={0}
            top={'80px'}
            alignItems={'center'}
            bg={color}
        >
            {children}
        </Flex>
    )
};