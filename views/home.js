import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { TextInput, Button } from 'react-native-paper';


const Home = ({ navigation }) => {

    const [km, setKm] = React.useState();
    const [lt, setLt] = React.useState();

    return (
        <View style={styles.container}>
            <Text>Bem vindo!</Text>
            <View style={styles.inputStyle}>
                <TextInput style={[styles.textInput, { width: "25%" }]}
                    mode="outlined"
                    label="KM"
                    value={km}
                    keyboardType="number-pad"
                    onChangeText={text => setKm(text)}
                />
                <TextInput style={[styles.textInput, { width: "45%" }]}
                    mode="outlined"
                    label="Litros consumidos"
                    value={lt}
                    keyboardType="number-pad"
                    onChangeText={text => setLt(text)}
                />
            </View>
            <Button mode="outlined" onPress={() => navigation.navigate('target', {
                km: km,
                lt: lt,
            })}>
                Calcular
            </Button>
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
    inputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textInput: {
        marginTop: 20,
        height: 50,        
        marginBottom: 10,
        margin: 5
    }
});


export default Home
