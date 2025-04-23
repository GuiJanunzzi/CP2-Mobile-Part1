import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function InputCidade({ cidade, setCidade, aoPressionar }) {
  return (
    <View>
      <TextInput
        placeholder="Digite a cidade"
        style={styles.input}
        value={cidade}
        onChangeText={setCidade}
      />
      <TouchableOpacity style={styles.botao} onPress={aoPressionar}>
        <Text style={styles.botaoTexto}>Consultar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#90caf9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#0288d1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
