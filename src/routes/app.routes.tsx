import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from '@/screens/Home'
import { NewFood } from '@/screens/NewFood'
import { Statistics } from '@/screens/Statistics'
import { Feedback } from '@/screens/Feedback'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen name="new" component={NewFood}/>
            <Screen name="statistics" component={Statistics}/>
            <Screen name="feedback" component={Feedback}/>
        </Navigator>
    )
}