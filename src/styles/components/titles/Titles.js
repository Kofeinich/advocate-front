import * as React from 'react'
import {Flex, Text} from "@chakra-ui/react";
import {Title} from "./title/Title";
import {HeadingStyled} from "../styled/HeadingStyled";
import {ArrowRight} from "../../icons/ArrowRight";
import {Link} from "gatsby";
import {texts} from "../../../texts/texts";

export const Titles = () => {

    const topTitles = []
    topTitles.push(texts.practice.titles[0])
    topTitles.push(texts.practice.titles[1])
    topTitles.push(texts.practice.titles[2])


    return <Flex
        as={'section'}
        flexDirection={'column'}
        w={'100%'}
        maxW={'1120px'}
        position={'relative'}
        mt={'50px'}
    >
        <HeadingStyled text={'Моя Практика'}/>
        {topTitles.map((item, index) =>
            <Title instance={item}/>
        )}
        <Flex
            position={'relative'}
            mt={'60px'}
            w={'100%'}
            justify={'right'}
            pr={'50px'}
        >
            <Link to='/practice'>
                <Text
                    _hover={{
                        cursor: 'pointer',
                        color: '#F06449'
                    }}
                >
                    Читать больше
                </Text>
            </Link>
            <Link to='/practice'>
                <ArrowRight width={'45px'} margin={'0px 0px 0px 20px'}/>
            </Link>
        </Flex>
    </Flex>
}