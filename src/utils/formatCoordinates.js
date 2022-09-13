export default function(coordinates) {
  console.log('coordenadas', coordinates);
  const [latitude, longitude] = coordinates.split(',');
  return {
    latitude:  parseFloat(latitude),
    longitude: parseFloat(longitude)
  }
}