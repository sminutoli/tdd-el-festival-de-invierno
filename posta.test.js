import crearCarrera from './carrera';
import crearCombate from './combate';
import { hipo, astrid, patan, patapez } from './vikingos';

function setupCarrera(kmts) {
  const carrera = crearCarrera(kmts);
  const postulantes = [hipo, astrid];
  return { carrera, postulantes };
}

function setupCombate(barbarosidad) {
  const combate = crearCombate(barbarosidad);
  const postulantes = [hipo, astrid, patan];
  return { combate, postulantes };
}

describe('una carrera', () => {
  it('admite a cualquier participante', () => {
    const { carrera, postulantes } = setupCarrera(15);
    // act
    carrera.admitir(postulantes);

    // expect
    expect(carrera.participantes()).toEqual(postulantes);
  });
  it('admite a cualquier participante que pueda participar', () => {
    const { carrera, postulantes } = setupCarrera(15);
    const patapezConHambre = {
      __proto__: patapez,
      hambre: 51
    };
    // act
    carrera.admitir([...postulantes, patapezConHambre]);

    // expect
    expect(carrera.participantes()).toEqual(postulantes);
  });
  it('puede determinar quien gana en base a su velocidad', () => {
    const { carrera, postulantes } = setupCarrera(15);
    
    // act
    carrera.admitir(postulantes);

    // expect
    expect(carrera.ganador()).toEqual(hipo);
  });
  it('cada participante gana hambre en relación a los kilómetros', () => {
    const { carrera, postulantes } = setupCarrera(15);
    
    // act
    carrera.admitir(postulantes);
    carrera.competir();

    // expect
    expect(carrera.participantes().find(p => p === hipo).hambre).toEqual(15);
  });
});

describe('un combate', () => {
  it('puede determinar quien gana en base a su barbarosidad', () => {
    const { combate, postulantes } = setupCombate();
    
    // act
    combate.admitir(postulantes);

    // expect
    expect(combate.ganador()).toEqual(patan);
  });
  it('puede definir una barbarosidad minima para participar', () => {
    const { combate, postulantes } = setupCombate(10);

    // act
    combate.admitir(postulantes);

    // expect
    expect(combate.participantes().includes(patan)).toBe(true);
    expect(combate.participantes().includes(hipo)).toBe(true);
    expect(combate.participantes().includes(astrid)).toBe(false);
  });
});