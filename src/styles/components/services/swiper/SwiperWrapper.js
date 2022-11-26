import {Swiper, SwiperSlide} from "swiper/react";
import * as React from "react";
import {Box, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../swiper/swiper.css"
import {SwiperItem} from "./slide/SwiperItem";


export const SwiperWrapper = () => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    const color = useColorModeValue('#474747', '#F7F5FB')

    const texts = [
        {
            title: "Арбитражные дела",
            text: "Возмещение убытков, неисполнение обязательств по договору, заключение, расторжение, отказ от договора и т.д.",
        },
        {
            title: "Семейные споры",
            text: "Расторжение брака, оспаривание отцовства, составление брачного договора, выделение супружеской доли и т.д.",
        },
        {
            title: "Раздел имущества",
            text: "небольшой текст где кратко и понятно об этих делах, но я пожалуй тут еще напишу че нибудь",
        },
        {
            title: "Раздел имущества 2",
            text: "fffffffнебольшой текст где кратко и понятно об этих делах, но я пожалуй тут еще напишу че нибудь",
        }
    ]


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
        {texts.length > 0 ?
            <Swiper
                className={'my-slider'}
                centeredSlides={true}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={numberOfSlides}
                autoplay={true}
                // navigation
                // lazy={true}
                speed={2000}
                loop={true}
            >
                {texts.map((item, index) =>
                    <SwiperSlide key={index} className={'my-slide'}>
                        <SwiperItem text={item.text} title={item.title}/>
                    </SwiperSlide>
                )}
            </Swiper>
            :
            <></>
        }
    </Box>
}