//EX. 1

// let recipe = {
//   titlu : "pizza",
// }
// console.log(recipe)

// recipe.portii = 3;

// console.log(recipe)

// recipe.ingrediente = ["sunca" , "cascaval" , "ketchup"]

// console.log(recipe)

//Ex 1 Varianta 2 + functie

// let createRecipeObject = (nume, portii, ingrediente) => {
//   let recipe = {
//     nume: nume,
//     portii: portii,
//     ingrediente: ingrediente,
//   };
//   console.log(recipe)
// }

// let nume = "Pizza";
// let portii = 3;
// let ingrediente = [`sunca` , `cas` , `ketchup`];

// createRecipeObject(nume, portii, ingrediente);

//EX. 2

// let objects = {
//   a : 1,
//   b : 2,
// }

//  console.log(objects);

// delete objects.b

// console.log(objects);


//Ex. 2 Varianta 2 + functie
// let object = {
//   a: 1,
//   b: 2,
// }

// let property = "b";

// let deleteParameter = (object , property) => {
//   let newObject = {... object };
//   delete newObject[property];
//   return newObject;
// }

// let result = deleteParameter(object, property);
// console.log(result)



//EX. 3

// let displayBooks = (books) => {
//   for (i = 0; i < books.length; i++) {
//     let book = books[i];
//     let {titlu, autor, esteCitita} = book;

//     console.log(`${titlu} de ${autor}`);

//     if(esteCitita) {
//       console.log(`Ai citit deja "${titlu}" de ${autor}`);
//      } else {
//       console.log(`Trebuie sa citesti "${titlu}" de ${autor}`);
//      }
//     }
//   }

// let books = [
//   {
//     titlu: "carte 1",
//     autor: "autor 1",
//     esteCitita: true,
//   },
//   {
//     titlu: "carte 2",
//     autor: "autor 2",
//     esteCitita: false,
//   }
// ];

// displayBooks(books);