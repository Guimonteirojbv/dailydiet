import { useNavigation } from "@react-navigation/native"
import { Button } from "../Button"
import { Container, Image, Title, Message, TextStrong} from "./styles"
import NegativeImage from '@/assets/negative.png'

export function NegativeFeedback() {
    const navigation = useNavigation()
    function handleGoHome() {
        navigation.navigate('home')
    }

    return (
        <Container>
            <Title>
                Que pena!
            </Title>
            
            <Message>
                Você <TextStrong>saiu da dieta</TextStrong> dessa vez, mas continue se esforçando e não desista!
            </Message>

            <Image source={NegativeImage}/>

            <Button title="Ir para a página inicial"  type="SMALL"  onPress={handleGoHome}/>
               
         
        </Container>        
    )
}