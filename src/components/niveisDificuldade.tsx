import React, {useState} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  nivelDificuldade: number;
}

export default function Niveis({nivelDificuldade} : HeaderProps) {
	var niveisDificuldade = ['Fácil', 'Intermediário', 'Difícil'];
	
  return (
    <View>
        <View style={styles.niveis}>
        {niveisDificuldade.map((niveisDificuldade, key) => {					
						return (
							<View key={key}>
								{key == nivelDificuldade ? (
                    <Text style={styles.textoTeclaPainel}>
                      <Feather 
                        name="award" 
                        size={20} 
                        color="#7B4825" /> {niveisDificuldade}
                    </Text>
								) : (
                    <Text style={styles.textoTeclaPainel}>
                      <Feather 
                        name="award" 
                        size={20} 
                        color="#B3C252" /> {niveisDificuldade}
                    </Text>
								)}
							</View>
						);
        })}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    niveis: {
        position: "absolute",
        borderColor: '#fff',
        borderStyle: "solid",
        borderWidth: 0,
        width: 300,
        height: 25,
        left: 15,
        top: 15,

        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: 'wrap',  
    },

    textoTeclaPainel: {
        color: '#000',
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
    },
});