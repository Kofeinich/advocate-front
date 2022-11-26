import {Box, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import {SwiperSlide} from "swiper/react";
import * as React from "react";


export const SwiperItem = ({title, text}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')

    return <Box
        position={'relative'}
        w={'274px'}
        h={'184px'}
        top={'0'}
        m={'0'}
        borderRight={`1px solid ${color} `}
        borderLeft={`1px solid ${color} `}
    >
        {/*<Box*/}
        {/*    zIndex={1000000}*/}
        {/*    position={'absolute'}*/}
        {/*    top={'-50px'}*/}
        {/*    right={'-50.5px'}*/}
        {/*    h={'274px'}*/}
        {/*    w={'1px'}*/}
        {/*    bg={color}*/}
        {/*/>*/}
        {/*<Box*/}
        {/*    zIndex={1000000}*/}
        {/*    position={'absolute'}*/}
        {/*    top={'-50px'}*/}
        {/*    left={'-50.5px'}*/}
        {/*    h={'274px'}*/}
        {/*    w={'1px'}*/}
        {/*    bg={color}*/}
        {/*/>*/}
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
            p={'10px '}
        >
            {text}
        </Text>
    </Box>
}