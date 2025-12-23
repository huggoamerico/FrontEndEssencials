const produtos = [
  { id: 1, nome: "Camiseta", preco: 50 },
  { id: 2, nome: "Calça", preco: 120 },
  { id: 3, nome: "Tênis", preco: 200 },
  { id: 4, nome: "Boné", preco: 30 }
];
const maiorquecem = produtos.filter((produtos)=>produtos.preco>100 );
const id = produtos.filter((produtos)=>produtos.id==3);
console.log(maiorquecem,id)
