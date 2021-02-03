import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, Dimensions, TouchableOpacity, Text} from 'react-native';
import { Audio } from 'expo-av';

import Face from '../components/faceAnimacao';

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

interface HeaderProps {
  statusBau: number;
}

export default function Bau({statusBau}: HeaderProps) {
  const [checked, setChecked] = useState(0);
  return (
      <View style={styles.componenteBau}>
          <View>
            {checked == statusBau ? (
                <TouchableOpacity activeOpacity={1} onPress={() => {setChecked(1)}}>
                    <Image source={require('../img/bau.png')} />
                    <Face />
                </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={1} onPress={() => {setChecked(0); soundBau();}}>
                <Image source={require('../img/bau_aberto.png')} />
              </TouchableOpacity>
            )}
          </View>
      </View>
  );
};

const styles = StyleSheet.create({

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