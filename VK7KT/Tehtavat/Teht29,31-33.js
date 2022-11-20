class Oppilas {
    constructor(nimi, syntymavuosi, osoite, puhelinnumero) {
        this.nimi = nimi;
        this.syntymavuosi = syntymavuosi;
        this.osoite = osoite;
        this.puhelinnumero = puhelinnumero;
        this.arvosanat = [];
    }

    set nimi(value) {
        if (value.lenght == 0)
            return;
        this._nimi = value;
    }
    set syntymavuosi(value) {
        this._syntymavuosi = new Date(value);
    }
    set osoite(value) {
        if (value.lenght == 0)
            return;
        this._osoite = value;
    }
    set puhelinnumero(value) {
        if (value.lenght == 0)
            return;
        this._puhelinnumero = value;
    }
    get nimi() {
        return this._nimi;
    }
    get syntymavuosi() {
        return this._syntymavuosi;
    }
    get osoite() {
        return this._osoite;
    }
    get puhelinnumero() {
        return this._puhelinnumero;
    }

    tulosta() {
        return "Oppilas : " + this._nimi + " Osoite : " + this._osoite + " Syntymävuosi : " + this._syntymavuosi + " Puhelin : " + this._puhelinnumero;
    }
    laskeIka() {
        return "Oppilaan ikä on :" + Math.round((Date.now() - this._syntymavuosi) / 31104000000);
    }
    LisaaArvosana(Tulos) {
        if (Tulos instanceof Arvosana) {
            this.arvosanat.push(Tulos);
        }
    }
    printArvosana() {
        for (var arvosana of this.arvosanat)
            if (arvosana instanceof Arvosana)
                console.log(arvosana.tulostaArvosana());
    }
    hyva = function (Arvosanat) {
        return (Arvosanat._arvosana > 5 ? true : false);
    }
    lapi = function (arvo) {
        return (arvo._arvosana > 0 ? true : false);
    }
    get HyvaOppilas() {
        return this.arvosanat.some(this.hyva);
    }

    get KurssitLapi() {
        return this.arvosanat.every(this.lapi);
    }

    tulostaArvosanatMuutetullaAsteikolla() {
        var arr = this.arvosanat.map((x) => Math.round(x._arvosana / 2));
        for (var tulosta of arr)
            console.log(" Arvosana : " + tulosta);
    }
}
class Arvosana {
    constructor(oppiaine, arvosana, suorituspvm) {
        this.arvosana = arvosana;
        this.oppiaine = oppiaine;
        this.suorituspvm = suorituspvm;
    }
    set arvosana(value) {
        if (value < 0 || value > 10)
            return;
        this._arvosana = value;
    }
    set oppiaine(value) {
        if (value.lenght == 0)
            return;
        this._oppiaine = value;
    }
    set suorituspvm(value) {
        this._suorituspvm = new Date(value);
    }
    get oppiaine() {
        return this._oppiaine;
    }
    get arvosana() {
        return this._arvosana;
    }
    get suorituspvm() {
        return this._suorituspvm;
    }
    tulostaArvosana() {
        return "Oppiaine : " + this._oppiaine + " Arvosana : " + this._arvosana + " Suorituspäivämäärä :" + this._suorituspvm;
    }
}
var Opiskelija = new Oppilas("Pertti", "2000-2-12", "Oikotie 13", " 050-4748944415");
console.log(Opiskelija);
console.log(Opiskelija.tulosta());
console.log(Opiskelija.laskeIka());
var Arvosana1 = new Arvosana("TRA", 7, "2020-5-21");
var Arvosana2 = new Arvosana("Web-ohjelmointi", 5, "2020-2-15");
var Arvosana3 = new Arvosana("SQL-Tietokanta", 10, "2020-9-11");
Opiskelija.LisaaArvosana(Arvosana1);
Opiskelija.LisaaArvosana(Arvosana2);
Opiskelija.LisaaArvosana(Arvosana3);
Opiskelija.printArvosana();
var Lapimeni = () => {
    if (Opiskelija.KurssitLapi)
        console.log("koulu käyty");
    else
        console.log("Uusiksi!");
}
Lapimeni();
var hyvaopiskelija = () => {
    if (Opiskelija.HyvaOppilas)
        console.log("Hienosti opiskeltu!");
    else
        console.log("Huonosti on kyllä opiskelut menny!");
}
hyvaopiskelija();
Opiskelija.tulostaArvosanatMuutetullaAsteikolla();
