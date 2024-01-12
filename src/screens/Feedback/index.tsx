
import { PositiveFeedback } from "@/components/PositiveFeedback";
import { Container } from "./styles";
import { NegativeFeedback } from "@/components/NegativeFeedback";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    yes: boolean
}

export function Feedback () {

    const route = useRoute()
    const { yes } = route.params as RouteParams

    return (
        <Container>
            {yes ? <PositiveFeedback /> : <NegativeFeedback />}
        </Container>
    )
}