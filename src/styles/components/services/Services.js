import * as React from 'react'
import {Flex} from "@chakra-ui/react";
import {HeadingStyled} from "../styled/HeadingStyled";
import 'swiper/css';
import {StyledSwiper} from "./swiper/Swiper";


export const Services = () => {
    return <Flex
        as={'section'}
        w={'100%'}
        maxW={'1120px'}
        flexDirection={'column'}
        position={'relative'}
        top={'30px'}
    >
        <HeadingStyled text={'Услуги'}/>
        <StyledSwiper/>
    </Flex>
}