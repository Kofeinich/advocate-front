import * as React from "react";
import {Flex, Text} from "@chakra-ui/react";
import Mail from "../../../../../svg/mail.svg";
import WhatsApp from "../../../../../svg/whatsapp.svg";
import Telegram from "../../../../../svg/telegram.svg" ;

export const Contacts = () => {
    return <Flex
        w={'200px'}
        flexDirection={'column'}
        alignItems={'center'}
    >
        <Flex
            w={'100%'}
            alignItems={'center'}
        >
            <Text>
                +7 (918) 067-51-05
            </Text>
        </Flex>
        <Flex
            w={'100%'}
            alignItems={'center'}
            justify={'space-between'}
        >
            <WhatsApp/>
            <Telegram/>
            <Mail/>
        </Flex>

    </Flex>
}