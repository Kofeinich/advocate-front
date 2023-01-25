import {PriceDescription} from "./description/PriceDescription";
import React from "react";
import {texts} from "../../../texts/texts";
import {PriceCard} from "./card/PriceCard";
import {VStack} from "@chakra-ui/react";


export const Price = () => {
    return <VStack
        alignItems={'center'}
        justifyContent={'center'}
    >
        <PriceDescription item={texts.prices.description}/>
        <VStack
            mt={'30px'}
            spacing={'50px'}
        >
            {texts.prices.services.map((item, index) => {
                return <PriceCard item={item} key={index}/>
            })}
        </VStack>
    </VStack>
}