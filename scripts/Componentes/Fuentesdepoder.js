import { Component } from './Component.js'

const fuentePoder1 = new Component(
  'Corsair RM850x',
  'Potencia de 850W, certificación 80+ Gold, cables totalmente modulares, ventilador de 135mm con control de velocidad',
  140,
  'https://images-na.ssl-images-amazon.com/images/I/81j9LpQJzNL._AC_SL1500_.jpg'
)
const fuentePoder2 = new Component(
  'EVGA SuperNOVA 750 G5',
  'Potencia de 750W, certificación 80+ Gold, cables totalmente modulares, ventilador de 135mm con control de velocidad',
  120,
  'https://images-na.ssl-images-amazon.com/images/I/61Rr2M1J3vL._AC_SL1000_.jpg'
)
const fuentePoder3 = new Component(
  'Seasonic FOCUS GX-850',
  'Potencia de 850W, certificación 80+ Gold, cables totalmente modulares, ventilador de 120mm con control de velocidad',
  135,
  'https://images-na.ssl-images-amazon.com/images/I/71QWZtJgRKl._AC_SL1500_.jpg'
)
const fuentePoder4 = new Component(
  'be quiet! Straight Power 11 Platinum 750W',
  'Potencia de 750W, certificación 80+ Platinum, cables totalmente modulares, ventilador de 135mm con control de velocidad',
  170,
  'https://images-na.ssl-images-amazon.com/images/I/61XkLC8nJEL._AC_SL1200_.jpg'
)
const fuentePoder5 = new Component(
  'Thermaltake Toughpower Grand RGB 850W',
  'Potencia de 850W, certificación 80+ Gold, cables totalmente modulares, ventilador de 140mm con iluminación RGB',
  160,
  'https://images-na.ssl-images-amazon.com/images/I/71sRvS1FYaL._AC_SL1500_.jpg'
)
const fuentePoder6 = new Component(
  'Cooler Master MWE Gold 750 V2',
  'Potencia de 750W, certificación 80+ Gold, cables totalmente modulares, ventilador de 120mm con control de velocidad',
  100,
  'https://images-na.ssl-images-amazon.com/images/I/61S5gMgRtUL._AC_SL1000_.jpg'
)

export const fuentesDePoder = [
  fuentePoder1,
  fuentePoder2,
  fuentePoder3,
  fuentePoder4,
  fuentePoder5,
  fuentePoder6,
]

export default fuentesDePoder
