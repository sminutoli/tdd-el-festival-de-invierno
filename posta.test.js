function crearCarrera() {
  return {
    admitir() {

    },
    participantes() {
      
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