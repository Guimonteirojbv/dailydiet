import { useNavigation } from "@react-navigation/native"
import { Button } from "../Button"
import { Container, Image, Title, Message, TextStrong} from "./styles"
import PositiveImage from '@/assets/positive.png'

export function PositiveFeedback() {

    const navigation = useNavigation()

    function handleGoHome () {
        navigation.navigate('home')
    }
    return (
        <Container>
            <Title>
                Continue assim!
            </Title>
            
            <Message>
                Você continua <TextStrong>dentro da dieta</TextStrong>. Muito bem!
            </Message>

            <Image source={PositiveImage}/>

            <Button title="Ir para a página inicial"  type="SMALL" onPress={handleGoHome}/>
               
         
        </Container>        
    )
}