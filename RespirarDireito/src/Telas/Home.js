import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  console.log(navigation);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Respirar é um Direito</Text>

      <Text style={styles.subtitle}>
        Descubra a qualidade do ar na sua cidade e saiba como se proteger da poluição.
      </Text>

      <Image
        source={require('../../assets/poluicao1.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/natureza.jpg')}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Consulta')}
      >
        <Text style={styles.buttonText}>Consultar Qualidade do Ar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Educação')}
      >
        <Text style={styles.buttonText}>Aprenda sobre o AQI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dicas')}
      >
        <Text style={styles.buttonText}>Dicas e Cuidados</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#f0f8ff',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 16,
      textAlign: 'center',
      color: '#1a237e',
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
    },
    image: {
      width: '100%',
      height: 180,
      marginVertical: 10,
      borderRadius: 12,
    },
    button: {
      backgroundColor: '#0277bd',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginVertical: 8,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });