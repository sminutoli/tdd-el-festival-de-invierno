import crearCarrera from "./carrera";
const elMasBarbaro = (participanteA, particpanteB) => participanteA.esMasBarbaroQue(particpanteB) ? -1 : 1;

export default (barbarosidadRequerida) => ({
    __proto__: crearCarrera(),
    admitir(postulantes) {
        super.admitir(postulantes);
        if(barbarosidadRequerida) {
            this._participantes = this._participantes.filter(p => p.esMasBarbaroQue({ barbarosidad: barbarosidadRequerida - 1 }));
        }
    },
    ganador() {
        return this._participantes.sort(elMasBarbaro)[0];
    },
});