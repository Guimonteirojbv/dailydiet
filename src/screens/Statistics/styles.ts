import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ArrowLeft} from 'phosphor-react-native'




export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
   
`

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    position: relative;
    background-color: transparent;
    padding: 24px;
`


export const PercentView = styled.View`
   
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
   
    border-radius: 8px;
    
    background-color: transparent;

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
   
`

export const ContentView = styled.View`
    flex: 1;
    
    border-radius: 20px 20px 0px 0px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 24px;
    
    align-items: center;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM_2}px;
        color: ${theme.COLORS.GRAY_1};
    `}
` 

export const SequencyView = styled.View `
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_6};

    padding: 16px;
    border-radius: 8px;

    align-items: center;

    margin-top: 23px;
    
`

export const TextStatisticsBold = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_1};
    `}
`
export const TextStatistics = styled.Text `
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM_2}px;
        color: ${theme.COLORS.GRAY_2};
    `}
`

export const ViewFoods = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 12px;

`

export const ViewFoodsInside = styled(SequencyView)`
    max-width: 150px;
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

`

export const ViewFoodsOutside = styled(SequencyView)`
    max-width: 150px;
    background-color: ${({theme}) => theme.COLORS.RED_LIGHT};

`





export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))`
    top: 24px;
    left: 24px;
    position: absolute;
`

