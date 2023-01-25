import {Heading, Text, Flex, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from 'react'


export const PriceCard = ({item}) => {
    const [isMobile] = useMediaQuery("(max-width: 1050px)")
    const color = useColorModeValue('#474747', '#F7F5FB')
    return (
        <VStack
            justify={'center'}
            overflow={'scroll'}
            maxW={'860px'}
            // gap={isMobile ? '10px' : '20px'}
            border={`1px solid ${color}`}
            color={color}
            p={isMobile ? '10px 0px' : '20px 0px'}
        >
            <Heading
                p={isMobile ? '10px' : '20px'}
                as={'h2'}
                fontSize={isMobile ? '24px' : '28px'}
                fontFamily={`'Prata', serif`}
                fontWeight={'400'}
                color={'#FFC759'}
            >
                {item.title}
            </Heading>
            {item.s.map((i, index) => {
                return <Flex
                    key={index}
                    w={'100%'}
                    justify={"space-between"}
                    p={isMobile ? '0px 10px 0 10px' : '0px 25px'}
                >
                    <Text
                        pl={'5px'}
                        fontSize={isMobile ? '12px' : '16px'}
                    >
                        {i.name}
                    </Text>
                    <Text
                        pr={'5px'}
                        color={'#F06449'}
                        textAlign={'right'}
                        fontSize={isMobile ? '12px' : '16px'}
                        minW={isMobile ? '100px' : '140px'}
                    >
                        {i.price}
                    </Text>
                </Flex>
            })}
        </VStack>
    )
}