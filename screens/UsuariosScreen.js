import React from "react";
import { View, Text, StyleSheet,SafeAreaView, TouchableOpacity, PermissionsAndroid } from "react-native"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from '../src/components/UsuariosScreen/Header';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import UserList from "./UsersScreen/UserList"
import CreateUserScreen from "./UsersScreen/CreateUserScreen"
import UserDetailScreen from "./UsersScreen/UserDetailScreen"


function myStack (){
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name= "UserList" component={UserList}/>
                <Stack.Screen name="CreateUserScreen"component={createStackNavigator}/>
                <Stack.Screen name="UserDetailScreen"component={UserDetailScreen}/>
            </Stack.Navigator>
        </>
    )
}
const x = ()=>{
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.body}>
                <Text style={styles.text}>Lista De Usuarios</Text>
                <Header/>
            </View>
        </SafeAreaView>
    )
}

export default function UsuariosScreen (){
    return(
        
            <NavigationContainer>
                <myStack/>
            </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({
    body:{
        marginTop:5,
        padding: 5,
        width :"100%",
        heigth: "100%",
        borderColor: 'black',   
        borderWidth: 2,
    },
    safearea: {
        // backgroundColor: colors.PRIMARY_COLOR,
        height: 290,
        alignItems: "center"
        
    },
    text:{
        textAlign:"center",
        

    }

})
