import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    destaque: {
        height: 100,
        padding: 20,        
        backgroundColor: '#26c6da',
        borderBottomWidth: 1,
        borderColor: '#0ff',
    },
    textoDestaque: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    moedas: {
        padding: 10
    },
    texto: {
        paddingTop: 10,
        fontSize: 18,
    },
    breve: {
        marginTop:40
    }
});

export default styles;