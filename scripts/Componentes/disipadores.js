import { Component } from './componentModel.js'

const disipador1 = new Component(
  'Noctua NH-D15',
  '2 ventiladores de 140mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de doble torre para una refrigeración óptima',
  90,
  'https://images-na.ssl-images-amazon.com/images/I/71d9Z8%2B%2BkNL._AC_SL1500_.jpg'
)
const disipador2 = new Component(
  'be quiet! Dark Rock Pro 4',
  '2 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de doble torre para una refrigeración silenciosa',
  80,
  'https://images-na.ssl-images-amazon.com/images/I/81J%2Bx7Z8DKL._AC_SL1500_.jpg'
)
const disipador3 = new Component(
  'Corsair iCUE H150i ELITE CAPELLIX',
  '3 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, refrigeración líquida para un rendimiento excepcional',
  200,
  'https://images-na.ssl-images-amazon.com/images/I/61YFz2E%2B1oL._AC_SL1000_.jpg'
)
const disipador4 = new Component(
  'Cooler Master Hyper 212 RGB Black Edition',
  '1 ventilador de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de torre para una refrigeración eficiente',
  40,
  'https://images-na.ssl-images-amazon.com/images/I/7141rVki0QL._AC_SL1500_.jpg'
)
const disipador5 = new Component(
  'Arctic Freezer 34 eSports DUO',
  '2 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de torre para una refrigeración eficiente con una estética atractiva',
  50,
  'https://images-na.ssl-images-amazon.com/images/I/71z9R5MqBFL._AC_SL1500_.jpg'
)
const disipador6 = new Component(
  'NZXT Kraken X73',
  '3 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, refrigeración líquida para un rendimiento superior con un diseño atractivo',
  180,
  'https://images-na.ssl-images-amazon.com/images/I/71rB-Bh5%2B9L._AC_SL1500_.jpg'
)

export const disipadores = [
  disipador1,
  disipador2,
  disipador3,
  disipador4,
  disipador5,
  disipador6,
]

export default disipadores
