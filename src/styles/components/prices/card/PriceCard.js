import {Heading, Text, Flex, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from 'react'
import {Link} from "gatsby";
import {ArrowRight} from "../../../icons/ArrowRight";


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
            <Flex
                justify={'right'}
            >
                <Link to='/practice'>
                    <Text
                        _hover={{
                            cursor: 'pointer',
                            color: '#F06449'
                        }}
                    >
                        Смотреть судебную практику
                    </Text>
                </Link>

                <Link to='/practice'>
                    <ArrowRight
                        width={'45px'}
                        margin={'0px 0px 0px 20px'}
                    />
                </Link>
            </Flex>
        </VStack>
    )
}