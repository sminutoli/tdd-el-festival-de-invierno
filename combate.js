import crearCarrera from "./carrera";
const elMasBarbaro = (participanteA, particpanteB) => participanteA.esMasBarbaroQue(particpanteB) ? -1 : 1;

export default () => ({
    __proto__: crearCarrera(),
    ganador() {
        return this._participantes.sort(elMasBarbaro)[0];
    },
});