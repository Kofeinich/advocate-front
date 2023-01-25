import {Box, Flex, Heading, Text, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import {Banner} from "../Banner";


export const SwiperItem = ({service}) => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    const color = useColorModeValue('#474747', '#F7F5FB')
    const headingColor = useColorModeValue('#F06449', '#FFC759')

    return <Box
        position={'relative'}
        w={'304px'}
        h={isMobile ? '' : '100%'}
        top={'0'}
        m={'0'}
        // borderRight={`1px solid ${color} `}
        // borderLeft={`1px solid ${color} `}
    >
        <Heading
            position={'relative'}
            mt={'25px'}
            textAlign={'center'}
            as={'h3'}
            lineHeight={'30px'}
            fontSize={'20px'}
            fontWeight={'400'}
            fontFamily={`'Jost', sans-serif`}
            color={headingColor}
        >
            {service.title}
        </Heading>

        <Box
            p={ isMobile ?'0px 10px 10px 10px' : "0px 10px"}
            position={'relative'}
            mt={'5px'}
            top={0}
            left={0}
        >
            {
                service.services.map((item, index) =>
                    <Flex
                        justify={'center'}
                        alignItems={'center'}
                    >
                        {/*<Box*/}
                        {/*    borderRadius={'50%'}*/}
                        {/*    w={'8px'}*/}
                        {/*    h={'8px'}*/}
                        {/*    bg={headingColor}*/}
                        {/*/>*/}
                        <Text
                            mb={'1px'}
                            key={index}
                            textAlign={'center'}
                            lineHeight={'20px'}
                            fontSize={'16px'}
                            fontWeight={'400'}
                            fontFamily={`'Jost', sans-serif`}
                            color={color}
                        >
                            {item}
                        </Text>
                    </Flex>
                )
            }
        </Box>
        <Banner price='от 3000 ₽ '/>
    </Box>
}