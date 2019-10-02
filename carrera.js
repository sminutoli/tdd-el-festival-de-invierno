const elMasVeloz = (participanteA, particpanteB) => participanteA.esMasVelozQue(particpanteB) ? -1 : 1;
function crearCarrera(kmts) {
  return {
    _participantes: [],
    _kmts: kmts,
    esfuerzo: kmts,
    admitir(postulantes) {
      this._participantes = postulantes.filter(p => p.puedeParticiparDeUnaPosta(this));
    },
    participantes() {
      return this._participantes;
    },
    ganador() {
      return this._participantes.sort(elMasVeloz)[0];
    },
    competir() {
      this.participantes().forEach(participante => participante.participarDeUnaPosta(this));
    }
  }
}

export default crearCarrera;