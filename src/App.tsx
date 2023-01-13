//	frameworks
import React from 'react'
import type {PropsWithChildren} from 'react'
import {
	SafeAreaView,
	Text,
} from 'react-native'

// 	libraries
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Shop from './pages/shop'


type SectionProps = PropsWithChildren<{
	title: string;
}>
	
	
	
export default function App(): JSX.Element {
		
	const Tabs = createBottomTabNavigator()
	
	return <NavigationContainer>
		<Tabs.Navigator screenOptions={{ headerShown: false }}>
    	  <Tabs.Screen name="Shop_Tab" component={Shop} />
    	</Tabs.Navigator>
	</NavigationContainer>
}




//  const styles = StyleSheet.create({
//    sectionContainer: {
//      marginTop: 32,
//      paddingHorizontal: 24,
//    },
//    sectionTitle: {
//      fontSize: 24,
//      fontWeight: '600',
//    },
//    sectionDescription: {
//      marginTop: 8,
//      fontSize: 18,
//      fontWeight: '400',
//    },
//    highlight: {
//      fontWeight: '700',
//    },
//  });