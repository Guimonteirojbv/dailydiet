import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight, Plus } from 'phosphor-react-native'
import { View } from "react-native";


type PercentStyleProps = {
    type: 'Good' | 'Bad'
}

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    padding: 24px ;
`

export const PercentView = styled(View)<PercentStyleProps>`
    width: 100%;
    position: relative;

    padding: 20px 16px;
    border-radius: 8px;

    background-color: ${({theme, type}) => type === 'Good' ?  theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    margin-top: 36px;
`
export const InfoTextPercent = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
    text-align: center;
`

export const InfoText = styled.Text`
      ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM_2}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: center;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}

    margin-top: 40px;
`

export const IconPlus = styled(Plus).attrs(({theme}) => ({
    color: theme.COLORS.WHITE,
    size: 18,
}))``

export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))`
    position: absolute;
    top: 8px;
    right: 8px;
`

