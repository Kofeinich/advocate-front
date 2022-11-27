import * as React from "react"
import {useState} from "react";
import {Box} from "@chakra-ui/react";

export const WhatsApp = ({width, margin}) => {
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
                d="M11.503 0h-.006C5.432 0 .5 4.933.5 11a10.918 10.918 0 0 0 2.094 6.447l-1.37 4.087 4.227-1.352A10.904 10.904 0 0 0 11.503 22C17.568 22 22.5 17.065 22.5 11S17.568 0 11.503 0Zm6.4 15.533c-.265.75-1.318 1.371-2.158 1.553-.575.122-1.326.22-3.853-.828-3.233-1.34-5.314-4.624-5.477-4.837-.155-.213-1.306-1.74-1.306-3.318 0-1.579.802-2.347 1.125-2.677.265-.271.704-.395 1.125-.395.136 0 .258.007.368.012.323.014.485.033.699.544.265.639.911 2.217.988 2.38.079.162.157.382.047.595-.103.22-.194.318-.356.505-.162.187-.316.33-.479.53-.148.175-.316.362-.129.685.187.316.833 1.371 1.785 2.218 1.228 1.093 2.223 1.443 2.58 1.591.265.11.58.084.775-.122.246-.266.55-.706.86-1.139.22-.31.497-.35.788-.24.297.104 1.869.88 2.192 1.042.323.162.536.239.615.375.077.136.077.776-.189 1.526Z"
                fill={itemColor}
            />
        </svg>
    </Box>
}