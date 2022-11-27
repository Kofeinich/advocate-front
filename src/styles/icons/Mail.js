import * as React from "react"
import {useState} from "react";
import {Box} from "@chakra-ui/react";

export const Mail = ({width, margin}) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5 11c0 6.075-4.925 11-11 11S.5 17.075.5 11s4.925-11 11-11 11 4.925 11 11Zm-19 4.978 4.535-4.535L3.5 6.908v9.07Zm6.643-4.237L4.4 6H18.6l-5.741 5.741c-.725.726-1.99.726-2.715 0Zm3.62.905a3.177 3.177 0 0 1-2.263.938 3.178 3.178 0 0 1-2.263-.938l-.297-.297-4.531 4.53H18.59l-4.531-4.53-.298.297Zm5.737 3.332-4.535-4.535L19.5 6.908v9.07Z"
                fill={itemColor}
            />
        </svg>
    </Box>
}