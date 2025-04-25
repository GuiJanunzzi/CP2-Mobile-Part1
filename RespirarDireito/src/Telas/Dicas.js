import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import BotaoLink from '../Components/BotaoLink';

export default function DicasScreen() {
  const abrirMaisDicas = () => {
    Linking.openURL('https://www.greenpeace.org/brasil/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Dicas para Respirar Melhor</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>Use máscara em dias de má qualidade do ar, especialmente N95 ou PFF2.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>Tenha plantas em casa! Algumas espécies ajudam a filtrar o ar naturalmente.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>Use transporte coletivo, bicicleta ou caminhe: menos carros, menos poluição.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>Evite queimar lixo ou folhas — isso libera poluentes perigosos no ar.</Text>
      </View>

      <BotaoLink texto="Mais dicas no Greenpeace" url="https://www.greenpeace.org/brasil/" cor="#ef6c00" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff3e0',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#e65100',
      marginBottom: 15,
      textAlign: 'center',
    },
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
    botao: {
      backgroundColor: '#ef6c00',
      padding: 12,
      borderRadius: 8,
      marginTop: 20,
    },
    botaoTexto: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });