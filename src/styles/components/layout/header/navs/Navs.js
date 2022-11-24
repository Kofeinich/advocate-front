import {Text, useColorModeValue} from "@chakra-ui/react";
import * as React from 'react'


export const Navs = ({text}) => {

    const color = useColorModeValue('#36382E', '#F7F5FB')

    return <Text
        as={'p'}
        color={color}
        fontFamily={'"Jost", sans-serif'}
        fontSize={'18px'}
        p={'0 30px'}
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