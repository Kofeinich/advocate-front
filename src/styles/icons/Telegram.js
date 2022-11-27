import * as React from "react"
import {useState} from "react";
import {Box} from "@chakra-ui/react";

export const Telegram = ({width, margin}) =>{
    const itemStaticColor = '#F06449'
    const itemHoverColor = '#ED4525'
    const [itemColor, setItemColor] = useState(itemStaticColor)
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
            setItemColor(itemStaticColor)
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 22"
            fill={itemColor}
        >
            <path
                d="M11.5 0a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm3.498 16.668a.777.777 0 0 1-1.103.386l-2.986-2.32-1.916 1.768a.33.33 0 0 1-.314.043l.367-3.287.012.01.008-.066s5.373-4.892 5.592-5.1c.222-.208.149-.254.149-.254.012-.253-.398 0-.398 0l-7.12 4.58-2.965-1.009s-.455-.163-.498-.522c-.045-.357.513-.55.513-.55l11.789-4.684s.969-.431.969.284l-2.1 10.72Z"
                fill={itemColor}
            />
        </svg>
    </Box>
}