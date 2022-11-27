import * as React from "react"
import {useState} from "react";
import {Box} from "@chakra-ui/react";

export const Phone = ({width, margin}) => {
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
            viewBox="0 0 23 23"
            fill={itemColor}
        >
            <path
                d="M9.325 5.3C9.027 1.867 5.445.183 5.294.114a.76.76 0 0 0-.455-.06C.705.738.083 3.145.058 3.245a.773.773 0 0 0 .015.421c4.932 15.3 15.18 18.136 18.549 19.07.26.071.473.129.636.182.185.06.387.049.564-.033.103-.047 2.537-1.194 3.133-4.934a.779.779 0 0 0-.075-.478c-.053-.104-1.327-2.527-4.858-3.383a.764.764 0 0 0-.69.164c-1.115.951-2.654 1.966-3.318 2.07C9.563 14.15 7.077 9.972 6.983 9.18c-.055-.445.965-2.01 2.139-3.281a.78.78 0 0 0 .203-.599Z"
                fill={itemColor}
            />
        </svg>
    </Box>
}