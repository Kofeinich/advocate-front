import {Box, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import {SwiperSlide} from "swiper/react";
import * as React from "react";


export const SwiperItem = ({title, text}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')

    return <Box
        w={'294px'}
        h={'264px'}
        m={'30px 0 0 0'}
        // p={'12px'}
    >
        <Heading
            textAlign={'center'}
            as={'h3'}
            lineHeight={'30px'}
            fontSize={'20px'}
            fontWeight={'400'}
            fontFamily={`'Jost', sans-serif`}
            color={'#F06449'}
        >
            {title}
        </Heading>
        <Text
            textAlign={'justify'}
            lineHeight={'24px'}
            fontSize={'16px'}
            fontWeight={'400'}
            fontFamily={`'Jost', sans-serif`}
            color={color}
            pt={'10px'}

        >
            {text}
        </Text>
    </Box>
}