import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getCoordsByCity, getAirQuality } from '../Servicos/openWeather';
import InputCidade from '../Components/InputCidade';
import AQICard from '../Components/AQICards';

export default function ConsultaScreen() {
  const [cidade, setCidade] = useState('');
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const consultar = async () => {
    setCarregando(true);
    setErro(null);
    setDados(null);

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

      <InputCidade cidade={cidade} setCidade={setCidade} aoPressionar={consultar} />

      {carregando && <ActivityIndicator size="large" color="#0277bd" />}
      {erro && <Text style={styles.erro}>{erro}</Text>}
      {dados && <AQICard dados={dados} />}
    </View>
  );
}

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
  erro: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});