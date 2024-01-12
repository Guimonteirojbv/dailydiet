import React from "react";
import { FlatList, Text } from "react-native";
import { Container, TextDay } from "./styles";
import { CardFood } from "../CardFood";
import { ListEmpty } from "../ListEmpty";


export function ListFood({}) {
    const [listFood, setListFood] = React.useState(['0','1', '2', '3','4','5','6','7','8','9', '10'])
    return (
        <Container>
            <TextDay>12.08.22</TextDay>
            <FlatList 
                data={listFood}
                keyExtractor={item => item}
                renderItem={() => <CardFood />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50 }}
                ListEmptyComponent={() => <ListEmpty />}
            />
        </Container>
    )
}