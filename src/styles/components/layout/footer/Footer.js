import * as React from 'react'
import {Flex} from "@chakra-ui/react";


export const Footer = () => {
    return (
        <Flex
            as={'footer'}
            alignItems={'center'}
            justify={'center'}
            w={'100%'}
            h={'52px'}
            position={'relative'}
            bottom={0}
            left={0}
            zIndex={1000}
            bg={'blue'}
        >
            <Flex
                mw={'2000px'}
                p={'14px 20px'}
                w={'100%'}
                alignItems={'center'}
                justify={'right'}
            >
                grgbtb
            </Flex>

        </Flex>
    )
}