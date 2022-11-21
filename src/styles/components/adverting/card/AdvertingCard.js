import * as React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react";

export const AdvertingCard = ({icon, text, number}) => {
    return (
        <Flex
            justify={ 'space-between'}
            alignItems={'center'}
            w={'230px'}
            h={'120px'}
            p={'16px'}
            border={'1px solid white'}
            m={'15px'}
        >
            {icon}
            <Box
                w={'140px'}
            >
                <Text
                    fontSize={'40px'}
                    lineHeight={'60px'}
                    fontFamily={`'Prata', serif`}
                >
                    {number}
                </Text>
                <Text
                    fontSize={'20px'}
                    lineHeight={'30px'}
                    fontFamily={`'Jost', sans-serif`}
                >
                    {text}
                </Text>
            </Box>

        </Flex>
    )
}