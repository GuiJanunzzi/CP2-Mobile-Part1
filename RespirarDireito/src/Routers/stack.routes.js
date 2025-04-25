import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './tab.routes';
import DetalhesParticipante from '../Telas/DetalhesParticipante';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="DetalhesParticipante" component={DetalhesParticipante} options={{ title: 'Participante' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}