import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

export default function BotaoLink({ texto, url, cor = '#388e3c' }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: cor }]}
      onPress={() => Linking.openURL(url)}
    >
      <Text style={styles.botaoTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
