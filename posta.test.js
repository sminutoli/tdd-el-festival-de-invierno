function crearCarrera() {
  return {
    _participantes: [],
    admitir(postulantes) {
      this._participantes = postulantes;
    },
    participantes() {
      return this._participantes;
    }
  }
}

describe('una carrera', () => {
  it('admite a cualquier participante', () => {
    // setup
    const carrera = crearCarrera();
    const postulantes = ['pepe', 'pupi'];
    // act
    carrera.admitir(postulantes);

    // expect
    expect(carrera.participantes()).toEqual(postulantes);
  });
});