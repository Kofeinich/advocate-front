import {Box, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";


export const SwiperItem = ({service}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const headingColor = useColorModeValue('#F06449', '#FFC759')

    return <Box
        position={'relative'}
        w={'274px'}
        h={'184px'}
        top={'0'}
        m={'0'}
        borderRight={`1px solid ${color} `}
        borderLeft={`1px solid ${color} `}
    >
        <Heading
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
            p={'0px 10px'}
        >
            {
                service.services.map((item, index) =>
                    <Flex
                        justify={'left'}
                        alignItems={'center'}
                    >
                        <Box
                            borderRadius={'50%'}
                            w={'8px'}
                            h={'8px'}
                            bg={headingColor}
                        />
                        <Text
                            w={'100%'}
                            pl={'10px'}
                            key={index}
                            textAlign={'left'}
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
    </Box>
}