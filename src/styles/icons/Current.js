import * as React from "react"
import {useState} from "react";
import {Box} from "@chakra-ui/react";

export const Current = ({width, margin}) => {
    const itemStaticColor = '#F06449'
    const itemHoverColor = '#ED4525'
    const [itemColor, setItemColor] = useState(itemStaticColor)
    return <Box
        w={width}
        m={margin}
        // _hover={{
        //     cursor: 'pointer'
        // }}
        // onMouseOver={(target) => {
        //     setItemColor(itemHoverColor)
        // }}
        // onMouseLeave={() => {
        //     setItemColor(itemStaticColor)
        // }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 21"
            fill={itemColor}
        >
            <path
                d="M8.5 0A8.343 8.343 0 0 0 .167 8.333c0 3.391 2.461 6.207 5.068 9.187.825.944 1.68 1.92 2.44 2.907a1.043 1.043 0 0 0 1.65 0c.76-.987 1.615-1.963 2.44-2.907 2.607-2.98 5.068-5.796 5.068-9.187A8.343 8.343 0 0 0 8.5 0Zm0 11.458a3.125 3.125 0 1 1 0-6.25 3.125 3.125 0 0 1 0 6.25Z"
                fill={itemColor}
            />
        </svg>
    </Box>
}