import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/Entypo'
import Home from '../telas/Home'
import Cartoes from "../telas/Cartoes"
import Sobre from "../telas/Sobre"
import Categotias from "../telas/Categorias"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle:{height:60, backgroundColor:'#486966'},
    }}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen
            name="Cartoes"
            component={Cartoes}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="credit-card" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen
            name="Sobre a Loja"
            component={Sobre}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="news" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen
            name="Categorias"
            component={Categotias}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="list" color={color} size={30} />
                ),
            }}
        />
    </Tab.Navigator>
)