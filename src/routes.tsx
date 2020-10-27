import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import ForkidsStart from './pages/ForkidsStart';
import ForkidsGame from './pages/ForkidsGame';
import ForkidsFases from './pages/ForkidsFases';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen 
                    name="ForkidsStart" 
                    component={ForkidsStart} 
                />

                <Screen 
                    name="ForkidsGame" 
                    component={ForkidsGame} 
                />

                <Screen 
                    name="ForkidsFases" 
                    component={ForkidsFases} 
                />
            </Navigator>
        </NavigationContainer>
    );
}