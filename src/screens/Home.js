//1º Passo - importar o React
import React, {useState} from "react";

//2° Passo - importar os componentes do react-native
import{View,
       Text,
       TextInput,
       StyleSheet,
       TouchableOpacity
} from 'react-native';

export default function Home(){

    let [tempC, setTempC] = useState();
    let [tempF, setTempF] = useState();

    function Calcular(){
        let resultado = (9* tempC +160)/5;
        setTempF(resultado);
        //F=(9*C+160)/5
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Conversão de Temperatura</Text>
            <TextInput
                onChangeText={setTempC}
                style={styles.campo}
                placeholder= "Digite o número de  Celcius para ser convertido em Fahrenheit"
            />

            <Text style={styles.subtitulo}>Resultado {tempF} Fº </Text>

            <TouchableOpacity onPress={Calcular} style={styles.button}>
                <Text style={styles.buttontext}>Converter</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#30478C',
        paddingVertical: 70,
        paddingHorizontal: 20,
    },

    titulo:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFD700'
    },

    subtitulo:{
      color: '#fff',
      fontSize: 15, 
    },

    campo: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: 15
    },

    button:{
        backgroundColor:'#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },

    buttontext:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
});