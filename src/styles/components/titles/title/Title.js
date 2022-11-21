import * as React from 'react'
import {Box, Flex, Heading, Text, useMediaQuery} from "@chakra-ui/react";
import {useState} from "react";
import CloseIcon from "../../../../svg/closeicon.svg" ;
import PlusIcon from "../../../../svg/plusicon.svg" ;

export const Title = ({desc, text}) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = () => {
        if (isOpen === true){
            setIsOpen(false)
        } else setIsOpen(true)
    }

    return (
        <Flex
            mt={'10px'}
            w={'100%'}
            maxW={'1120px'}
            flexDirection={'column'}
        >
            <Flex
                w={'100%'}
                justify={'space-between'}
                p={'10px 0px'}
                borderBottom={'1px solid white'}
            >
                <Heading
                    lineHeight={'30px'}
                    fontSize={'20px'}
                    fontWeight={'400'}
                    as={'h3'}
                >
                    {desc}
                </Heading>
                <Box
                    onClick={() => clickHandler()}
                >
                    {isOpen ? <CloseIcon/> : <PlusIcon/>}
                </Box>
            </Flex>
            <Flex
                w={'100%'}
                display={isOpen ? 'flex' : 'none'}
            >
                <Text
                    p={isMobile ? '10px 0px' : '20px 80px 10px 80px'}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                >
                    {text}
                </Text>
            </Flex>
        </Flex>
    )
}