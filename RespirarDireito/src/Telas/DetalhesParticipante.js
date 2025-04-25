import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function DetalhesParticipante({ route }) {
  const { nome, funcao, github, stack } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: `https://github.com/${github}.png` }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.funcao}>{funcao}</Text>
      <Text style={styles.stack}>Stack: {stack}</Text>

      <TouchableOpacity onPress={() => Linking.openURL(`https://github.com/${github}`)}>
        <Text style={styles.link}>Ver perfil no GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fffde7',
    flex: 1,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  funcao: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  stack: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  link: {
    color: '#1e88e5',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
