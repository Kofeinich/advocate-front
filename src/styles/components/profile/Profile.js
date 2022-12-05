import {Flex, Heading, Text, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import {StaticImage} from "gatsby-plugin-image";
import * as React from 'react'
import {ButtonStyled} from "../styled/ButtonStyled";
import {texts} from "../../../texts/texts";


export const Profile = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 568px)")

    return <Flex
        as={'section'}
        justify={isMobile ? 'center' : 'space-between'}
        flexDirection={isMobile ? 'column' : 'row'}
        position={'relative'}
        alignItems={'center'}
        maxW={'1100px'}
    >
        <Flex
            position={"absolute"}
            top={'-80px'}
            id={"hed"}
        />
        <VStack
            alignItems="left"
            spacing={4}
            justify={'left'}
        >
            <Heading
                id={"hed"}
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

            {texts.main.description.map((item, index) =>
                <Text
                    margin={0}
                    key={index}
                    maxW={'540px'}
                    pr={'20px'}
                    color={color}
                    fontFamily={`'Jost', sans-serif`}
                    fontWeight={'400'}
                    fontSize={isMobile ? '18px' : '20px'}
                >
                    {item}
                </Text>
            )}
            {
                isMobile
                    ?
                    <></>
                    :
                    <Flex
                        alignItems={'center'}
                        justify={'center'}
                    >
                        <ButtonStyled text={'Оставить заявку'}/>
                    </Flex>
            }
        </VStack>
        <Flex
            position={'relative'}
            overflow={'hidden'}
            pl={isMobile ? '0' : '20px'}
            pt={isMobile ? '20px' : '0'}
            w={'100%'}
            maxW={isMobile ? '220px' : '380px'}
            minW={'200px'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <StaticImage
                style={{marginBottom: '20px'}}
                placeholder={'blurred'}
                src={`../../../images/profile.jpeg`}
                alt={''}
                formats={['auto', 'webp', 'avif']}
                quality={100}
            >
            </StaticImage>
            {
                isMobile
                    ?
                    <ButtonStyled text={'Оставить заявку'}/>
                    :
                    <></>
            }
        </Flex>
    </Flex>
}
