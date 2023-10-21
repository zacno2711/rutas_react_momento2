import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid } from "react-native"
import colors from "../../utils/colors";

export default function Header(){
    return(
        <>
            <View>
                
                <TouchableOpacity style={Styles.boton}>
                    <Text style={Styles.text}>
                        Crear Usuario
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    boton:{
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 20, 
        backgroundColor: colors.PRIMARY_COLOR
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#fff',
        textAlign: "center"
    }
})