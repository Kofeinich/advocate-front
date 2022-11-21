import * as React from 'react'
import Calendar from "../../../svg/calendar.svg" ;
import Success from "../../../svg/success.svg";
import Glare from "../../../svg/glare.svg"
import {AdvertingCard} from "./card/AdvertingCard";
import {Flex, useMediaQuery} from "@chakra-ui/react";


export const Adverting = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")

    const cards = [
        {
            icon: <Calendar/>,
            number: '>  20',
            text: 'лет опыта'
        },
        {
            icon: <Success/>,
            number: '>  20',
            text: 'лет опыта'
        },
        {
            icon: <Glare/>,
            number: '>  20',
            text: 'лет опыта'
        },
    ]

    return <Flex
        justify={'space-between'}
        flexDirection={isMobile ?'column' : 'raw'}
    >
        {cards.map((item, index) =>
            <AdvertingCard key={index} text={item.text} icon={item.icon} number={item.number}/>
        )}
    </Flex>

}