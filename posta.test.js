import crearCarrera from './carrera';
import { hipo, astrid } from './vikingos';

function setupCarrera(kmts) {
  const carrera = crearCarrera(kmts);
  const postulantes = [hipo, astrid];
  return { carrera, postulantes };
}

describe('una carrera', () => {
  it('admite a cualquier participante', () => {
    const { carrera, postulantes } = setupCarrera(15);
    // act
    carrera.admitir(postulantes);

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