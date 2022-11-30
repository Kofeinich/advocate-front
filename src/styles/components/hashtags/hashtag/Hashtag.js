import * as React from 'react'
import {useState} from "react";
import {Box, Flex, Text, useColorMode, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {useEffect} from "react";
import Basket from "../../../../svg/basket.svg"

export const Hashtag = ({tag, onChangeStatus, variant}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 440px)")
    const itemActiveColor = '#F06449'
    const [itemColor, setItemColor] = useState(color)


    useEffect(() => {
        (tag.isActive !== false) ? setItemColor(itemActiveColor) : setItemColor(color)
    },[useColorMode(), tag.isActive ])


    return <Flex
        alignItems={'center'}
        justify={(variant === 2) ? 'space-between' : 'center'}
        m={isMobile ? '2px' : '10px'}
        p={'5px'}
        h={'40px'}
        border={`1px solid ${itemColor}`}
        onClick={() => {
            onChangeStatus(tag.id)
        }}
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
        {
            variant === 2 ?
                <Box
                    w={'20px'}
                    ml={'10px'}
                >
                    <Basket/>
                </Box>
                :
                <></>
        }
    </Flex>
}