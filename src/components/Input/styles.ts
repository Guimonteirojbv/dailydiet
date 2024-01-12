import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    margin-bottom: 20px;

`
export const InputText = styled(TextInput)`
    width: 100%;
    border: 1px solid;
    
    
    padding: 14px;

    border-radius: 6px;

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        border-color: ${theme.COLORS.GRAY_5};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};

    margin-top: 4px;
`

export const Label = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_2};
    `}

`