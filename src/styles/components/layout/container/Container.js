import * as React from 'react'
import {Flex, useColorModeValue, useMediaQuery} from "@chakra-ui/react";


export const Container = ({children}) => {
    const color = useColorModeValue( '#F7F5FB', '#36382E')
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    return (
        <Flex
            as={'main'}
            w={'100%'}
            flexGrow={1}
            flexDirection={'column'}
            position={'relative'}
            p={isMobile ? '10px':'20px'}
            left={0}
            top={'80px'}
            alignItems={'center'}
            bg={color}
        >
            {children}
        </Flex>
    )
};