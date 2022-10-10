"use strict";
/* Tämä mahdollistaa uudemman JavaScriptin version käytön, joten käytetään sitä tällä kurssilla. Ks. lisää
https://javascript.info/strict-mode */

/* Muuttjia on kolmea tyyppiä: var, let ja const. const määritettyä muuttujaa ei voi muuttaa */
hello ="moikka"; // toimii koska var
//let hello = "moikka"; // ei toimi koska let
var hello = "heippa"; 
let maailma = "maailma";
const nimi = "niko";
//nimi = "matti"; // ei toimi koska const

console.log(nimi)
document.getElementById("oma1").innerHTML = hello + " " + maailma + ", " + nimi;
/*Muuttujien nimirajoitukset
- voi alkaa vain kirjaimilla tai merkeillä $ ja _ 
- voi sisältää numeroita
- kirjainten koolla on merkitystä eli JS on case sensitive 
- ei voi olla mikään funktion nimi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords */

/* strict modessa muuttuja pitää aina määrittää var, let tai const:lla */

/* Yleisimmät tietotyypit: */
var length = 16; //number
var lastName ="Johnson"; //string
var x = {firstName: "John", lastName: "Doe"}; // object
console.log(x.firstName);
var cars = ["Saab", "Volvo", "BMW"]; // array
console.log(cars[0]);
var y = 16 + "Volvo"; // y = "16Volvo"
var z = "Volvo" + 16; // z = "Volvo16"
/* muita ovat esim. Infinity, NaN(=not a number), BigInt, boolean, null, undefined */

// MERKKIJONOT

var str1 = " Tämä on merkkijono ";
console.log(str1)
var str2 = ' Tämä on myös merkkijono ';
console.log(str2)
var str3 = ` Tämä on myös merkkijono `;
console.log(str3)
var str4 = " Tämä on merkkijono, jossa on ' lainausmerkkejä ' ";
console.log(str4)
var str5 = ' Tämä on merkkijono, jossa on " lainausmerkkejä " ';
console.log(str5)
var str6 = " Tämä on merkkijono, jossa on \" lainausmerkkejä \" ";
console.log(str6)
var str7 = `${str1} ja 
${str2} ja
${str3}`;	// template literal

/* Merkkijonoja voi yhdistää + merkillä */
console.log(str7);
/*Monen rivin stringit saa vain "tick"eillä*/



/*Yksittäiseen merkkiin voidaan viitata näin:*/
console.log(str2[6]);
console.log(str3.charAt(3));


/*Alimerkkijono eli substring: */
console.log(str6.substring(6,9));

/*merkkijonojen splittaus*/
var str8 = "Tämä voidaan hajottaa osiin";
var arr = str8.split("");
console.log(arr);


//boolean
var totta = true;
totta = false;
console.log(totta);

var maarittamaton; /*undefined, kunnes sille on annettu jokin arvo*/

maarittamaton = null; /*tyhjä arvo, tuntematon, ei ole olemassa*/

/*typeof operaattorilla/funktiolla saadaan muuttujan tyyppi selville*/
console.log(typeof maarittamaton);
console.log(typeof totta);
console.log(typeof(str8)); //funktio
console.log(typeof({})); //tyhjä objekti
console.log(typeof([])); //tyhjä Array
console.log(typeof x.lastName); //objektin ominaisuus


/* JavaScriptillä on samoja aritmeettisiä operaattoreita, kuin javallakin eli 
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--  Decrement */

var x = 3;
x+=10; // ts. x = x + 10;
/* mikä on x:n arvo? */
x++;
console.log(x);
var y = 3;
var z = x + y;
/* mitä tulostuu?*/
console.log(z % 8); // 0 parillinen luku, 2 pariton luku

/* vertailu onnistuu myöskin javamaisesti eli voidaan käyttää vertailuoperaattoreita 
<, >, <=, >=, ==, != */

console.log("vertailut:");
console.log(1 < 2); // mitä tulostuu?
console.log(1 > 2); // mitä tulostuu?
console.log('z' > 'a'); // mitä tulostuu?
console.log('aaz' > 'aaaz'); // mitä tulostuu?
/* Jos vertaillaan eri tyyppejä, niin JS yrittää ensin muuttaa ne samaan muotoon*/

console.log('1' > 2); //mitä tulostuu?
console.log('01' == 1); //JS yrittää muuttaa ensin merkkijonon numeroksi

var merkkijono = 5 + 3 + "kissa" + (5 + 3);
console.log(merkkijono);

console.log("03" - "01"); // yrittää muuttaa merkkijonon numeroksi

/*HUOM!*/
console.log( true == 1 );
console.log( false == 0 );

/* === vertailuoperaattori tekee myös tyyppivertailun */
console.log( true === 1 ); //mitä tulostuu?
console.log( '0' === 0 ); //mitä tulostuu?

/* null ja undefined ei käyttäydy ihan loogisesti */
console.log("null vs undefined"); 

console.log( null == undefined ); // === false ja == true
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
console.log( undefined > 0 ); // false (1)
console.log( undefined == 0 ); // false (2)
console.log( undefined >= 0 ); // false (3)

