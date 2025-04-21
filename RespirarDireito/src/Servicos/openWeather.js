const API_KEY = '5c5bc1365793ba9c9d0f9680a762e668';

// Pegar latitude e longitude pela cidade
export async function getCoordsByCity(cidade) {
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${API_KEY}`);
  const data = await res.json();

  if (!data || data.length === 0) throw new Error('Cidade inválida');
  return { lat: data[0].lat, lon: data[0].lon };
}

// Pegar qualidade do ar usando lat/lon
export async function getAirQuality(lat, lon) {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const data = await res.json();

  const info = data.list[0];
  return {
    aqi: info.main.aqi,
    pm2_5: info.components.pm2_5,
    pm10: info.components.pm10,
  };
}