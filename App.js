import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigation/Navigator'
// import MyDrawer from './src/Navigation/MyDrawer'

export default function App() {
  return (
    <NavigationContainer>
        <Navigator />
        
    </NavigationContainer>
  )
}


