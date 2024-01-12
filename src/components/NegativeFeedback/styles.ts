import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 24px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.RED_DARK};
    `}
    margin-bottom: 8px;
 
`

export const Message = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}

    text-align: center;
`

export const TextStrong = styled(Message)`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};

`

export const Image = styled.Image`
    width: 224px;
    height: 288px;
    margin-top: 40px;
    margin-bottom: 32px;
`