import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screen/Home';
import HomeNavigation from './HomeNavigation'
import Setting from '../screen/Setting';
import Files from '../screen/Files'
import Signin from '../screen/Signin'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/FontAwesome";


const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#000', marginBottom: 5, borderRadius: 20, margin: 10},
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: 'red',
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <Ionicons  name="home" color={color} size={size} />
            ),
          }} 
          name="Home" 
          component={HomeNavigation} 
         />
        <Tab.Screen 
           options={{
              tabBarLabel: 'setting',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons  name="settings-outline" color={color} size={size} />
              ),
            }} 
           name="Setting" 
           component={Setting} 
        />
        <Tab.Screen 
           options={{
              tabBarLabel: 'Storage',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons  name="basket-outline" color={color} size={size} />
              ),
            }} 
           name="Files" 
           component={Files} 
        />
        <Tab.Screen 
           options={{
              tabBarLabel: 'Signin',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon  name="user" color={color} size={size} />
              ),
            }} 
           name="Signin" 
           component={Signin} 
        />
        
      </Tab.Navigator>
    
  );
}

