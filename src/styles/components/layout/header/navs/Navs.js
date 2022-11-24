import {Text, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import * as React from 'react'


export const Navs = ({text}) => {

    const color = useColorModeValue('#36382E', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 1100px)")

    return <Text
        as={'p'}
        color={color}
        fontFamily={isMobile ? 'Prata' :'"Jost", sans-serif'}
        fontSize={isMobile ? '28px' : '18px'}
        p={isMobile ? '0' : '0 30px'}
        _hover={{
            color: "#F06449"
        }}
        _active={{
            color: "#F06449"
        }}
        _focus={{
            color: "#F06449"
        }}
    >
        {text}
    </Text>
}