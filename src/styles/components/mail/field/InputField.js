import {Field} from "formik";
import * as React from 'react'
import {useColorModeValue, useMediaQuery} from "@chakra-ui/react";


export const InputField = ({placeholder, name, type}) => {
    const placeholderColor = useColorModeValue('rgba(54,46,46, .5 )', 'rgba(247,245,251, .5 )')
    const color = useColorModeValue('#36382E', '#F7F5FB')
    const bg = useColorModeValue('#F7F5FB', '#36382E')
    const [isMobile] = useMediaQuery("(max-width: 1100px)")

    return <Field
        style={{
            _placeholder: {
                color: `${placeholderColor}`,
            },
            _valid: {
                background: 'green'
            },
            padding: '5px 15px',
            fontSize: '16px',
            color: `${color}`,
            border: `1px solid ${placeholderColor}`,
            borderOpacity: 0.5,
            lineHeight: '150%',
            background: `${bg}`,
            width: isMobile ? '280px' : '516px',
            height: '56px'
        }}
        placeholder={placeholder}
        name={name}
        type={type}
    />
}