import * as React from 'react'
import {Flex, Text, useMediaQuery} from "@chakra-ui/react";
import {HeadingStyled} from "../styled/HeadingStyled";
import 'swiper/css';
import {SwiperWrapper} from "./swiper/SwiperWrapper";
import {MobileStack} from "./swiper/MobileStack";
import {ArrowRight} from "../../icons/ArrowRight";
import {Link} from "gatsby";

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
            <>
                <MobileStack/>
                <Flex
                    p={0}
                    justify={'right'}
                    w={'100%'}
                    mb={'30px'}
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
            </>
            :
            <SwiperWrapper/>
        }
    </Flex>
}
