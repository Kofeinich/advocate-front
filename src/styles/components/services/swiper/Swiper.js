import {Swiper, SwiperSlide} from "swiper/react";
import * as React from "react";
import {Box, useMediaQuery} from "@chakra-ui/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const StyledSwiper = () => {
    const [isMobile] = useMediaQuery("(max-width: 568px)")

    return <Box
        w={'100%'}
        maxW={'1120px'}
        position={'relative'}
        p={'20px'}
    >
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={isMobile ? 1 : 3}
            autoplay={true}
            navigation
            lazy={true}
            speed={500}
            loop={true}
        >
            <SwiperSlide>
                <Box m={'30px'} bg={'red'} h={'200px'}/>
            </SwiperSlide>
            <SwiperSlide>
                <Box  m={'30px'} bg={'red'} h={'200px'}/>
            </SwiperSlide>
            <SwiperSlide>
                <Box  m={'30px'} bg={'red'} h={'200px'} />
            </SwiperSlide>
            <SwiperSlide>
                <Box  m={'30px'} bg={'blue'} h={'200px'} />
            </SwiperSlide>
        </Swiper>
    </Box>
}