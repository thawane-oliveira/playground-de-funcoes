// Desafio 1

function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } return false;
}

// // Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// // Desafio 3

function splitSentence(array) {
  let frase = array.split(' ', array.length);
  return frase;
}

// // Desafio 4

function concatName(lista) {
  // let array = lista[lista.length - 1] + ', ' + lista[0];
  let array = `${lista[lista.length - 1]}, ${lista[0]}`;
  return array;
}

// // Desafio 5

function footballPoints(wins, ties) {
  let pontosTotais = wins * 3 + ties;
  return pontosTotais;
} console.log(footballPoints(14, 8));

// // Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let numeroDeVezes = 0;

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maior) {
      maior = numeros[index];
    }
  }
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (maior === numeros[index2]) {
      numeroDeVezes += 1;
    }
  }
  return numeroDeVezes;
}

// // Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// // Desafio 8
function fizzBuzz(array) {
  let arrayComString = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayComString.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      arrayComString.push('fizz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
      arrayComString.push('buzz');
    } else {
      arrayComString.push('bug!');
    }
  }
  return arrayComString;
}

// // Desafio 9
function encode(string) {
  const code = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let key in code) {
    if (string[index] === key) {
      newPhrase = string.replace(string[index], code[key]);
      }
    } return newPhrase;
  } 


function decode(string2) {
  // const letraToNumber = {
  //   1: 'a',
  //   2: 'b',
  //   3: 'c',
  //   4: 'd',
  //   5: 'e',
  // };

}

// // Desafio 10
function techList(tecnologia, nome) {
  tecnologia.sort();
  if (tecnologia.length <= 0) {
    return 'Vazio!';
  }
  let objeto = [];
  for (let index = 0; index < tecnologia.length; index += 1) {
    objeto.push({
      tech: tecnologia[index],
      name: nome });
  }
  return objeto;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
