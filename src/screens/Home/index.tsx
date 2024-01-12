import React from "react";
import { Header } from "@/components/Header";
import { Container, PercentView, InfoTextPercent,InfoText, Icon, Title, IconPlus } from "./styles";
import { Button } from "@/components/Button";
import { ListFood } from "@/components/ListFood";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { getAllSnacks } from "@/storage/snacks/getSnacks"



export function Home () {

    const navigation = useNavigation()

    function handleNewFood() {
        navigation.navigate('new')
    }

    async function fetchSnacks() {
        try {
            const Snacks = await getAllSnacks()
            
        } catch (error) {
            Alert.alert('Ocorreu um erro ao carregar o historico de refeições')
        }
    }

    useFocusEffect(React.useCallback(() => {
        fetchSnacks()
    },[]))
    return (
        <Container>
            <Header />

            <PercentView type="Good">
                <Icon />
                <InfoTextPercent>90,86%</InfoTextPercent>
                <InfoText>das refeições dentro da dieta</InfoText>
            </PercentView>

        <Title>
            Refeições
        </Title>
             
        <Button 
            title="Nova refeição" 
            type="LARGE" 
            style={{marginTop: 8}}
            onPress={handleNewFood}
        >
            <IconPlus/>
        </Button>


        <ListFood />
    
        </Container>
    )
}