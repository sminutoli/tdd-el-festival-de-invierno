import { hipo, astrid, patapez } from './vikingos';

describe('un vikingo', () => {
  it('sabe si es mas rapido que otro', () => {
    expect(hipo.esMasVelozQue(astrid)).toBe(true);
  });
  it('sabe si es mas fuerte que otro', () => {
    expect(hipo.esMasBarbaroQue(astrid)).toBe(true);
  });
  it('puede participar de postas si no está muerto de hambre', () => {
    expect(hipo.puedeParticiparDeUnaPosta()).toBe(true);
  });
  it('no puede participar de postas si está muerto de hambre', () => {
    const nuevoVikingo = {
      __proto__: hipo,
      hambre: 100
    };
    expect(nuevoVikingo.puedeParticiparDeUnaPosta()).toBe(false);
  });
});

describe('patapez', () => {
  it('no puede participar de postas si tiene bastante hambre', () => {
    const nuevoVikingo = {
      __proto__: patapez,
      hambre: 50
    };
    expect(nuevoVikingo.puedeParticiparDeUnaPosta()).toBe(false);
  });
});