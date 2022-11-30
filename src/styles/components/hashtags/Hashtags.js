import * as React from 'react'
import {Flex, useColorModeValue} from "@chakra-ui/react";
import {Hashtag} from "./hashtag/Hashtag";
import {Strokes} from "./strokes/Strokes";


export const Hashtags = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    return <Flex
        position={'relative'}
        justify={'center'}
        alignItems={'center'}
        w={'100%'}
    >
        <Flex
            position={'relative'}
            justify={'center'}
            alignItems={'center'}
            w={'100%'}
            maxW={'1200px'}
            p={'0px 10px'}
        >
            <Strokes t={'40px'}/>
            <Strokes b={'40px'}/>
            <Flex
                position={'relative'}
                justify={'center'}
                alignItems={'center'}
                w={'100%'}
                borderLeft={`1px solid ${color}`}
                borderRight={`1px solid ${color}`}
                p={'80px 20px'}
            >
                <Flex
                    w={'100%'}
                    justify={'left'}
                    flexWrap={'wrap'}
                >
                    <Hashtag text='арбитраж'></Hashtag>
                    <Hashtag text='раздел_имущества'></Hashtag>
                    <Hashtag text='наследственные_споры'></Hashtag>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}