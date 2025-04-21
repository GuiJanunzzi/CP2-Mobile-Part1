import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getCoordsByCity, getAirQuality } from '../services/openWeather';

export default function ConsultaScreen() {
  const [cidade, setCidade] = useState('');
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const consultar = async () => {
    setCarregando(true);
    setErro(null);
    try {
      const { lat, lon } = await getCoordsByCity(cidade);
      const resultado = await getAirQuality(lat, lon);
      setDados(resultado);
    } catch (e) {
      setErro('Cidade não encontrada ou erro na API.');
    }
    setCarregando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta de Qualidade do Ar</Text>

      <Image source={require('../assets/imagens/poluicao2.jpg')} style={styles.image} />

      <TextInput
        placeholder="Digite a cidade"
        style={styles.input}
        value={cidade}
        onChangeText={setCidade}
      />

      <TouchableOpacity style={styles.botao} onPress={consultar}>
        <Text style={styles.botaoTexto}>Consultar</Text>
      </TouchableOpacity>

      {carregando && <ActivityIndicator size="large" color="#0277bd" />}

      {erro && <Text style={styles.erro}>{erro}</Text>}

      {dados && (
        <View style={styles.card}>
          <Text style={styles.resultado}>AQI: {dados.aqi} - {descricaoAQI(dados.aqi)}</Text>
          <Text style={styles.poluentes}>PM2.5: {dados.pm2_5}</Text>
          <Text style={styles.poluentes}>PM10: {dados.pm10}</Text>
        </View>
      )}

      <Image source={require('../../assets/ar-limpo')} style={styles.image} />
    </View>
  );
}

const descricaoAQI = (aqi) => {
  const descricoes = ['Boa', 'Razoável', 'Moderada', 'Ruim', 'Muito Ruim']
  return descricoes[aqi - 1] || 'Desconhecida';
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e3f2fd',
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#01579b',
  },
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
  image: {
    width: '100%',
    height: 150,
    marginVertical: 10,
    borderRadius: 12,
  },
  erro: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  card: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 4,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  poluentes: {
    marginTop: 5,
    fontSize: 16,
  },
});