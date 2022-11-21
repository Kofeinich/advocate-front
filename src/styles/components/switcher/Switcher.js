import {Heading, useColorModeValue, useColorMode} from "@chakra-ui/react";
import * as React from "react";

export const Switcher = () => {
    const { colorMode } = useColorMode()
    return <Heading as={'h1'} color={`mode.${colorMode}.heading3`}>
        Hero
    </Heading>
}