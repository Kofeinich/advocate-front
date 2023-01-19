import {Text, Flex, useColorModeValue, useMediaQuery, VStack, Box} from "@chakra-ui/react";
import * as React from 'react'
import {HeadingStyled} from "../styled/HeadingStyled";
import {Formik, Field, Form} from "formik";
import {InputField} from "./field/InputField";
import {MessageSchema} from "./MessageSchema";

export const Mail = () => {
    const placeholderColor = useColorModeValue('rgba(54,46,46, .5 )', 'rgba(247,245,251, .5 )')
    const color = useColorModeValue('#36382E', '#F7F5FB')
    const bg = useColorModeValue( '#F7F5FB', '#36382E')
    const [isMobile] = useMediaQuery("(max-width: 1100px)")


    return <Flex
        as={'section'}
        w={'100%'}
        maxW={'1120px'}
        flexDirection={'column'}
        position={'relative'}
        mt={'50px'}
    >
        <HeadingStyled id={'mail'} text={'Оставить заявку'}/>
        <Flex>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                }}
                validationSchema={MessageSchema}
                // onSubmit={async (values) => {
                //     await new Promise((resolve) => setTimeout(resolve, 500));
                //     alert(JSON.stringify(values, null, 2));
                // }}
                onSubmit={(values) => console.log(values)}
            >
                {({ errors, touched }) => (
                    <Form
                    >
                        <VStack
                            mt={'30px'}
                            position={'relative'}
                            flexDirection={'column'}
                            alignItems={'left'}
                            spacing={5}
                        >
                            <InputField placeholder={'Имя'} type={'name'} name={'name'}/>
                            {errors.name && touched.name ? (
                                <Box
                                    color={'red.400'}
                                    fontSize={'14px'}
                                >
                                    <i>{errors.name}</i>
                                </Box>
                            ) : null}
                            <InputField placeholder={'E-mail'} type={'email'} name={'email'}/>
                            {errors.email && touched.email ? (
                                    <Box
                                        color={'red.400'}
                                        fontSize={'14px'}
                                    >
                                        <i>{errors.email}</i>
                                    </Box>
                            ) : null}
                            <InputField placeholder={'+7 XXX XXX XX XX'} type={'phone'} name={'phone'}/>
                            {errors.phone && touched.phone ? (
                                    <Box
                                        color={'red.400'}
                                        fontSize={'14px'}
                                    >
                                        <i>{errors.phone}</i>
                                    </Box>
                            ) : null}
                            <Field
                                style={{
                                    _placeholder: {
                                        color: placeholderColor,
                                    },
                                    padding: '5px 15px',
                                    fontSize: '16px',
                                    color: `${color}`,
                                    border: `1px solid ${placeholderColor}`,
                                    lineHeight: '150%',
                                    background: `${bg}`,
                                    width: isMobile ? '280px' : '516px',
                                    height: '206px'
                                }}
                                placeholder="Опишите вашу проблему..."
                                name="message"
                                type="text"
                            />
                            {errors.message && touched.message ? (
                                <Flex
                                    color={'red.400'}
                                    fontSize={'14px'}
                                >
                                    <Text w={'100%'} textAlign={'left'}>{errors.message}</Text>
                                </Flex>
                            ) : null}
                            <button type="submit">Submit</button>
                        </VStack>
                    </Form>
                )}
            </Formik>
        </Flex>
    </Flex>
}