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

const hipo = { nombre: 'Hipo', velocidad: 13 };
const astrid = { nombre: 'Astrid', velocidad: 10 };
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
  it('puede determinar quien gana en base a su velocidad', () => {
    // setup
    const carrera = crearCarrera(15);
    const postulantes = [hipo, astrid];
    
    // act
    carrera.admitir(postulantes);

    // expect
    expect(carrera.ganador()).toEqual(hipo);
  });
});