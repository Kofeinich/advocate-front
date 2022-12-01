import * as React from 'react'
import Calendar from "../../../svg/calendar.svg" ;
import DarkCalendar from "../../../svg/darkcalendar.svg" ;
import Success from "../../../svg/success.svg";
import DarkSuccess from "../../../svg/darksuccess.svg";
import Glare from "../../../svg/glare.svg"
import {AdvertingCard} from "./card/AdvertingCard";
import {Flex, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {texts} from "../../../texts/texts"


export const Adverting = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const calendar = useColorModeValue(<DarkCalendar/>, <Calendar/>)
    const success = useColorModeValue(<DarkSuccess/>, <Success/>)

    const cards = [
        {
            icon: calendar,
            number: texts.main.cards[0].number,
            text: texts.main.cards[0].text
        },
        {
            icon: <Glare/>,
            number: texts.main.cards[2].number,
            text: texts.main.cards[2].text
        },
        {
            icon: success,
            number: texts.main.cards[1].number,
            text: texts.main.cards[1].text
        },
    ]

    return <Flex
        as={'section'}
        position={'relative'}
        mt={'30px'}
        justify={'space-between'}
        flexDirection={isMobile ?'column' : 'raw'}
    >
        {cards.map((item, index) =>
            <AdvertingCard key={index} text={item.text} icon={item.icon} number={item.number}/>
        )}
    </Flex>

}