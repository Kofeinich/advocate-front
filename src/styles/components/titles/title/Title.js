import * as React from 'react'
import {Box, Flex, Heading, Text, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {useState} from "react";
import {CloseIcon} from "../icons/CloseIcon";
import {PlusIcon} from "../icons/PlusIcon";


export const Title = ({desc, text}) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [isOpen, setIsOpen] = useState(false)
    const color = useColorModeValue('#474747', '#F7F5FB')

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
            p={isMobile ? '0px' : '0 50px'}
        >
            <Flex
                w={'100%'}
                justify={'space-between'}
                p={'10px 0px'}
                borderBottom={`1px solid ${color}`}
            >
                <Heading
                    lineHeight={'30px'}
                    fontSize={isMobile ?'16px' :'20px'}
                    fontWeight={'400'}
                    as={'h3'}
                    fontFamily={`'Jost', sans-serif`}
                    color={color}
                >
                    {desc}
                </Heading>
                <Box
                    onClick={() => clickHandler()}
                >
                    {isOpen ? <CloseIcon width={'43px'}/> : <PlusIcon width={'30px'}/>}
                </Box>
            </Flex>
            <Flex
                w={'100%'}
                display={isOpen ? 'flex' : 'none'}
            >
                <Text
                    color={color}
                    p={isMobile ? '10px 0px' : '20px 80px 10px 80px'}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    fontFamily={`'Jost', sans-serif`}
                >
                    {text}
                </Text>
            </Flex>
        </Flex>
    )
}