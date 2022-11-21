import * as React from 'react'
import {Flex} from "@chakra-ui/react";


export const Container = ({children}) => {
    return (
        <Flex
            as={'main'}
            w={'100%'}
            flexGrow={1}
            flexDirection={'column'}
            position={'relative'}
            p={'20px'}
            left={0}
            top={'80px'}
            alignItems={'center'}
        >
            {children}
        </Flex>
    )
};