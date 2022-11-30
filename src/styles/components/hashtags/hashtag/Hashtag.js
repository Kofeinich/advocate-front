import * as React from 'react'
import {useState} from "react";
import {Flex, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {useEffect} from "react";


export const Hashtag = ({text}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const itemActiveColor = '#F06449'
    const [itemColor, setItemColor] = useState(color)
    const [isActive, setIsActive] = useState(0)
    useEffect(() => {
        setItemColor(color)
    },[useColorMode()])

    const handler = () => {
        setIsActive((isActive + 1) % 2);
        (isActive === 0) ? setItemColor(itemActiveColor) : setItemColor(color)
    }

    return <Flex
        alignItems={'center'}
        m={'10px'}
        p={'5px'}
        h={'40px'}
        border={`1px solid ${itemColor}`}
        onClick={() => handler()}
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
            #{text}
        </Text>
    </Flex>
}