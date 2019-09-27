const byVelocidad = (participanteA, particpanteB) => participanteA.velocidad > particpanteB.velocidad ? -1 : 1;
function crearCarrera() {
  return {
    _participantes: [],
    admitir(postulantes) {
      this._participantes = postulantes;
    },
    participantes() {
      return this._participantes;
    },
    ganador() {
      return this._participantes.sort(byVelocidad)[0];
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
    const carrera = crearCarrera();
    const postulantes = [hipo, astrid];
    
    // act
    carrera.admitir(postulantes);

    // expect
    expect(carrera.ganador()).toEqual(hipo);
  });
  it('cada participante gana hambre en relación a los kilómetros', () => {
    // setup
    const carrera = crearCarrera(15);
    const postulantes = [hipo, astrid];
    
    // act
    carrera.admitir(postulantes);
    carrera.competir();

    // expect
    expect(carrera.participantes().find(p => p === hipo).hambre).toEqual(15);
  });
});