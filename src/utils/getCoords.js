export default function(coordinates) {
  const [latitude, longitude] = coordinates.split(',');
  
  return {
    latitude,
    longitude
  }
}