// Create a function called addKey that takes in an object and adds a new key
// name weight and assigns it a value. Return the object.

var animal;
var addKey;

function addkey(obj, name ,weight) {
    var resultat = "";
    for (var key  in obj) {
      if (obj.hasOwnProperty(key)) {
          resultat += `${name}.${key} = ${obj[key]}\n`;
      }
    }
    return resultat;
  }


