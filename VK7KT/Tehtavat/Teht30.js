function Oppilas(nimi,osoite,spaiva,puhnum){
    
    let Tulosta = function(){
            return "Oppilas : "+nimi+" Osoite : "+ osoite+" Syntymävuosi : "+spaiva+" Puhelin : "+ puhnum;
        }
    let laskeIka = function(){
        spaiva1 = new Date(spaiva);
            return "Oppilaan ikä on : " + Math.round((Date.now()-spaiva1)/31104000000);
    }
    var Obj ={
        nimi : nimi,
        osoite : osoite,
        spaiva : spaiva,
        puhnum : puhnum,
        Tulosta : Tulosta,
        laskeIka : laskeIka
        }
        
    return Obj;
}


var oppilas = new Oppilas("Jaakko","Kujankatu 13","2000-7-7"," 050-45154151");
console.log(oppilas);
console.log(oppilas.Tulosta());
console.log(oppilas.laskeIka());
var oppilas = new Oppilas("Pertti","Kakkoskuja 14","2000-4-1"," 050-478551525");
console.log(oppilas);
console.log(oppilas.Tulosta());
console.log(oppilas.laskeIka());