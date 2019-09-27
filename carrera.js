const byVelocidad = (participanteA, particpanteB) => participanteA.velocidad > particpanteB.velocidad ? -1 : 1;
function crearCarrera(kmts) {
  return {
    _participantes: [],
    _kmts: kmts,
    admitir(postulantes) {
      this._participantes = postulantes.filter(p => p.puedeParticiparDeUnaPosta());
    },
    participantes() {
      return this._participantes;
    },
    ganador() {
      return this._participantes.sort(byVelocidad)[0];
    },
    competir() {
      this.participantes().forEach(participante => participante.hambre += this._kmts);
    }
  }
}

export default crearCarrera;