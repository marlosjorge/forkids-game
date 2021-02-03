import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

import Radio from '../components/radioButton';

export default function ForkidsStart() {
    const navigation = useNavigation();

    async function handleNavigateToForkidsGame() {
        navigation.navigate('ForkidsGame');

        try {
            const { sound: soundObject, status } = await Audio.Sound.createAsync(
              require('../sounds/tecla.mp3'),
              { shouldPlay: true }
            );
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }

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

        <View style={styles.buttons}>
            <Radio />
            <View style={styles.buttonsView}>
              <Text style={styles.buttonsText}>Play game</Text>
              <TouchableOpacity style={styles.createButtonPlay} onPress={handleNavigateToForkidsGame}>
                <Feather name="arrow-right-circle" size={20} color="#FFF" />
              </TouchableOpacity>  
            </View>
        </View>
        
        <View style={styles.componenteBau}>
          <Image style={styles.bau} source={require('../img/bau.png')} />
          <View style={styles.face}>
              <View style={styles.olhoEsquerdo}></View>
              <View style={styles.olhoDireito}></View>
              <View style={styles.boca}></View>
          </View>
        </View>
  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    flex: 1,
    left: -Dimensions.get('window').width/2 + 150,
    top: -Dimensions.get('window').height/2 + 100,
  },

  buttons: {
    flex: 1,
    left: 150,
    top: -Dimensions.get('window').height/2 + 40,
  },

  textButtons: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 50,
    letterSpacing: -3,
    lineHeight: 55,
  },

  textlogo: {
    top: 10,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 70,
    letterSpacing: -4,
  },

  imgBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1 
  },

  imgPrateleira: {
    width: 250,
  },

  componenteBau: {
    flex: 1,
    left: -Dimensions.get('window').width/2 + 30,
    bottom: 140,
  },

  bau: {
    width: 270,
    height: 216,
    position: 'absolute',
  },

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

  buttonsView: {
    top: 130,
    position: "absolute",
    opacity: 0.7,
    left: 30,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    width: 220,
    paddingLeft: 90,

    flexDirection: "row-reverse",
    alignItems: "center",

    elevation: 5,
  },

  buttonsText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    color: '#000',
  },

  createButtonPlay: {
    position: "absolute",
    width: 56,
    height: 56,
    backgroundColor: '#000',
    borderRadius: 20,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  });