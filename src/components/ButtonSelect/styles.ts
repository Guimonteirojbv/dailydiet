import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";


export type ButtonSelectStyleProps = 'YES' | 'NO' | 'DEFAULT'

type Props = {
    type: ButtonSelectStyleProps
}


export const Container = styled(TouchableWithoutFeedback)`
    

`