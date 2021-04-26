import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

import Services from './service';


const Target = ({ route, navigation }) => {

    const { km, lt } = route.params;

    const [resultado, setResultado] = useState();
    const [classificacao, setClassificacao] = useState();

    const getStile = (classificacao) => {
        switch (classificacao) {
            case 'A':
                return { color: '#0b6b1e' }
            case 'B':
                return { color: '#14a832' }
            case 'C':
                return { color: '#18de40' }
            case 'D':
                return { color: '#eaed1c' }
            case 'E':
                return { color: '#f79c0a' }
            case 'F':
                return { color: '#ff2600' }
            case 'G':
                return { color: '#9c0500' }
            default:
                break;
        }
    }

    useEffect(() => {
        const result = Services.calcularGasto(km, lt);
        const target = Services.verificarClassificacao(result);
        setResultado(result);
        setClassificacao(target);
        console.log(target)
    });

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/target.jpg')}
            />
            <Text>{km}  KM rodados</Text>
            <Text>{lt}  Litros de gasolina consumidos</Text>
            <Text>{resultado} km rodados por litro</Text>
            <Text style={styles.classificacao}>Classificação:</Text>
            <Text style={[getStile(classificacao), { fontSize: 80 }]}>{classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    classificacao: {
        marginTop: 40,
        fontSize: 40
    }
});


export default Target