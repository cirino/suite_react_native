import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ButtonTabuada, ButtonPersonalizado } from '../components/Button';

const Tabuada = () => {
    return (
        <View style={ styles.container }>
            <View style={styles.selecionar}>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                1
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                    2
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                    3
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                    4
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                    5
                </ButtonTabuada>
            </View>
            <View style={styles.selecionar}>                
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                6
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                7
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                8
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                9
                </ButtonTabuada>
                <ButtonTabuada
                onPress={() => alert("Lembre-se ...\nTabuada!")}>
                10
                </ButtonTabuada>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#ccc',        
    },
    selecionar: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 7,
    },
});

export default Tabuada;
