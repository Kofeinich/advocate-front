import {Flex} from "@chakra-ui/react";
import {Title} from "../title/Title";
import * as React from "react";
import {texts} from "../../../../texts/texts"
import {useEffect, useState} from "react";


export const PracticeTitles = ({tags}) => {

    const [listOfItems, setListOfItems] = useState(texts.practice.titles)

    const [listOfActiveItems, setListOfActiveItems] = useState([])

    const makeUniq = (arr) => [...new Set(arr)];

    useEffect(() => {
        let arr = []
        for (let curTag of tags) {
            for (let item of listOfItems) {
                if (item.id.includes(curTag.id) && curTag.isActive ) {
                    arr.push(item)
                }
            }

        }

        setListOfActiveItems(makeUniq(arr))
    }, [tags])

    return <Flex
        as={'section'}
        flexDirection={'column'}
        w={'100%'}
        maxW={'1120px'}
        position={'relative'}
        mt={'50px'}
    >
        {listOfActiveItems.map((item, index) =>
            <Title key={index} instance={item}/>
        )}
    </Flex>
}