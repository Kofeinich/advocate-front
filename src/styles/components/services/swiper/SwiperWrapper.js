import {Swiper, SwiperSlide} from "swiper/react";
import * as React from "react";
import {Box, Text, Flex, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard} from 'swiper';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../swiper/swiper.css"
import {SwiperItem} from "./slide/SwiperItem";
import {texts} from "../../../../texts/texts"
import {ArrowLeft} from "../../../icons/ArrowLeft";
import {ArrowRight} from "../../../icons/ArrowRight";
import {useCallback, useRef} from "react";
import {Link} from "gatsby";


export const SwiperWrapper = () => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    const color = useColorModeValue('#474747', '#F7F5FB')

    const swiperRef = useRef(null);

    const prevSlide = useCallback(() => {
        swiperRef.current?.swiper.slidePrev();
    }, [swiperRef]);

    const nextSlide = useCallback(() => {
        swiperRef.current?.swiper.slideNext();
    }, [swiperRef]);

    let numberOfSlides;
    if (isMobile) {
        numberOfSlides = 1
    } else {
        numberOfSlides = 3
    }


    return <>
        <Box
            w={'100%'}
            maxW={'1120px'}
            m={'70px 0px'}
            position={'relative'}
            borderTop={`1px solid ${color}`}
            borderBottom={`1px solid ${color}`}
        >
            {texts.main.service.length > 0 ?
                <Swiper
                    ref={swiperRef}
                    className={'my-slider'}
                    centeredSlides={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard]}
                    spaceBetween={0}
                    slidesPerView={numberOfSlides}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    lazy={true}
                    speed={800}
                    loop={true}
                >
                    {texts.main.service.map((item, index) =>
                        <SwiperSlide key={index} className={'my-slide'}>
                            <SwiperItem key={index} service={item}/>
                        </SwiperSlide>
                    )}
                </Swiper>
                :
                <></>
            }
        </Box>
        <Flex
            justify={'space-between'}
            mb={'50px'}
            p={'0px 50px'}
        >
            <Flex w={'200px'}></Flex>
            <Flex
                justify={'center'}
                w={'200px'}
            >
                <div
                    onClick={prevSlide}
                >
                    <ArrowLeft
                        width={'50px'}
                        margin={'0px 20px 0px 0px'}/>
                </div>
                <div
                    onClick={nextSlide}
                >
                    <ArrowRight
                        width={'50px'}
                        margin={'0px 0px 0px 20px'}
                    />
                </div>
            </Flex>
            <Flex
                justify={'right'}
                w={'200px'}
            >

                <Link to='/prices'>
                    <Text
                        _hover={{
                            cursor: 'pointer',
                            color: '#F06449'
                        }}
                    >
                        Подробнее
                    </Text>
                </Link>

                <Link to='/prices'>
                    <ArrowRight
                        width={'45px'}
                        margin={'0px 0px 0px 20px'}
                    />
                </Link>
            </Flex>
        </Flex>
    </>
}
