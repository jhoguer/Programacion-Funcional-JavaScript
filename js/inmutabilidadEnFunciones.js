// Afecta el arreglo original, porque se 
const addToList = (list, item, quantity) => {
  list.push(
    {
      item,
      quantity
    }
  )

  return list;
}


const addToList1 = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list));

  newList.push(
    {
      item,
      quantity
    }
  )

  return newList;
}

const addToList2 = (list, item, quantity) => {
  const newList = [
    ...list,
    item,
    quantity
  ];


  return newList;
}

const lista = [1, 2];
const lista1 = [1, 2];
const lista2 = [1, 2];

const listaR = addToList(lista, 6, 0);
console.log(listaR);
console.log(lista);

const listaR1 = addToList1(lista1, 6, 0);
console.log(listaR1);
console.log(lista1);

const listaR2 = addToList1(lista2, 6, 0);
console.log(listaR2);
console.log(lista2);