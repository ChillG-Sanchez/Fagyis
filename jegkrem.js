export default class Jegkrem {
    constructor(nev, ar, tulajdonsag) {
        if (ar <= 0) {
            throw new Error("Az ár nem lehet nulla vagy negatív szám!");
        }

        this.nev = nev;
        this.ar = ar;
        this.tulajdonsag = tulajdonsag;
    }
};