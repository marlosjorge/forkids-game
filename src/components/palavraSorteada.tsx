import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

interface HeaderProps {
   palavra: string;
   dica1: string;
   teclasSelecionadas: string;
   palavraImpressa?: Array<string>;
}

interface HeaderPropsBau {
  statusBau: number;
}

const Palavra: React.FC<HeaderProps> = (props) => {
  const [teclasSelecionadas, setTeclasSelecionadas] = React.useState('');

  var tecla = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var paramPalavra = props.palavra.toUpperCase(); 
  var tamanhoPalavra = paramPalavra.length; 
  var letrasPalavraArray = paramPalavra.split('');
  var ConcatenaTeclaSelecionadas = teclasSelecionadas;
  var teclasSelecionadasArray = teclasSelecionadas.split('')
  var PalavraImpressa = Array();
  var qtdeAcertoLetra = 0;

  async function soundDaTecla() {
    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require('../sounds/' + 'tecla.mp3'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  
  async function soundAcerto() {
    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require('../sounds/acerto_palavra.mp3'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  
  async function soundMagic() {
    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require('../sounds/magic.mp3'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  
  async function soundBau() {
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

  function limparPalavraImpressa() {
    letrasPalavraArray.map((letra, i) => {
      PalavraImpressa[i] = '_';
    });
  }

  function incrementaContagemDeLetrasAcertadas(qtdeAcertoLetra: number) {
    qtdeAcertoLetra = qtdeAcertoLetra + 1;
    if (tamanhoPalavra == qtdeAcertoLetra) {
      soundMagic();
      alert('acertou');
    } 
    return qtdeAcertoLetra;
  }

  function checaPalavra() {
    limparPalavraImpressa();


    letrasPalavraArray.map((letra, i) => {
      teclasSelecionadasArray.map((teclaSelecionada, j) => {
        if (letra == teclaSelecionada) {
          PalavraImpressa[i] = letra;
          qtdeAcertoLetra = incrementaContagemDeLetrasAcertadas(qtdeAcertoLetra);
        }
      })
    })    
    soundDaTecla();
  }

  // com o array vazio só roda uma vez
  useEffect(() => {
    alert('useEffect');
  }, []);

  checaPalavra();

  return (
    <View>
        <Text style={styles.apalavrae}>A palavra é</Text>
        <Text style={styles.frase}>{props.dica1}</Text>
        <View style={styles.palavra}>
          {PalavraImpressa.map((letra, key) => {
            return ( 
              <View key={key}>
                  <View style={styles.teclaPalavra}>
                    <Text style={styles.textoTecla}>{letra}</Text>
                  </View>
              </View>
            );
          })}
        </View>
        <View style={styles.teclado}>
        {tecla.map((tecla, key) => {					
            return (
              <View key={key}>
                  <View style={styles.tecla}>
                      <TouchableOpacity onPress={() => setTeclasSelecionadas(ConcatenaTeclaSelecionadas + tecla)}>
                          <Text style={styles.textoTecla} >{tecla}</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            );
        })}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frase: {
      position: 'absolute',
      top: 68,
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 15,
      left: 153,
      width: 390,
      alignContent: 'center',
      alignItems: 'center',
      borderColor: '#7B4825',
      borderStyle: "solid",
      borderWidth: 0,
  },

  apalavrae: {
    top: 83,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 27,
    left: 0,
    width: 150,
    borderColor: '#7B4825',
    borderStyle: "solid",
    borderWidth: 0,
  },

  palavra: {
    position: 'absolute',
    width: 300,
    height: 45,
    left: 150,
    top: 88,
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
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

  teclado: {
    width: 340,
    height: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-end",
    flexWrap: 'wrap',
    left: 270,
    top: 100,
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

  componenteBau: {
    position: "absolute",
    height: 200,

    borderColor: '#7B4825',
    borderStyle: "solid",
    borderWidth: 0,
  },

  componenteBauAberto: {
    flex: 1,
    left: -Dimensions.get('window').width/2 + 30,
    bottom: 130,
  },
});

export default Palavra;