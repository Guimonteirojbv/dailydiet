import styled, { css } from "styled-components/native";


export type StatusStyleProps = 'Good' | 'Bad' 

type Props = {
    status?: StatusStyleProps
}
export const Container = styled.View`
    width: 100%;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};

    flex-direction: row;
    align-items: center;
    padding: 12px;

    border-radius: 6px;
    margin-bottom: 12px;
`

export const HourText = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_1};       
    `}
`

export const Separator = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({theme}) => theme.COLORS.GRAY_4};
    margin: 0px 12px 0px 12px;

`

export const DescriptionText = styled.Text`
    flex: 1;
     ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};       
    `}

`

export const Status = styled.View<Props>`
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background-color: ${({theme, status}) => status === 'Good' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`