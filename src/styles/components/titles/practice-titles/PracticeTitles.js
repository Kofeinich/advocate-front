import {Flex} from "@chakra-ui/react";
import {Title} from "../title/Title";
import * as React from "react";
import {texts} from "../../../../texts/texts"


export const PracticeTitles = () => {
    return  <Flex
        as={'section'}
        flexDirection={'column'}
        w={'100%'}
        maxW={'1120px'}
        position={'relative'}
        mt={'50px'}
    >
        {texts.practice.titles.map((item, index) =>
            <Title key={index} text={item.title} desc={item.description}/>
        )}
    </Flex>
}