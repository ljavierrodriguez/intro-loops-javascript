/**
 *  for
 *  for in
 *  for of
 * 
 *  while
 *  do while
 * 
*/

let frutas = ['Pera', 'Manzana', 'Piña', 'Banana', 'Sandia', 'Melon'];

// for(inicializador; condicion; incremental){}

for(let inicio = 1; inicio <= 10; inicio++){
    console.log(inicio);
}

for(let inicio = 10; inicio >= 1; inicio--){
    console.log(inicio);
}

for(let inicio = 0; inicio < frutas.length; inicio++){
    console.log(frutas[inicio]);
}

// for in 
for(let indice in frutas){
    console.log(frutas[indice]);
}

// for of 
for(let fruta of frutas){
    console.log(fruta);
}


// while (condition){}
let inicio = 1;
while(inicio <= 10){
    console.log(inicio);
    inicio++;
}

let index = 0;
while(index < frutas.length){
    console.log(frutas[index]);
    index++;
}

let valor = 1;
do {
    console.log(valor);
    valor++;
} while ( valor <= 100);

/*
== 
===

!=
!==

>
<
>=
<=

*/

typeof(valor);
// valor, indice, array
frutas.forEach(function(valor, indice){
    console.log(`Valor encontrado en el indice ${indice} es ${valor}`);
});