import { Button, Image, Pressable, ScrollView, Text, View } from "react-native"

export const Details = ({ props, route }: any ) => {


    const {
        id,
        image,
        title,
        description
    } = route.params.otherParam

    return <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ padding: 20, paddingTop: 10, }}>


        <Image style={{
            width: "100%",
            aspectRatio: 1/1,
            alignSelf: "center",
        }} source={{ uri: image }}/>
        <Text style={{ fontSize: 32, fontWeight: "bold"  }}>{title}</Text>
        <Text>{description}</Text>

        <Pressable 
            style={{
                backgroundColor: "blue",
                width: "80%",
                marginTop: 40,
                padding: 20,
                borderRadius: 10,
                alignSelf: "center",
            }} 
        >
            <Text style={{ color: "white", fontWeight: "bold", alignSelf: "center"}}>Add to cart</Text>
        </Pressable>
    </ScrollView>
}