import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

interface HeaderProps {
  dica2: string;
}

export default function Dica({dica2}: HeaderProps) {
  const navigation = useNavigation();
  
  const [checked, setChecked] = useState(0);
  
  async function handleNavigateToForkidsFases() {

    setChecked(1);

    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require('../sounds/tecla.mp3'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
    // navigation.navigate('ForkidsFases');
  }

  return (
    <View style={styles.dicaContainer}>
      <View style={styles.dicaButton}>  
      {checked == 0 ? (
        <TouchableOpacity style={styles.createButtonPlay} onPress={handleNavigateToForkidsFases}>
            <Text style={styles.dicaText}>Dica</Text>
        </TouchableOpacity>
      ) : (
            <Text style={styles.dicaText}>{dica2}</Text>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dicaContainer: {
    position: "absolute",
    backgroundColor: '#fff',
    borderRadius: 60,
    height: 110,
    width: 110,
    top: 10,
    right: 10,
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

  createButtonPlay: {
    position: "absolute",
    width: 56,
    height: 56,
    backgroundColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dicaText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,

    textAlign: "center",
    textAlignVertical: "center",
    width: 100,
    height: 100,
    borderColor: '#7B4825',
    borderStyle: "solid",
    borderWidth: 0,
  },

});