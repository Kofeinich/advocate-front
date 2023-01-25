import * as React from 'react'
import {Flex, VStack, Heading, useColorModeValue, useMediaQuery, Text} from "@chakra-ui/react";
import {PriceSvg} from "../svg/PriceSvg";

export const PriceDescription = ({item}) => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    return <Flex
        as={'section'}
        justify={isMobile ? 'center' : 'space-between'}
        flexDirection={isMobile ? 'column' : 'row'}
        position={'relative'}
        alignItems={isMobile ? 'left' : 'center'}
        maxW={'1200px'}
        w={'100%'}
    >
        <VStack
            alignItems="left"
            spacing={8}
            justify={'left'}
            maxW={isMobile ? '600px' : '550px'}
            w={'100%'}
        >
            <Heading
                as={'h1'}
                fontSize={'40px'}
                fontFamily={`'Prata', serif`}
                fontWeight={'400'}
                color={'#F06449'}
            >
                Прайс-лист
            </Heading>
            {item.map((item, index) =>
                <Text
                    key={index}
                    align={'left'}
                    color={color}
                    fontFamily={`'Jost', sans-serif`}
                    fontWeight={'400'}
                    fontSize={isMobile ? '18px' : '20px'}
                >
                    {item}
                </Text>
            )}
        </VStack>
        <Flex
            alignItems={'center'}
            justify={'center'}
            w={'100%'}
            maxW={'620px'}
            minW={'320px'}
            p={'30px'}
        >
            <PriceSvg color={color}/>
        </Flex>
    </Flex>
}