import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Button
} from 'react-native';
import React, { useState, useEffect } from 'react'
import colors from '../src/utils/colors';
import Form from '../src/components/PrestamoScreen/Form';
import Footer from '../src/components/PrestamoScreen/Footer';
import ResultCalculation from '../src/components/PrestamoScreen/ResultCalculation';

export default function PrestamoScreen() {
    const [capital, setCapital] = useState(null)
    const [interest, setInterest] = useState(null)
    const [months, setMonths] = useState(null)
    const [total, setTotal] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {

        if (capital && interest && months) calculate;
        else reset()
    }, [capital, interest, months])

    const reset = () => {
        setErrorMessage("");
        setTotal(null)
    }

    const calculate = () => {
        reset();
        if (!capital) {
            setErrorMessage("Añade la cantidad que quieres solicitar")
        } else if (!interest) {
            setErrorMessage("Añade el interes del prestamo")
        } else if (!months) {//hay que corregir error de validacion de meses
            setErrorMessage("Selecciona los meses a pagar")
        } else {
            const i = interest / 100;
            const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
            setTotal({
                monthlyFee: fee.toFixed(2).replace('.', ','),
                totalPayable: (fee * months).toFixed(2).replace('.', ',')
            })


        }

    }
    return (
        <>
            <StatusBar barStyle="ligth-content" />
            <SafeAreaView style={styles.safearea}>
                <View style={styles.background} />
                <Text style={styles.title}>Cotizador de Prestamos</Text>
                <Form
                    setCapital={setCapital}
                    setInterest={setInterest}
                    setMonths={setMonths}
                />
            </SafeAreaView>
            <ResultCalculation
                capital={capital}
                interest={interest}
                months={months}
                total={total}
                errorMessage={errorMessage}

            />
            <Footer calculate={calculate} />
        </>
    )

}

const styles = StyleSheet.create({
    safearea: {
        // backgroundColor: colors.PRIMARY_COLOR,
        height: 290,
        alignItems: "center"
    },
    background: {
        backgroundColor: colors.PRIMARY_COLOR,
        height: 200,
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: "absolute",
        zIndex: -1
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 15,
    }

})
