import { Component } from './Component.js'

const tarjetaGrafica1 = new Component(
  'NVIDIA GeForce RTX 3080',
  'Memoria GDDR6X de 10GB, velocidad de reloj de 1710MHz, ancho de banda de memoria de 760GB/s',
  700,
  'https://images-na.ssl-images-amazon.com/images/I/81v%2B6GhefjL._AC_SL1500_.jpg'
)
const tarjetaGrafica2 = new Component(
  'AMD Radeon RX 6800 XT',
  'Memoria GDDR6 de 16GB, velocidad de reloj de 2015MHz, ancho de banda de memoria de 512GB/s',
  650,
  'https://images-na.ssl-images-amazon.com/images/I/71RCacJH%2BWL._AC_SL1500_.jpg'
)
const tarjetaGrafica3 = new Component(
  'NVIDIA GeForce RTX 3070',
  'Memoria GDDR6 de 8GB, velocidad de reloj de 1500MHz, ancho de banda de memoria de 448GB/s',
  500,
  'https://images-na.ssl-images-amazon.com/images/I/81Whvo6gRkL._AC_SL1500_.jpg'
)
const tarjetaGrafica4 = new Component(
  'AMD Radeon RX 5700 XT',
  'Memoria GDDR6 de 8GB, velocidad de reloj de 1605MHz, ancho de banda de memoria de 448GB/s',
  400,
  'https://images-na.ssl-images-amazon.com/images/I/81yXh%2BbTjzL._AC_SL1500_.jpg'
)
const tarjetaGrafica5 = new Component(
  'NVIDIA GeForce GTX 1660 Super',
  'Memoria GDDR6 de 6GB, velocidad de reloj de 1530MHz, ancho de banda de memoria de 336GB/s',
  250,
  'https://images-na.ssl-images-amazon.com/images/I/71qQv2%2BbqjL._AC_SL1500_.jpg'
)
const tarjetaGrafica6 = new Component(
  'AMD Radeon RX 5500 XT',
  'Memoria GDDR6 de 8GB, velocidad de reloj de 1717MHz, ancho de banda de memoria de 224GB/s',
  200,
  'https://images-na.ssl-images-amazon.com/images/I/71qD7jLXZvL._AC_SL1500_.jpg'
)

export const tarjetasGraficas = [
  tarjetaGrafica1,
  tarjetaGrafica2,
  tarjetaGrafica3,
  tarjetaGrafica4,
  tarjetaGrafica5,
  tarjetaGrafica6,
]

export default tarjetasGraficas
