import * as React from 'react'
import {Container} from "./container/Container";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Flex} from "@chakra-ui/react";

export const Layout = ({children}) => {
    return (
        <Flex
            position={'relative'}
            w={'100%'}
            flexDirection={'column'}
        >
            <Header />
            <Container>{children}</Container>
            <Footer />
        </Flex>
    );
}