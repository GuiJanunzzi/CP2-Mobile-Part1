import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Telas/Home';
import ConsultaScreen from '../Telas/Consulta';
import EducativaScreen from '../Telas/Educativo';
import DicasScreen from '../Telas/Dicas';
import SobreScreen from '../Telas/Sobre';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home': iconName = 'home'; break;
            case 'Consulta': iconName = 'search'; break;
            case 'Educação': iconName = 'book'; break;
            case 'Dicas': iconName = 'leaf'; break;
            case 'Sobre': iconName = 'people'; break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2e7d32',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Consulta" component={ConsultaScreen} />
      <Tab.Screen name="Educação" component={EducativaScreen} />
      <Tab.Screen name="Dicas" component={DicasScreen} />
      <Tab.Screen name="Sobre" component={SobreScreen} />
    </Tab.Navigator>
  );
}