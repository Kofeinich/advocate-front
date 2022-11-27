import * as React from "react"
import {useState} from "react";
import {Box} from "@chakra-ui/react";

export const Data = ({width, margin}) =>{
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
            viewBox="0 0 21 21"
            fill={itemColor}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 20.916c5.753 0 10.417-4.663 10.417-10.416S16.253.083 10.5.083.083 4.747.083 10.5 4.747 20.916 10.5 20.916Zm1.042-15.625a1.042 1.042 0 0 0-2.084 0v4.777c0 .553.22 1.083.61 1.473l2.82 2.82a1.041 1.041 0 0 0 1.473-1.473l-2.82-2.82V5.291Z"
                fill={itemColor}
            />
        </svg>
    </Box>
}