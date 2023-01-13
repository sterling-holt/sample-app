import React from "react"
import { 
    Button,
    Image,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View
} from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Details } from "./details"
import { List } from "./list"

export default function Shop() {

    const Stack = createNativeStackNavigator()

    return <Stack.Navigator screenOptions={{ headerLargeTitle: true }}>
        <Stack.Screen name="Shop" component={List} />
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
}