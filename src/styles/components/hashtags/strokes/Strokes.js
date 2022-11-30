import {Box, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";


export const Strokes =({t,b}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    return <Box
        zIndex={'900'}
        width={'100%'}
        height={'1px'}
        position={'absolute'}
        top={t}
        bottom={b}
        left={0}
        bg={color}
    />
}