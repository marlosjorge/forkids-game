import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Audio } from 'expo-av';

async function handleTecla() {
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

export default function Radio() {
  const [checked, setChecked] = useState(0);
	var lingua = ['Português', 'Inglês'];
	
  return (
    <View>
      <View>
        {lingua.map((lingua, key) => {					
						return (
							<View key={lingua}>
								{checked == key ? (
									<View>
											<TouchableOpacity>
													<Text style={styles.textButtons}>
															<Feather 
																	name="check-square" 
																	size={30} 
																	color="#000" /> {lingua}
													</Text>
											</TouchableOpacity>
									</View>
								) : (
									<View>
											<TouchableOpacity onPress={() => {setChecked(key); handleTecla();}}>
													<Text style={styles.textButtons}>
															<View style={styles.viewSpace} /> {lingua}
													</Text>
											</TouchableOpacity>
									</View>
								)}
							</View>
						);
        })}
      </View>

      {/* <Text>{gender[checked]}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textButtons: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 50,
    letterSpacing: -3,
		lineHeight: 55,
	},

	viewSpace: {
		width: 27,
		height: 30,
	}
});