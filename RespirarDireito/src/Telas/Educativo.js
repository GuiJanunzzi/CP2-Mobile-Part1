import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import BotaoLink from '../Components/BotaoLink';

export default function EducativaScreen() {
  const abrirLink = () => {
    Linking.openURL('https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/exposicao-no-trabalho-e-no-ambiente/poluentes/poluicao-do-ar');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>O que é AQI?</Text>

      <Text style={styles.texto}>
        AQI (Air Quality Index) é um índice que informa a qualidade do ar em uma região. Ele vai de 1 a 5:
      </Text>

      <Image source={require('../../assets/faixa-aqi.png')} style={styles.image} />

      <Text style={styles.subtitulo}>Faixas do AQI:</Text>
      <Text style={styles.lista}>
        1 - Boa{'\n'}
        2 - Razoável{'\n'}
        3 - Moderada{'\n'}
        4 - Ruim{'\n'}
        5 - Muito Ruim
      </Text>

      <Text style={styles.subtitulo}>Principais poluentes:</Text>
      <Text style={styles.texto}>
        • PM2.5: partículas muito pequenas, penetram nos pulmões e corrente sanguínea.{'\n'}
        • PM10: partículas maiores, causam problemas respiratórios.{'\n'}
        • CO, NO2, SO2: gases que prejudicam a respiração e afetam principalmente crianças e idosos.
      </Text>

      <Image source={require('../../assets/poluente.jpg')} style={styles.image} />

      <BotaoLink
        texto="Saiba mais sobre poluição no site do INCA"
        url="https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/exposicao-no-trabalho-e-no-ambiente/poluentes/poluicao-do-ar"
        cor="#388e3c"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#e8f5e9',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1b5e20',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 15,
      marginBottom: 5,
      color: '#2e7d32',
    },
    texto: {
      fontSize: 16,
      textAlign: 'justify',
      marginBottom: 10,
      color: '#333',
    },
    lista: {
      fontSize: 16,
      color: '#444',
      textAlign: 'left',
      alignSelf: 'stretch',
    },
    image: {
      width: '100%',
      height: 160,
      borderRadius: 10,
      marginVertical: 10,
    },
    botao: {
      backgroundColor: '#388e3c',
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