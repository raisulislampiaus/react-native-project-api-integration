import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { View, Text } from 'react-native'
import Home from '../screen/Home';
import SingleProduct from '../screen/SingleProduct';


const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Product Detail'
                component={SingleProduct}
                options={{
                    headerShown: false,
                }}
            />
            
        </Stack.Navigator>
    )
}

export default function HomeNavigation() {
    return <MyStack />;
}