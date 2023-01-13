import React from "react"
import { ScrollView, Image, Button, StyleSheet, View, Text, Pressable } from "react-native"

export const List = ({ navigation }: any ) => {

    //  ----------------
    //  STATES
    //  ----------------
    
    const [ products, setProducts ] = React.useState([] as Array<any>)
    const [ categories, setCategories] = React.useState([] as Array<string>)
    const [ currentCategory, setCurrentCategory ] = React.useState( undefined as string | undefined )

    //  ----------------
    //  LIFECYCLES
    //  ----------------

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                let _categories = [] as Array<any>

                setProducts(json)
                for (const item of json) {
                    //  check to see if category is already in temp array,
                    //  if not, then add it
                    if (_categories.includes(item.category)) {
                    } else {
                        _categories.push(item.category)
                    }
                }
                // set the category state to the collected list of categories
                setCategories(_categories)
            })
    }, [])

    React.useEffect(() => {
        console.log(categories)
    }, [categories, products])

    return <ScrollView contentInsetAdjustmentBehavior="automatic" style={{
        backgroundColor: "white"
    }}>
        <Filter options={categories} />

        <Products data={{ products, navigation }} />
    </ScrollView>
}

//  ------------------------------------------------------------






//  ------------------------------------------------------------
//  FILTER BUTTON
//  ------------------------------------------------------------
const Filter = ({ options }: any) => {
    const [ toggle, setToggle ] = React.useState(false as boolean)

    return <Pressable onPress={() => setToggle(!toggle)}>
        <Text>Dropdown</Text>
        { toggle && options.map((item: any) => {
            return <Text>item</Text>
        }) }
    </Pressable>
}







const Products = ({ data }: any) => {

    React.useEffect(() => {

    }, [])

    return <>
        {data.products.map((item: any) => {

            return <Pressable
                style={styles.container}
                onPress={() => {
                    data.navigation.navigate("Details", {
                        otherParam: item
                    })
                }}>
                <Image 
                    style={{
                        width: "80%",
                        aspectRatio: 1/1,
                    }}
                    source={{ uri: item.image }} 
                />
                <Text>{ item.title } </Text>
            </Pressable>
        })}
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "80%",
        margin: 20,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: "80%",
      aspectRatio: 1/1,
    },
})