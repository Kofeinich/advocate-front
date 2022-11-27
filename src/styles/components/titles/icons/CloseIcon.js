import * as React from "react"
import {Box, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export const CloseIcon = ({width, margin}) => {
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={itemColor}
            width={width}
            height={width}
        >
            <path
                d="M9.9 31.112 31.113 9.9M31.82 31.82 10.607 10.605"
                stroke={itemColor}
                strokeWidth={2}
            />
        </svg>
    </Box>
}