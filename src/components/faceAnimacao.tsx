import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

export default function Face() {
  return (
      <View style={styles.face}>
          <View style={styles.olhoEsquerdo}></View>
          <View style={styles.olhoDireito}></View>
          <View style={styles.boca}></View>
      </View>

  );
};

const styles = StyleSheet.create({
  face: {
    borderColor: '#000',
    borderStyle: "solid",
    borderWidth: 0,
    position: 'absolute',
    width: 57,
    height: 64,
    left: 120,
    top: 10,
  },

  piscar: {
    transform: [{rotateY: "180deg"}],
  },

  olhoEsquerdo: {
    position: 'absolute',
    width: 17,
    height: 24,
    left: 0,
    top: 0,
    borderRadius: 10,
    
    backgroundColor: '#000000',
    transform: [{rotate: "-7.5deg"}],
  },

  olhoDireito: {
    position: 'absolute',
    width: 17,
    height: 24,
    left: 40,
    borderRadius: 50,

    backgroundColor: '#000000',
    transform: [{rotate: "-9.22deg"}],
  },

  boca: {
    position: 'absolute',
    width: 46,
    height: 22,
    left: 10,
    top: 40,
    borderRadius: 50,
    backgroundColor: '#000000',
    transform: [{rotate: "-2.78deg"}],
  },
});