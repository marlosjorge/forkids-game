import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity  } from 'react-native';

import Niveis from '../components/niveisDificuldade';
import NiveisCadeado from '../components/niveisCadeado';
import Palavra from '../components/palavraSorteada';
import Dica from '../components/dicaPalavra';
import Bau from '../components/bauAnimacao';

export default function ForkidsGame() {
  
    return (
        <View style={styles.container}>
          <ImageBackground style={ styles.imgBackground } 
                    resizeMode='cover' 
                    source={require('../img/fundo.png')}>
          </ImageBackground>

          <View style={styles.logo}>
            <Text style={styles.textlogo}>ForKIDS</Text>
            <Image style={styles.imgPrateleira} source={require('../img/prateleira.png')} />
          </View>

          <View style={styles.ContainerPainel}>
              <Niveis nivelDificuldade={2}/>
              <NiveisCadeado nivelPalavra={3} />
          </View>

          <View style={styles.ContainerPalavra}>
            <Palavra palavra={'Palavra'} dica1={'Esta é a dica 1 não se preocupe com o tamanho da frase.'} teclasSelecionadas='' />
            <Dica dica2={'Esta é a dica 2 muito boa essa dica'}/>
          </View>

          <View style={styles.ContainerBauTeclado}>
            <Bau statusBau={0} />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    imgBackground: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,

      borderColor: '#F00',
      borderStyle: "solid",
      borderWidth: 1,
    },
   
    logo: {
      position: 'absolute',
      left: 10,
      top: 0,
      width: 140,
    },

    imgPrateleira: {
      width: 140,
    },

    textlogo: {
      top: 6,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 40,
      letterSpacing: -3,
      
    },

    ContainerPainel: {
        position: "absolute",
        backgroundColor: '#EFEDBE',
        borderRadius: 10,
        width: 340,
        height: 80,
        left: 190,
        top: -12,  
        opacity: 0.7,
        borderColor: '#7B4825',
        borderStyle: "solid",
        borderWidth: 2,
        elevation: 9,
    },

    ContainerPalavra: {
      position: "absolute",
      width: Dimensions.get('window').width - 10,
      height: 130,
      left: 10,
    },

    ContainerBauTeclado: {
      position: "absolute",
      flex: 1,
      width: 620,
      height: 200,

      top: 140,
      left: 30,
    },

  });