import {Text, useColorModeValue, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

export const ContactNavs = () => {
    const [isMobile] = useMediaQuery("(max-width: 1000px)")
    const color = useColorModeValue('#36382E', '#F7F5FB')

    return <VStack
        as={'nav'}
        w={'100%'}
        alignItems={isMobile ? 'center' : "left"}
        spacing={3.5}
    >
        <button  onClick={() => scrollTo('#hed')} >
            <Text
                as={'p'}
                color={color}
                fontFamily={'"Jost", sans-serif'}
                fontSize={'16px'}
                _hover={{
                    color: "#F06449",
                    cursor: 'pointer'
                }}
                _active={{
                    color: "#F06449"
                }}
                _focus={{
                    color: "#F06449"
                }}
            >
                Главная
            </Text>
        </button>
        <button  onClick={() => scrollTo('#service')} >
            <Text
                color={color}
                fontFamily={'"Jost", sans-serif'}
                fontSize={'16px'}
                _hover={{
                    color: "#F06449",
                    cursor: 'pointer'
                }}
                _active={{
                    color: "#F06449"
                }}
                _focus={{
                    color: "#F06449"
                }}
            >
                Услуги
            </Text>
        </button>

        <button  onClick={() => scrollTo('#contacs')} >
            <Text
                as={'p'}
                color={color}
                fontFamily={'"Jost", sans-serif'}
                fontSize={'16px'}
                _hover={{
                    color: "#F06449",
                    cursor: 'pointer'
                }}
                _active={{
                    color: "#F06449"
                }}
                _focus={{
                    color: "#F06449"
                }}
            >
                Оставить заявку
            </Text>
        </button>
        <button  onClick={() => scrollTo('#practice')} >
            <Text
                color={color}
                fontFamily={'"Jost", sans-serif'}
                fontSize={'16px'}
                _hover={{
                    color: "#F06449",
                    cursor: 'pointer'
                }}
                _active={{
                    color: "#F06449"
                }}
                _focus={{
                    color: "#F06449"
                }}
            >
                Моя практика
            </Text>
        </button>
    </VStack>
}
