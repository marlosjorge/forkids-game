import React, {useState} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface HeaderProp {
  nivelPalavra: number;
}

export default function NiveisCadeado({nivelPalavra}: HeaderProp) {
	var niveisCadeado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View>
        <View style={styles.stars}>
        {niveisCadeado.map((niveisCadeado, key) => {					
						return (
							<View key={key}>
								{key <= nivelPalavra ? (
                    <Feather name="key" size={20} color="#7B4825" /> 
								) : (
                    <Feather name="lock" size={20} color="#B3C252" />
								)}
							</View>
						);
        })}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    stars: {
        position: "absolute",
        borderColor: '#fff',
        borderStyle: "solid",
        borderWidth: 0,
        width: 300,
        height: 25,
        left: 15,
        top: 46,

        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: 'wrap',
    },
});
