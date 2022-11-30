import * as React from 'react'
import {Flex, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import {Hashtag} from "./hashtag/Hashtag";
import {Strokes} from "./strokes/Strokes";
import {PracticeTitles} from "../titles/practice-titles/PracticeTitles";
import {useState} from "react";
import {texts} from "../../../texts/texts"


export const Hashtags = () => {
    const color = useColorModeValue('#474747', '#F7F5FB')
    const [isMobile] = useMediaQuery("(max-width: 440px)")

    const [hashTags, setHashTags] = useState(texts.practice.hashTagsList)

    console.log(hashTags)

    const handlerTagActive = (fromTag) => {
        setHashTags(hashTags.map((tag, index) => {
            if (tag.id === fromTag) {
                return {
                    ...tag,
                    isActive: !tag.isActive,
                }
            }
            console.log(hashTags)
            return tag
        }))
    }


    return <Flex
        flexDirection={'column'}
        position={'relative'}
        justify={'center'}
        alignItems={'center'}
        w={'100%'}
    >
        <Flex
            position={'relative'}
            justify={'center'}
            alignItems={'center'}
            w={'100%'}
            maxW={'1200px'}
            p={'0px 10px'}
        >
            <Strokes t={'40px'}/>
            <Strokes b={'40px'}/>
            <Flex
                position={'relative'}
                justify={'center'}
                alignItems={'center'}
                w={'100%'}
                borderLeft={`1px solid ${color}`}
                borderRight={`1px solid ${color}`}
                p={'80px 20px'}
            >
                <Flex
                    flexDirection={isMobile ? 'columns' : 'row'}
                    w={'100%'}
                    justify={isMobile ? 'center' : 'left'}
                    flexWrap={'wrap'}
                >
                    {hashTags.map((item, index) =>
                        <Hashtag key={item.tag} tag={item} onChangeStatus={handlerTagActive}/>
                    )}
                </Flex>
            </Flex>
        </Flex>
        <Flex
            position={'relative'}
            justify={'center'}
            alignItems={'center'}
            w={'100%'}
            maxW={'1200px'}
            p={'0px 10px'}
        >
            {hashTags.filter((item) => {
                 if (item.isActive) { return item}
            }).map((item, index) =>
                <Hashtag key={item.tag} tag={item} onChangeStatus={handlerTagActive}/>
            )}
        </Flex>
        <PracticeTitles/>
    </Flex>
}