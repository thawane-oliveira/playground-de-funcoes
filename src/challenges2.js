// Desafio 11
function generatePhoneNumber(numeros) {
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
function hydrate(string) {
  let sugestao = string.split(/(\d)/);
  let contagem = 0;
  for (let index = 0; index < sugestao.length; index += 1) {
    if (sugestao[index].length <= 1) {
      let copo = Number(sugestao[index]);
      contagem += copo;
    }
  }
  if (contagem === 1) {
    return `${contagem} copo de água`;
  } return `${contagem} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
