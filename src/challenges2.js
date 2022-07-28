// Desafio 11
function generatePhoneNumber(numeros) {
  // let maisRepetido = numeros[0];
  // let numeroDeVezesMaisRepetido = 0;
  // let numeroAtual = 0;
  // let numeroAtualRepeticoes = 0;
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeros.length; index += 1) {
    let repeticoes = 0;
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < numeros.length; index2 += 1) {
      if (numeros[index] === numeros[index2]) {
        repeticoes += 1;
      }
      if (repeticoes >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${numeros[0]}${numeros[1]}) ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  } return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
