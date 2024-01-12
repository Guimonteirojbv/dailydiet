import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = 'SMALL' | 'LARGE'

type Props = {
    type: ButtonStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    max-width: ${({type}) => type === 'SMALL' ? '190px' : '100%'};
    background-color: ${({theme}) => theme.COLORS.GRAY_1};
    
    flex-direction: row;
    justify-content: center;
    align-items: center
`

export const TitleButton = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM_2}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
    
    margin-left: 14px;

`