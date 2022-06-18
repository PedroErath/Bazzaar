import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/Entypo'
import Home from '../telas/Home'
import Cartoes from "../telas/Cartoes"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabelStyle: { fontSize: 20 }
    }}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="news" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen
            name="Cartoes"
            component={Cartoes}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="news" color={color} size={30} />
                ),
            }}
        />
                
    </Tab.Navigator>
)