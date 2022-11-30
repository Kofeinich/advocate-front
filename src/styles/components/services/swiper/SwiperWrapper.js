import {Swiper, SwiperSlide} from "swiper/react";
import * as React from "react";
import {Box, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard} from 'swiper';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../swiper/swiper.css"
import {SwiperItem} from "./slide/SwiperItem";
import {texts} from "../../../../texts/texts"


export const SwiperWrapper = () => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    const color = useColorModeValue('#474747', '#F7F5FB')

    let numberOfSlides;
    if (isMobile) {
        numberOfSlides = 1
    } else {
        numberOfSlides = 3
    }



    return <Box
        w={'100%'}
        maxW={'1120px'}
        m={'70px 0px'}
        position={'relative'}
        borderTop={`1px solid ${color}`}
        borderBottom={`1px solid ${color}`}
    >
        {texts.main.service.length > 0 ?
            <Swiper
                className={'my-slider'}
                centeredSlides={true}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard]}
                spaceBetween={0}
                slidesPerView={numberOfSlides}
                keyboard={{
                    enabled: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                lazy={true}
                speed={800}
                loop={true}
            >
                {texts.main.service.map((item, index) =>
                    <SwiperSlide key={index} className={'my-slide'}>
                        <SwiperItem service={item}/>
                    </SwiperSlide>
                )}
            </Swiper>
            :
            <></>
        }
    </Box>
}