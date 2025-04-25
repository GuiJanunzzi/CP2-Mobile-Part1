import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ParticipanteCard from '../Components/ParticipanteCard';

const participantes = [
  {
    nome: 'Caike Dametto',
    funcao: 'Desenvolvedor Frontend',
    github: 'Dametto98',
    stack: 'React Native, Next.js, Tailwind'
  },
  {
    nome: 'Guilherme Janunzzi',
    funcao: 'Dev Backend / API',
    github: 'GuiJanunzzi',
    stack: 'Java, JavaScript, OracleDB'
  }
];

export default function SobreScreen({ navigation }) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Sobre o Projeto</Text>
        <Text style={styles.descricao}>
          Este aplicativo foi desenvolvido como parte de um projeto educacional para conscientização sobre a qualidade do ar e saúde ambiental.
        </Text>
  
        <Text style={styles.subtitulo}>Participantes</Text>
  
        {participantes.map((p, index) => (
          <ParticipanteCard key={index} {...p} navigation={navigation} />
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f1f8e9',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#33691e',
      marginBottom: 10,
      textAlign: 'center',
    },
    descricao: {
      fontSize: 16,
      textAlign: 'center',
      color: '#333',
      marginBottom: 20,
    },
    subtitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#558b2f',
      marginBottom: 10,
      alignSelf: 'flex-start',
    },
  });