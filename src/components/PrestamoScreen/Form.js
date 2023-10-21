import React from "react";
import { StyleSheet, TextInput, View, view } from "react-native"
import colors from '../../utils/colors'
import { Picker } from '@react-native-picker/picker';

export default function Form(props) {
    const {setCapital, setInterest, setMonths, setNombre}=props
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setCapital(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPersentage]}
                    onChange={e => setInterest(e.nativeEvent.text)}
                />
            </View>
            <Picker
                style={pycketSelectStyles.inputAndroid}
                onValueChange={(itemValue) => setMonths(itemValue)}
                placeholder={{
                    label: 'selecciona los plazos...',
                    value: null
                }}>
                <Picker.Item label="elija un mes" value="" />
                <Picker.Item label="3 meses" value="3" />
                <Picker.Item label="6 meses" value="6" />
                <Picker.Item label="12 meses" value="12" />
                <Picker.Item label="24 meses" value="24" />
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20,
    },
    inputPersentage: {
        width: "40%",
        marginLeft: 5,
    },
    inputItem:{
        color: "black"
    }
})
const pycketSelectStyles=StyleSheet.create({
    inputIos: {

    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
        marginLeft:-5,
        marginRight:-5,
    }
})