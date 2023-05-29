class Component {
  generarID() {
    const random = Math.floor(Math.random() * 10000).toString()
    const date = Date.now().toString()
    return random + date
  }

  constructor(nombre, especificaciones, precio, image) {
    this.id = this.generarID()
    this.nombre = nombre
    this.especificaciones = especificaciones
    this.precio = precio
    this.image = image
  }
}

export { Component }
