const hipo = { 
  nombre: 'Hipo', 
  velocidad: 13,
  barbarosidad: 10,
  hambre: 0,
  esMasVelozQue(otroVikingo) {
    return this.velocidad > otroVikingo.velocidad;
  },
  esMasBarbaroQue(otroVikingo) {
    return this.barbarosidad > otroVikingo.barbarosidad;
  },
  puedeParticiparDeUnaPosta({ esfuerzo = 0 }) {
    return this.hambre < 100 && esfuerzo < (100 - this.hambre);
  },
  participarDeUnaPosta({ esfuerzo }) {
    this.hambre += esfuerzo;
    return this;
  }
};

const astrid = {
  __proto__: hipo,
  nombre: 'Astrid',
  barbarosidad: 7,
  velocidad: 10,
  hambre: 0 
};

const patan = {
  __proto__: hipo,
  nombre: 'Patan',
  barbarosidad: 13,
  velocidad: 15,
  hambre: 0 
};

const patapez = {
  __proto__: hipo,
  nombre: 'Patapez',
  barbarosidad: 1,
  velocidad: 7,
  hambre: 0,
  puedeParticiparDeUnaPosta() {
    return this.hambre < 50;
  },
  participarDeUnaPosta({ esfuerzo }) {
    this.hambre += esfuerzo * 2;
    return this;
  }
};

export {
  hipo,
  astrid,
  patan,
  patapez
}