import {Box, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";


export const DesktopStroke = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    return <Box
        zIndex={'900'}
        width={'1px'}
        height={'338px'}
        position={'absolute'}
        top={'-20px'}
        right={'0%'}
        bg={color}
    />
}