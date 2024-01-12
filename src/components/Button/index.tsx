import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TitleButton, ButtonStyleProps } from "./styles";

type Props = TouchableOpacityProps &  {
    title: string;
    type: ButtonStyleProps
    children?: React.ReactNode 
}


export function Button ({title, type,children,...rest}: Props) {
    return (
        <Container type={type} {...rest}>
            {children}
            <TitleButton>{title}</TitleButton>
        </Container>
    )
}