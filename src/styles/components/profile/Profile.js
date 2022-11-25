import {Flex, Heading, Text, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import {StaticImage} from "gatsby-plugin-image";
import * as React from 'react'


export const Profile = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 568px)")

    return <Flex
        as={'section'}
        justify={isMobile ? 'center' :'space-between'}
        flexDirection={isMobile ? 'column' :'row'}
        position={'relative'}
        alignItems={'center'}
        maxW={'1100px'}
    >
        <VStack
            alignItems="left"
            spacing={8}
            justify={'left'}
        >
            <Heading
                as={'h1'}
                fontSize={'40px'}
                fontFamily={`'Prata', serif`}
                fontWeight={'400'}
                color={'#F06449'}
            >
                Юридические услуги <br/>в Новороссийске
            </Heading>
            <Heading
                color={color}
                as={'h2'}
                fontSize={'32px'}
                lineHeight={'150%'}
                fontFamily={`'Prata', serif`}
                fontWeight={'400'}
                letterSpacing={'-0.011em'}
            >
                Владимир Конюхов
            </Heading>
            <Text
                color={color}
                fontFamily={`'Jost', sans-serif`}
                fontWeight={'400'}
                fontSize={isMobile ?'18px' :'20px'}
            >
                юридическая помощь в судебных спорах, арбитражных судах, общей юрисдикции, юридическом сопровождении бизнеса и защите прав граждан в суде
            </Text>
        </VStack>
        <Flex
            overflow={'hidden'}
            pl={isMobile ? '0' : '20px'}
            pt={isMobile ? '40px' : '0'}
            w={'100%'}
            maxW={isMobile ? '220px': '380px'}
            minW={'200px'}
        >
            <StaticImage
                placeholder={'blurred'}
                src={`../../../images/profile.jpeg`}
                alt={''}
                formats={['auto', 'webp', 'avif']}
                quality={100}
            >
            </StaticImage>
        </Flex>
    </Flex>
}