import {Box, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";


export const MobileStroke = ({r,l}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    return <Box
        zIndex={'900'}
        width={'1px'}
        height={'850px'}
        position={'absolute'}
        top={'-20px'}
        right={r}
        left={l}
        bg={color}
    />
}