
/* PRIMEIRA MANEIRA DE EXPORTAÇÂO 
function printName(name){
   console.log(name);
 }

 const lastName = 'Santos';

 module.exports = printName;
 module.exports = { printName, lastName };
*/

// SEGUNDA MANEIRA DE EXPORTAÇÂO 

exports.printName = (name) => {
  console.log(name);
}

exports.lastName = 'Santos';