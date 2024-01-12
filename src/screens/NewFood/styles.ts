import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ArrowLeft} from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";


type ButtonSelectStyleProps = {
    backgroundcolor: string;
    bordercolor: string;
    active: boolean;
}

type CircleStyleProps = {
    color: string;
}



export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_5};

`

export const Header = styled.View`
    width: 100%;
    position: relative;
    justify-content: center;
    background-color: transparent;
    padding: 24px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD_2}px;
        color: ${theme.COLORS.GRAY_1};
    `}

    text-align: center;

`


export const Form = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    padding: 24px;

    border-radius: 20px 20px 0px 0px;
`

export const ViewRow = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 12px;
` 

export const ViewRowButtons = styled(ViewRow)`
    flex: 1;
    gap: 8px;
    height: 50px;
    
`
export const ButtonBack = styled(TouchableOpacity)`
    left: 24px;
    position: absolute;
    padding: 12px;
`

export const ButtonSelect = styled(TouchableOpacity)<ButtonSelectStyleProps>`
    flex: 1;
    height: 50px;
    
    gap: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: ${({ active}) => active ? '1px solid' : '0'};
    background: ${({ backgroundcolor}) => backgroundcolor};
    border-color: ${({ bordercolor}) => bordercolor};

    border-radius: 6px;
    
`

export const CircleStyle = styled.View<CircleStyleProps>`
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: ${({color}) => color}
`


export const TextButtonSelect = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM_2}px;
        color: ${theme.COLORS.GRAY_1};
    
    `}
`


export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_1,
    size: 24,
}))``



