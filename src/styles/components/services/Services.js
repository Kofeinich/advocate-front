import * as React from 'react'
import {Flex, useMediaQuery} from "@chakra-ui/react";
import {HeadingStyled} from "../styled/HeadingStyled";
import 'swiper/css';
import {SwiperWrapper} from "./swiper/SwiperWrapper";
import {MobileStack} from "./swiper/MobileStack";


export const Services = () => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    return <Flex
        as={'section'}
        w={'100%'}
        maxW={'1120px'}
        flexDirection={'column'}
        position={'relative'}
        top={'30px'}
    >
        <HeadingStyled text={'Услуги'}/>
        {isMobile
            ?
            <MobileStack/>
            :
            <SwiperWrapper/>
        }
    </Flex>
}