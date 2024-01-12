import { TextInputProps } from 'react-native'
import { InputText, Label, Container } from "./styles";


type Props = TextInputProps & {
    label?: string;
    w?: number;
}
export function Input ({label,w, ...rest}: Props) {
    return (
        <Container style={{width: w}}>
            <Label>{label}</Label>
            <InputText  {...rest}/>
        </Container>
    )
}