import * as React from "react"
import {useState} from "react";
import {Box, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {useEffect} from "react";

export const ArrowLeft = ({width, margin}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const itemHoverColor = '#F06449'
    const [itemColor, setItemColor] = useState(color)
    useEffect(() => {
        setItemColor(color)
    },[useColorMode()])
    return <Box
        w={width}
        m={margin}
        _hover={{
            cursor: 'pointer'
        }}
        onMouseOver={(target) => {
            setItemColor(itemHoverColor)
        }}
        onMouseLeave={() => {
            setItemColor(color)
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 22" fill="none">
            <path d="M11.4985 2L2.30615 11.1924L11.4985 20.3848" stroke={itemColor} strokeWidth="2" strokeLinecap="square"/>
            <path d="M4 11.4424H44" stroke={itemColor} strokeWidth="2" strokeLinecap="square"/>
        </svg>
    </Box>
}