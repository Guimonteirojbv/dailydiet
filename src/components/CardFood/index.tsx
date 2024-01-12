import { Container, HourText,Separator ,DescriptionText, Status, StatusStyleProps } from "./styles";

type Props = {
    Hour: string;
    description: string;
    status?: StatusStyleProps
}


export function CardFood () {
    return (
        <Container>
            <HourText>
                20:00
            </HourText>
            
            <Separator />

            <DescriptionText>
              X-tudo
            </DescriptionText>

            <Status status='Good'/>
        </Container>
    )
}