import {Box, Flex, Heading, Text, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import Img from "gatsby-image"
import * as React from 'react'
import {ButtonStyled} from "../styled/ButtonStyled";
import {texts} from "../../../texts/texts";
import {graphql, useStaticQuery} from "gatsby";


export const Profile = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 1100px)")
    const data = useStaticQuery(graphql`
    query {
      mobileLamps: file(relativePath: { eq: "profile/profile-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopLamps: file(relativePath: { eq: "profile/profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

    const lamps = [
        data.mobileLamps.childImageSharp.fluid,
        {
            ...data.desktopLamps.childImageSharp.fluid,
            media: `(min-width: 1100px)`,
        },
    ]


    return <Flex
        as={'section'}
        justify={isMobile ? 'center' : 'space-between'}
        flexDirection={isMobile ? 'column' : 'row'}
        position={'relative'}
        alignItems={'center'}
        w={'100%'}
        maxW={'1000px'}
        h={isMobile ? '' : '527px'}
    >
        <Flex
            position={"absolute"}
            top={'-80px'}
            id={"hed"}
        />
        <VStack
            h={isMobile ? '' : '510px'}
            alignItems="left"
            spacing={4}
            justify={'left'}
        >
            <Heading
                mt={0}
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
        {/*<Img*/}
        {/*    style={{width: '100%'}}*/}
        {/*    loading={'lazy'}*/}
        {/*    fluid={lamps}*/}
        {/*    alt="Lamps Background"*/}
        {/*/>*/}
        <Flex
            // position={'relative'}
            // overflow={'hidden'}
            m={isMobile ? '20px 0' : '0 0px 20px 20px'}
            w={'100%'}
            maxW={isMobile ? '220px' : '407px'}
            minW={'120px'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Img
                style={{
                    borderRadius: `16px`,
                    width: '100%'
                }}
                loading={'lazy'}
                fluid={lamps}
                alt="Lamps Background"
            />
            {
                isMobile
                    ?
                    <Box
                        mt={'20px'}
                    >
                        <ButtonStyled text={'Оставить заявку'}/>
                    </Box>
                    :
                    <></>
            }
        </Flex>
    </Flex>
}
