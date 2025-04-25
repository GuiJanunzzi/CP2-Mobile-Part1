import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AQICard({ dados }) {
  const getDescricaoAQI = (aqi) => {
    if (aqi === 1) return 'Boa';
    if (aqi === 2) return 'Razoável';
    if (aqi === 3) return 'Moderada';
    if (aqi === 4) return 'Ruim';
    if (aqi === 5) return 'Muito Ruim';
    return 'Perigosa'; // Para valores acima de 5
  };

  return (
    <View style={styles.card}>
      <Text style={styles.resultado}>AQI: {dados.aqi} - {getDescricaoAQI(dados.aqi)}</Text>
      <Text style={styles.poluentes}>PM2.5: {dados.pm2_5}</Text>
      <Text style={styles.poluentes}>PM10: {dados.pm10}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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