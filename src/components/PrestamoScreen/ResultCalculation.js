import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
    const { capital, interest, months, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    {/* <View style={styles.value}>
                        <Text>Cantidad solicitada:</Text>
                        <Text>{capital}</Text>
                    </View> */}
                    <DataResult title="Cantidad Solicitada" value={`${capital} $`}/>
                    <DataResult title="Interes" value={`${interest} %`}/>
                    <DataResult title="Plazos" value={`${months} meses`}/>
                    <DataResult title="Pago Mesual" value={`${total.monthlyFee} $`}/>
                    <DataResult title="Total a Pagar" value={`${total.totalPayable} $`}/>
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>

    )
}

function DataResult(props) {
    const { title, value } = props
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20,
    },
    content: {
        marginTop: 0,
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 15
    },
    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    }
})