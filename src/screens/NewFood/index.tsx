
import React from "react";
import { Input } from "@/components/Input";
import { 
    Container, 
    Header,
    Icon, 
    Title, 
    Form, 
    ViewRow, 
    ButtonBack, 
    ButtonSelect, 
    TextButtonSelect,
    ViewRowButtons, 
    CircleStyle
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Button } from "@/components/Button";
import { Alert } from "react-native";
import { createSnack } from "@/storage/snacks/createSnack";
import { AppError } from "@/utils/AppError";
import { SnackData } from "@/storage/snacks/snacksDTO";

export function NewFood () {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [date, setDate] = React.useState('')
    const [hour, setHour] = React.useState('')
    const [isInside, setIsInside] = React.useState(true)

    const { COLORS } = useTheme()

    const navigation = useNavigation()

    async function handleCreateSnack () {
        try {
             if(
                name.trim().length === 0 || 
                description.trim().length === 0 || 
                date.trim().length === 0 || 
                hour.trim().length === 0
               ) {
                return Alert.alert('Refeição', 'Informe todos os dados da refeição')
            }

            const snack: SnackData = {
                name,
                description,
                date,
                hour,
                isInside
            }

            await createSnack(snack)

       navigation.navigate('feedback', {yes: isInside})
            
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Refeição', error.message)
            } else {
                Alert.alert('Refeição', 'Erro desconhecido ao tentar criar refeição')
                console.log(error)
            }
        }
    }


    function handleBack() {
        navigation.goBack()
    }
    return (
        <Container>
            <Header>
                <Title>
                    Nova refeição
                </Title>
                <ButtonBack onPress={handleBack}>
                    <Icon />
                </ButtonBack>
            </Header>

            <Form>
                <Input 
                    label="Nome" 
                    value={name} 
                    onChangeText={setName}
                />

                <Input 
                    label="Descrição"  
                    multiline 
                    numberOfLines={4} 
                    value={description} 
                    onChangeText={setDescription}
                />

                <ViewRow>
                    <Input 
                        label="Data"  
                        w={150} 
                        value={date} 
                        onChangeText={setDate}
                    />
                    <Input 
                        label="Hora"  
                        w={150}
                        value={hour}
                        onChangeText={setHour}
                        />
                </ViewRow>
                
                <ViewRowButtons>
                    <ButtonSelect 
                        onPress={() => setIsInside(true)}
                        backgroundcolor={isInside ? COLORS.GREEN_LIGHT : COLORS.GRAY_6}
                        bordercolor={isInside ? COLORS.GREEN_DARK : 'transparent'}
                        active={isInside}
                    >
                       
                       <CircleStyle color={COLORS.GREEN_DARK}/>
                        <TextButtonSelect>
                            Sim
                        </TextButtonSelect>
                    </ButtonSelect>

                    <ButtonSelect 
                        onPress={() => setIsInside(false)}
                        backgroundcolor={!isInside ? COLORS.RED_LIGHT : COLORS.GRAY_6}
                        bordercolor={!isInside ? COLORS.RED_DARK : 'transparent'}
                        active={!isInside}
                    >
                        <CircleStyle color={COLORS.RED_DARK}/>
                        <TextButtonSelect>
                            Não
                        </TextButtonSelect>
                    </ButtonSelect>
                </ViewRowButtons>


                <Button title="Cadastrar refeição" type="LARGE" onPress={handleCreateSnack}/>
            </Form>

           
                

        </Container>
    )
}