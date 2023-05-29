import { Component } from './Component.js'

const almacenamiento1 = new Component(
  'Samsung 970 EVO Plus 1TB',
  'Formato M.2 NVMe, velocidad de lectura de hasta 3.5GB/s, velocidad de escritura de hasta 3.3GB/s',
  180,
  'https://images-na.ssl-images-amazon.com/images/I/61d%2BcWtnJtL._AC_SL1000_.jpg'
)
const almacenamiento2 = new Component(
  'Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD',
  'Formato 2.5 pulgadas SATA, velocidad de lectura de hasta 560MB/s, velocidad de escritura de hasta 510MB/s',
  110,
  'https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg'
)
const almacenamiento3 = new Component(
  'Seagate BarraCuda 2TB Internal Hard Drive HDD',
  'Formato 3.5 pulgadas SATA, velocidad de lectura de hasta 190MB/s, velocidad de escritura de hasta 180MB/s',
  55,
  'https://images-na.ssl-images-amazon.com/images/I/71CztLi%2BfjL._AC_SL1500_.jpg'
)
const almacenamiento4 = new Component(
  'WD Blue SN550 1TB NVMe Internal SSD',
  'Formato M.2 NVMe, velocidad de lectura de hasta 2.4GB/s, velocidad de escritura de hasta 1.95GB/s',
  105,
  'https://images-na.ssl-images-amazon.com/images/I/81L9%2BzkR4AL._AC_SL1500_.jpg'
)
const almacenamiento5 = new Component(
  'Toshiba X300 4TB Performance Desktop and Gaming Hard Drive',
  'Formato 3.5 pulgadas SATA, velocidad de lectura de hasta 157MB/s, velocidad de escritura de hasta 128MB/s',
  120,
  'https://images-na.ssl-images-amazon.com/images/I/71QW7fYqKSL._AC_SL1500_.jpg'
)
const almacenamiento6 = new Component(
  'Intel 660p 1TB NVMe Internal SSD',
  'Formato M.2 NVMe, velocidad de lectura de hasta 1.8GB/s, velocidad de escritura de hasta 1.8GB/s',
  120,
  'https://images-na.ssl-images-amazon.com/images/I/71Xk6%2BnCc4L._AC_SL1500_.jpg'
)

export const discos = [
  almacenamiento1,
  almacenamiento2,
  almacenamiento3,
  almacenamiento4,
  almacenamiento5,
  almacenamiento6,
]
export default discos
