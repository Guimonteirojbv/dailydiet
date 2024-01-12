import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const TextList = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM_2}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
`