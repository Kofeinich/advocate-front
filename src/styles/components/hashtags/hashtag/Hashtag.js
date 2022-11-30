import * as React from 'react'
import {useState} from "react";
import {Flex, Text, useColorMode, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {useEffect} from "react";

export const Hashtag = ({tag, onChangeStatus}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 440px)")
    const itemActiveColor = '#F06449'
    const [itemColor, setItemColor] = useState(color)


    useEffect(() => {
        setItemColor(color)
    },[useColorMode()])

    // const handler = () => {
    //     onChangeStatus(tag)
    //     (tag.isActive === 0) ? setItemColor(itemActiveColor) : setItemColor(color)
    // }

    return <Flex
        alignItems={'center'}
        m={isMobile ? '2px' : '10px'}
        p={'5px'}
        h={'40px'}
        border={`1px solid ${itemColor}`}
        onClick={() => onChangeStatus(tag.id)}
        _hover={{
            cursor: 'pointer'
        }}
    >
        <Text
            fontFamily={`'Jost', sans-serif`}
            fontWeight={400}
            fontSize={'16px'}
            color={itemColor}
        >
            #{tag.text}
        </Text>
    </Flex>
}