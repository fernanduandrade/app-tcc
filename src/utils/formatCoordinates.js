export default function(coordinates) {
  const [latitude, longitude] = coordinates.split(',');
  return {
    latitude:  parseFloat(latitude),
    longitude: parseFloat(longitude)
  }
}