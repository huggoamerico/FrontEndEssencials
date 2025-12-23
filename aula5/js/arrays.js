let series = ['Dexter','Shameless','TWD','Dr House'];
console.log(series [1]);
console.log(series);

//verificar o tamanho do array
console.log("tamanho do array:",series.length);
//Adicionar um elemento no array - PUSH
series.push("The 100");
console.log(series);

let numeros = [1,2,3,4,5,6];
//console.log(numeros);

let numerosdobrados = numeros.map(numero=>{
  return numero*2;
});
console.log(numerosdobrados);

//filtro do array
const maiorQueTres = numeros.find((numero)=>numero>3);
console.log(maiorQueTres);

const maiorQueTresfilter = numeros.filter((numero)=>numero>3);
console.log(maiorQueTresfilter);
