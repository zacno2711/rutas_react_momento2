import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// SCREENS
import InicioScreen from "./screens/InicioScreen";
import FuncionalidadScreen from "./screens/FuncionalidadScreen";
import PrestamoScreen from "./screens/PrestamoScreen";
import UserList from "./screens/UsersScreen/UserList";
import CreateUserScreen from "./screens/UsersScreen/CreateUserScreen";
import UserDetailScreen from "./screens/UsersScreen/UserDetailScreen";
// ICON
import { MaterialCommunityIcons } from '@expo/vector-icons';
 
const HomeStackNavigator = createStackNavigator()
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function UserStack (){
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name="CreateUserScreen"component={CreateUserScreen}/>
                <Stack.Screen name= "UserList" component={UserList}/>
                <Stack.Screen name="UserDetailScreen"component={UserDetailScreen}/>
            </Stack.Navigator>
        </>
    )
}

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName=""
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
            <Tab.Screen 
                name="Inicio" 
                component={InicioScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => ( 
                        <MaterialCommunityIcons name="alien-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Funcionalidad" 
                component={FuncionalidadScreen}
                options={{
                    tabBarLabel: 'Funcionalidad',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="baguette" size={size} color={color} /> 
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Prestamos" 
                component={PrestamoScreen}
                options={{
                    tabBarLabel: 'Prestamos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="axe-battle" size={size} color={color} /> 
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Usuarios" 
                component={UserStack}
                options={{
                    tabBarLabel: 'Usuarios',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-box" size={size} color={color} /> 
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
