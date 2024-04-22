/*  
    Crea una funció que donat un nombre per paràmetre et retorni, 
    mitjançant una promesa si és divisible entre dos o no.
    Mitjançant un console.log mostra els possibles resultats 
*/

function esDivisible(num){
    return new Promise( (resolve, reject) => {

        if (num%2 == 0) {
            resolve("es divisible");
        } else {
            reject('No es divisible');
        }
    });
}
//llamada desde boton html
function primero() {
    esDivisible(23)
        .then( resultado => console.log(resultado))
        .catch( err => console.log(err));
}

/*
    Assigna-li una promesa a una variable que 
    comprovi si un valor és major o igual a 0 i menor o igual a 10.
    Mitjançant un console.log mostra els possibles resultats
*/
function segundo() {
    const majorMenor = new Promise( (resolve,reject) => {
        let num = 7;

        if ( num >= 0 && num <= 10 ) {
            resolve("Si esta en el rango 0-10");
        } else {
            reject("Fuera de rango 0-10");
        }
    });

    majorMenor
        .then( result => console.log(result))
        .catch( err => console.log(err));
}

/* 
    Crea una funció que es digui esVocal 
    que retorni una promesa que calculi si una lletra està dins d’un array donat.
        let arr = [“a”, “e”, “i”, “o”, “u”]
    Mitjançant un console.log mostra els possibles resultats
*/
function esVocal(letra){
    return new Promise( (resolve,reject)=> {
        let arr = ['a', 'e', 'i', 'o', 'u'];
        if (arr.includes(letra)) {
            resolve("Si contiene vocal");
        } else {
            reject("No contiene vocal");
        }
    });
}
function tercero() {
    esVocal('Y')
        .then(result=> console.log(result))
        .catch(err=>console.log(err));
}

/* 
    Crea una funció JS que rebi 2 paràmetres i 
    que retorni una promesa que calculi la divisió del
    primer entre el 2on paràmetre.
    Fes que si la divisió és possible torni el quocient, 
    si el 2on paràmetre és 0 que torni un missatge d’error
*/
function divisioNums(x,y) {
    return new Promise( (resolve,reject)=>{
        if(y===0){
            reject("Error!");
        } else {
            resolve("El quocient és: "+ x/y);
        }
    });
}

function cuarto() {
    let first = document.getElementById("x");
    let second = document.getElementById("y");
    divisioNums(first.ariaValueMax, second.value)
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
}