import * as React from 'react'
import {Box, Heading, useColorModeValue} from "@chakra-ui/react";


export const HeadingStyled = ({text}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const backColor = useColorModeValue('rgba(255, 199, 89, 0.3)', '#474747')

    return <Box
        position={'relative'}
        w={'100%'}
        textAlign={'left'}
    >
        <Heading
            fontWeight={'400'}
            zIndex={100}
            position={'relative'}
            top={0}
            left={0}
            as={'h2'}
            color={color}
            fontSize={'32px'}
            lineHeight={'42px'}
            fontFamily={`'Prata', serif`}
        >
            {text}
        </Heading>
        <Box
            position={'absolute'}
            top={'-20px'}
            left={'20px'}
            color={backColor}
            fontSize={'40px'}
            lineHeight={'63px'}
            fontFamily={`'Prata', serif`}
        >
            {text}
        </Box>
    </Box>
}