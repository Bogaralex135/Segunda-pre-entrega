import { Component } from './componentModel.js'

const procesador1 = new Component(
  'Intel Core i5-11400F',
  '6 núcleos, 12 hilos, 2.6GHz-4.4GHz, 12MB de caché, TDP 65W',
  160,
  '../../Assets/img/Procesadores/Intel Core i5-11400F.png'
)
const procesador2 = new Component(
  'AMD Ryzen 5 5600X',
  '6 núcleos, 12 hilos, 3.7GHz-4.6GHz, 35MB de caché, TDP 65W',
  300,
  'Assets/img/Procesadores/AMD Ryzen 5 5600X.png'
)
const procesador3 = new Component(
  'Intel Core i7-11700K',
  '8 núcleos, 16 hilos, 3.6GHz-5.0GHz, 16MB de caché, TDP 125W',
  400,
  'https://www.cyberpuerta.mx/img/product/XL/CP-INTEL-BX8070811700K-4.jpg'
)
const procesador4 = new Component(
  'AMD Ryzen 7 5800X',
  '8 núcleos, 16 hilos, 3.8GHz-4.7GHz, 36MB de caché, TDP 105W',
  450,
  'https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000063WOF-1.jpg'
)
const procesador5 = new Component(
  'Intel Core i9-11900K',
  '8 núcleos, 16 hilos, 3.5GHz-5.3GHz, 16MB de caché, TDP 125W',
  600,
  'https://www.cyberpuerta.mx/img/product/XL/CP-INTEL-BX8070811900K-4.jpg'
)
const procesador6 = new Component(
  'AMD Ryzen 9 5900X',
  '12 núcleos, 24 hilos, 3.7GHz-4.8GHz, 70MB de caché, TDP 105W',
  800,
  'https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000061WOF-1.jpg'
)

export const procesadores = [
  procesador1,
  procesador2,
  procesador3,
  procesador4,
  procesador5,
  procesador6,
]
export default procesadores
