import { 
    Container, 
    Icon, 
    PercentView, 
    InfoText, 
    InfoTextPercent, 
    Header,
    ContentView,
    Title ,
    SequencyView,
    TextStatisticsBold,
    TextStatistics,
    ViewFoodsInside,
    ViewFoods,
    ViewFoodsOutside
} from "./styles"



export function Statistics () {
    return (
        <Container>
            <Header>
            <Icon />
            <PercentView>
                <InfoTextPercent>
                    90,86%
                </InfoTextPercent>
                <InfoText>
                    das refeições dentro da dieta
                </InfoText>
            </PercentView>
            </Header>
          
          <ContentView>
            <Title>Estatísticas gerais</Title>

            <SequencyView>
                <TextStatisticsBold>
                    4
                </TextStatisticsBold>
                
                <TextStatistics>
                melhor sequência de pratos dentro da dieta
                </TextStatistics>
            </SequencyView>

            <SequencyView>
                <TextStatisticsBold>
                    109
                </TextStatisticsBold>

                <TextStatistics>
                    refeições registradas
                </TextStatistics>
            </SequencyView>

            <ViewFoods>
                <ViewFoodsInside>
                    <TextStatisticsBold>
                        32
                    </TextStatisticsBold>

                    <TextStatistics>
                        refeições dentro da dieta
                    </TextStatistics>
                </ViewFoodsInside>

                <ViewFoodsOutside>
                    <TextStatisticsBold>
                        77
                    </TextStatisticsBold>

                    <TextStatistics>
                        refeições fora da dieta
                    </TextStatistics>
                </ViewFoodsOutside>
            </ViewFoods>

            

          </ContentView>
        </Container>
    )
}