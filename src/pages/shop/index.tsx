import React from "react"
import { 
    Button,
    SafeAreaView, 
    ScrollView, 
    Text, 
    View
} from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export default function Shop() {

    const Stack = createNativeStackNavigator()

    



    return <Stack.Navigator screenOptions={{ headerLargeTitle: true }}>
        <Stack.Screen name="Shop" component={Products} />
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
}






//  ----

const Products = ({ navigation }: any ) => {

    
    
    const [ products, setProducts ] = React.useState([])
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return <ScrollView contentInsetAdjustmentBehavior="automatic">

        {products.map(item => {

            const { 
                id,
                category,
                title,
                description
            } = item

            return <Button 
                title={title}
                onPress={() => {
                    navigation.navigate('Details', {
                        itemId: id,
                        otherParam: item,
                      });
                }}/>
        })}
    </ScrollView>
}




const Details = ({ props, route }: any ) => {


    const {
        id,
        title,
        description
    } = route.params.otherParam

    return <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{title}</Text>
        <View>
            
        </View>
        <Text>{description}</Text>
    </ScrollView>
}