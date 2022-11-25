import * as React from 'react'
import {Container} from "./container/Container";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Flex, useColorModeValue} from "@chakra-ui/react";

export const Layout = ({children}) => {
    const color = useColorModeValue( '#F7F5FB', '#36382E')
    return (
        <Flex
            position={'relative'}
            w={'100%'}
            flexDirection={'column'}
            bg={color}
        >
            <Header />
            <Container>{children}</Container>
            {/*<Footer />*/}
        </Flex>
    );
}