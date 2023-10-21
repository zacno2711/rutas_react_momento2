import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid } from "react-native"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const FuncionalidadScreen = ()=>{
    return (
        <View>
            <Text
                style = {{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >compartir imagen</Text>
        </View>
    )
}
 export default FuncionalidadScreen
;