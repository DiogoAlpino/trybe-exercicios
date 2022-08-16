function encode(codifica) { // usando string.replace (https://www.w3schools.com/jsref/jsref_replace.asp)//
  codifica = codifica.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5); 
  return codifica;  

}

function decode(decodifica) {
  decodifica = decodifica.replace(/1/gi, 'a').replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi, 'o').replace(/5/gi, 'u');
  return decodifica;

}

const functions = { encode, decode };
module.exports = functions;