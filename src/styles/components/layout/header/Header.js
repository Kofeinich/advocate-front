import * as React from 'react'
import {Flex} from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex
            as={'header'}
            w={'100%'}
            h={'80px'}
            position={'fixed'}
            top={0}
            left={0}
            zIndex={1000}
            bg={'red'}
        >

        </Flex>
    )
}