//AND - &&
//OR - ||
//NOT - !

const a = 10 ;
const b = 20 ;

if(a>5 && b>10){
    console.log("2 condicoes verdadeiras");
    
}else{
    console.log("Pelo menos uma delas e falsa");
    
}

const temperatura = 30;
if (temperatura <15 || temperatura>25) {
    console.log("O dia ta foda");
    
    
} else {
    console.log("O dia ta bom");
    
}

let lojaaberta = false;
if(!lojaaberta){
    console.log("A loja esta aberta!");
    
}else{
    console.log("A loja esta fechada!");
    
}
let cor = "red";
switch(cor){

    case "red":
     console.log("A cor e vermelha");
     break
    case "blue":
        console.log("A cor e Azul");
     break
     default:
        console.log("Cor nao encontrada");
       
}