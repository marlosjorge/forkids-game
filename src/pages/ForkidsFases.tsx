import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

export default function ForkidsGame() {
    const navigation = useNavigation();
    const soundObject = new Audio.Sound();

    async function handleNavigateToForkidsGame() {
        navigation.navigate('ForkidsGame');

        try {
            const { sound: soundObject, status } = await Audio.Sound.createAsync(
              require('../sounds/door.mp3'),
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
            <Image style={styles.imgEncarte} source={require('../img/encarte_cadeados.png')} />

            <View style={styles.encarte}>
          
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_aberto.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
                <View style={styles.containerCadeado}>
                    <Image style={styles.imgCadeado} source={require('../img/cadeado_fechado.png')} />
                </View>
            </View>

            <TouchableOpacity style={styles.createButtonPlay} onPress={handleNavigateToForkidsGame}>
                <Feather name="arrow-left-circle" size={20} color="#FFF" />
            </TouchableOpacity>
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
      position: "absolute",
      left: 10,
      top: 5,

      width: 140,
    },
  
    imgEncarte: {
            width: 430,
            height: 330,
            position: 'absolute',

            left: 160,
            top: 30,
    },

    encarte: {
        position: "absolute",
        left: 205,
        top: 100,
        width: 320,
        height: 230,

        borderColor: '#000',
        borderStyle: "solid",
        borderWidth: 0,
        
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-end",
        flexWrap: 'wrap',
    },


    containerCadeado: {
        height: 42,
        width: 31,

    },

    imgCadeado: {
        width: 20,
        height: 29,
        position: 'absolute',
    },

     textlogo: {
      top: 6,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 40,
      letterSpacing: -3,
    },

    imgBackground: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      flex: 1 
    },
  
    imgPrateleira: {
      width: 140,
    },
     
    createButtonPlay: {
        position: "absolute",
        width: 56,
        height: 56,
        backgroundColor: '#000',
        borderRadius: 20,
        top: 300,
        left: 590,
        opacity: 0.5,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
  
  });