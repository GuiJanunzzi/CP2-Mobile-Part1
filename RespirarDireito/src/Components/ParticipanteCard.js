import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ParticipanteCard({ nome, funcao, github, stack, navigation }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('DetalhesParticipante', { nome, funcao, github, stack })
        }
      >
        <Image source={{ uri: `https://github.com/${github}.png` }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.funcao}>{funcao}</Text>
          <Text style={styles.github}>@{github}</Text>
        </View>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  funcao: {
    fontSize: 14,
    color: '#555',
  },
  github: {
    fontSize: 13,
    color: '#888',
  },
});