import * as React from 'react'
import {Flex, useMediaQuery} from "@chakra-ui/react";
import {HeadingStyled} from "../styled/HeadingStyled";
import 'swiper/css';
import {SwiperWrapper} from "./swiper/SwiperWrapper";
import {MobileStack} from "./swiper/MobileStack";

export const Services = () => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    return <Flex
        mt={'50px'}
        as={'section'}
        w={'100%'}
        maxW={'1120px'}
        flexDirection={'column'}
        position={'relative'}
        top={'30px'}
    >
        <Flex
            position={"absolute"}
            top={'-80px'}
            id={"service"}
        >

        </Flex>
        <HeadingStyled text={'Услуги'} id={'services'}/>
        {isMobile
            ?
            <MobileStack/>
            :
            <SwiperWrapper/>
        }
    </Flex>
}
