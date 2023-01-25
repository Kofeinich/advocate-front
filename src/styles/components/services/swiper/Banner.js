import * as React from 'react'
import {Flex, Text, useColorModeValue, useMediaQuery} from "@chakra-ui/react";

export const Banner = ({price}) => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    const color = useColorModeValue('#474747', '#F7F5FB')
    return <Flex
        position={isMobile ? 'relative' : 'absolute'}
        bottom={'15px'}
        left={0}
        w={'100%'}
        alignItems={'center'}
        justify={'center'}
    >
        <Flex
            mt={'20px'}
            alignItems={'center'}
            justify={'center'}
            w={'107px'}
            h={'50px'}
            gap={'10px'}
            border={`1px solid ${color}`}
        >
            <Text
                color={color}
            >
                {price}
            </Text>
        </Flex>
    </Flex>
}