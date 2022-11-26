import * as React from 'react'
import {Button} from "@chakra-ui/react";

export const ButtonStyled = ({text}) => {
    return <Button
        w={'171px'}
        h={'55px'}
        color={'#F7F5FB'}
        border={'1px solid #F06449'}
        justify={'center'}
        alignItems={'center'}
        borderRadius={0}
        bg={'#F06449'}
        fontWeight={'400'}
        letterSpacing={'-0.011em'}
        fontFamily={`'Jost', sans-serif`}
        _hover={{
            background: '#ED4525',
        }}
        _focus={{
            background: '#ED4525',
        }}
        _disabled={{
            background: '#C68073',
            color: '#636363'
        }}
    >
        {text}
    </Button>
}