import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

export default function ForkidsGame() {

    const navigation = useNavigation();
    const soundObject = new Audio.Sound();

    async function handleNavigateToForkidsFases() {
        navigation.navigate('ForkidsFases');
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

    async function handleTecla(key: string) {
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
            <View style={styles.painel}>
                <View style={styles.niveis}>
                    <Text style={styles.textoTeclaPainel}><Feather name="award" size={20} color="#7B4825" /> Fácil</Text>
                    <Text style={styles.textoTeclaPainel}><Feather name="award" size={20} color="#B3C252" /> Intermediário</Text>
                    <Text style={styles.textoTeclaPainel}><Feather name="award" size={20} color="#B3C252" /> Difícil</Text>
                </View>
                <View style={styles.stars}>
                    <Feather name="key" size={20} color="#7B4825" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
                    <Feather name="lock" size={20} color="#B3C252" /> 
    
                </View>
            </View> 
            <Text style={styles.apalavrae}>A palavra é</Text>
            <Text style={styles.frase}>É uma ave...</Text>
            <View style={styles.palavra}>
                <View style={styles.teclaPalavra}>
                    <Text style={styles.textoTecla}>C</Text>
                </View>
                <View style={styles.teclaPalavra}>
                    <Text style={styles.textoTecla}>O</Text>
                </View>
                <View style={styles.teclaPalavra}>
                    <Text style={styles.textoTecla}>R</Text>
                </View>
                <View style={styles.teclaPalavra}>
                    <Text style={styles.textoTecla}>U</Text>
                </View>
                <View style={styles.teclaPalavra}>
                    <Text style={styles.textoTecla}>J</Text>
                </View>
                <View style={styles.teclaPalavra}>
                    <Text style={styles.textoTecla}>A</Text>
                </View>
            </View>
            <View style={styles.dicaContainer}>
                <View style={styles.dicaButton}>
                <TouchableOpacity style={styles.createButtonPlay} onPress={handleNavigateToForkidsFases}>
                    <Text style={styles.dicaText}>Dica</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.teclado}>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('A')}>
                    <Text style={styles.textoTecla}>A</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('B')}>
                    <Text style={styles.textoTecla}>B</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('C')}>
                    <Text style={styles.textoTecla}>C</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('D')}>
                    <Text style={styles.textoTecla}>D</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('E')}>
                    <Text style={styles.textoTecla}>E</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('F')}>
                    <Text style={styles.textoTecla}>F</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('G')}>
                    <Text style={styles.textoTecla}>G</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('H')}>
                    <Text style={styles.textoTecla}>H</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('I')}>
                    <Text style={styles.textoTecla}>I</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('J')}>
                    <Text style={styles.textoTecla}>J</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('K')}>
                    <Text style={styles.textoTecla}>K</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('L')}>
                    <Text style={styles.textoTecla}>L</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('M')}>
                    <Text style={styles.textoTecla}>M</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('N')}>
                    <Text style={styles.textoTecla}>N</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('O')}>
                    <Text style={styles.textoTecla}>O</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('P')}>
                    <Text style={styles.textoTecla}>P</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('Q')}>
                    <Text style={styles.textoTecla}>Q</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('R')}>
                    <Text style={styles.textoTecla}>R</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('S')}>
                    <Text style={styles.textoTecla}>S</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('T')}>
                    <Text style={styles.textoTecla}>T</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('U')}>
                    <Text style={styles.textoTecla}>U</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('V')}>
                    <Text style={styles.textoTecla}>V</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('W')}>
                    <Text style={styles.textoTecla}>W</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('X')}>
                    <Text style={styles.textoTecla}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('Y')}>
                    <Text style={styles.textoTecla}>Y</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tecla}>
                <TouchableOpacity onPress={() => handleTecla('Z')}>
                    <Text style={styles.textoTecla}>Z</Text>
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
      left: -Dimensions.get('window').width/2 + 100,
      top: -Dimensions.get('window').height/2 + 100,

      width: 140,
    },

    createButtonPlay: {
        position: "absolute",
        width: 56,
        height: 56,
        backgroundColor: '#FFF',
        borderRadius: 20,
        
        justifyContent: 'center',
        alignItems: 'center',
      },
  
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

    painel: {
        position: "absolute",
        backgroundColor: '#EFEDBE',
        borderRadius: 10,
        width: 340,
        height: 80,
        left: 150,
        top: -22,  
        opacity: 0.7,

        borderColor: '#7B4825',
        borderStyle: "solid",
        borderWidth: 2,

        elevation: 9,
    },

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

    textButtons: {     
      fontFamily: 'Nunito_700Bold',
      fontSize: 50,
      letterSpacing: -3,
      lineHeight: 55,
      
    },
  
    textlogo: {
      top: 6,
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 40,
      letterSpacing: -3,
    },

    apalavrae: {
        top: 21,
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 22,
        left: 13,

    },

    frase: {
        position: 'absolute',
        top: 60,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        left: 153,

    },

    dicaContainer: {
        position: "absolute",
        backgroundColor: '#fff',
        borderRadius: 60,
        height: 110,
        width: 110,
        top: 20,
        right: -460,
        opacity: 0.5,
 
        justifyContent: 'center',
        alignItems: 'center',

    },
  
    dicaButton: {
        position: "absolute",
        backgroundColor: '#fff',
        borderRadius: 40,
        height: 70,
        width: 70,    

        justifyContent: 'center',
        alignItems: 'center',
    },

    dicaText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
    },

    imgBackground: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      flex: 1 
    },
  
    imgPrateleira: {
      width: 140,
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

    palavra: {
        position: 'absolute',

        width: 300,
        height: 45,
        left: 150,
        top: 85,

        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
    
      },

    teclado: {
         
        width: 340,
        height: 300,
        left: 140,
        top: -30,

        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-end",
        flexWrap: 'wrap',

      },

    tecla: {
        backgroundColor: '#fff',
        borderRadius: 7,
        height: 30,
        width: 30,
        paddingLeft: 8,
        margin: 6, 
        justifyContent: 'center',

        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 3,
      },


      teclaPalavra: {
        backgroundColor: '#E8EA8A',
        borderRadius: 7,
        height: 30,
        width: 30,
        paddingLeft: 8,
        margin: 3,
        justifyContent: 'center',
        
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.9,
        shadowRadius: 3,
      },

    textoTecla: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 17,
    },

    textoTeclaPainel: {
        color: '#000',
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
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
  
  });