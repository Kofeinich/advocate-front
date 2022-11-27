import * as React from 'react'
import {Flex, Heading, Text, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import {ButtonStyled} from "../styled/ButtonStyled";
import {People} from "./people/People";



export const PracticeDescription = () => {
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
            maxW={isMobile ? '600px' :'550px'}
            w={'100%'}
        >
            <Heading
                as={'h1'}
                fontSize={'40px'}
                fontFamily={`'Prata', serif`}
                fontWeight={'400'}
                color={'#F06449'}
            >
                Моя Практика
            </Heading>
            <Text
                align={'left'}
                color={color}
                fontFamily={`'Jost', sans-serif`}
                fontWeight={'400'}
                fontSize={isMobile ? '18px' : '20px'}
            >
                Какой-то приятный текст о том, что тут интересного написано, и почему это важно. Он не должен быть очень большим, да он вообще никому ничего не должен. Но чтобы было красиво он должен быть сопоставим с картинкой. Имею в виду в плане габаритов.
            </Text>
        </VStack>
        <Flex
            alignItems={'center'}
            justify={'center'}
            w={'100%'}
            maxW={'620px'}
            minW={'320px'}
            p={'30px'}
        >
            <People color={color}/>
        </Flex>
    </Flex>
}