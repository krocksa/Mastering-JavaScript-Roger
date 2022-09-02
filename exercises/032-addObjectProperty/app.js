function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
  obj1[key]=obj2;
  return obj1
}
let carro={
  marca: 'Mustang',
  modelo:'GT',
  año: 2020
}
let perro={
  nombre: 'Owel',
  raza: 'pug'
}
let key= 'Propiedad';

// {
//   marca: 'Mustang',
//   modelo:'GT',
//   año: 2020,
//   propiedad:{
//     nombre: 'Owel',
//   raza: 'pug'
//   }
// }