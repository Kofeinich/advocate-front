import {darken, whiten, mode} from '@chakra-ui/theme-tools'


export const HeadingStyled = {
    variants: {
        base: (props) => {
            color: mode( whiten('light.heading1'), darken('light.heading1'))
        }
    }
}