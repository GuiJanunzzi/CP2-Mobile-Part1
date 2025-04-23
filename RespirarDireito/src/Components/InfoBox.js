import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function InfoBox({ texto, imagem }) {
  return (
    <View style={styles.card}>
      {imagem && <Image source={imagem} style={styles.imagem} />}
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 4,
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
  },
});
