import {useColorModeValue, useColorMode, Box, Flex, useMediaQuery} from "@chakra-ui/react";
import * as React from "react";
import Sun from "../../../../../svg/sun.svg" ;
import Moon from "../../../../../svg/moon.svg" ;

export const Switcher = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const {colorMode, toggleColorMode} = useColorMode()
    const borderColor = useColorModeValue('#FFC759', '#F7F5FB')
    const bgSwitcher = useColorModeValue('#F06449', '#474747')


    return <Flex
        borderRadius={'20px'}
        border={`1px solid ${borderColor}`}
        bg={'#F7F5FB'}
        w={isMobile ? '37px' : '50px'}
        h={isMobile ? '19px' : '26px'}
        justify={'space-between'}
        alignItems={'center'}
        p={'2px'}
        onClick={toggleColorMode}
    >
        {
            (colorMode === 'light')
                ?
                <>
                    <Box
                        w={isMobile ? '12px' : '18px'}
                        h={isMobile ? '12px' : '18px'}
                    >
                        <Moon/>
                    </Box>
                    <Box
                        w={isMobile ? '15px' : '22px'}
                        h={isMobile ? '15px' : '22px'}
                        bg={bgSwitcher}
                        borderRadius='50%'
                    />
                </>
                :
                <>
                    <Box
                        w={isMobile ? '15px' : '22px'}
                        h={isMobile ? '15px' : '22px'}
                        bg={bgSwitcher}
                        borderRadius='50%'
                    />
                    <Box
                        w={isMobile ? '15px' : '25px'}
                        h={isMobile ? '15px' : '25px'}
                    >
                        <Sun/>
                    </Box>
                </>
        }
    </Flex>
}