import { useColorModeValue, VStack} from "@chakra-ui/react";
import {texts} from "../../../../texts/texts";
import {SwiperItem} from "./slide/SwiperItem";
import * as React from "react";

export const MobileStack = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')

    return <VStack
        flexDirection={'column'}
        alignItems={'center'}
        justify={'center'}
        w={'100%'}
        maxW={'1120px'}
        m={'70px 0px'}
        position={'relative'}
        spacing={8}
        borderTop={`1px solid ${color}`}
        borderBottom={`1px solid ${color}`}
    >
        {texts.main.service.length > 0 ?
            <>
                {texts.main.service.map((item, index) =>
                    <SwiperItem key={index} service={item}/>
                )}
            </>
            :
            <></>
        }
    </VStack>
}