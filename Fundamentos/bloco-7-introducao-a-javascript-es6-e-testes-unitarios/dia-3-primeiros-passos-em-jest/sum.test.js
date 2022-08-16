const sum = require('./sum.js');

describe('Verifica erros Ex1', () => {
  
it('Verifica se a soma de 4 e 5 eh 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it('Verifica se a soma de 0 e 0 eh 0', () => {
  expect(sum(0, 0)).toBe(0);
});

it('Verifica se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
  expect(() => sum(4, '5')).toThrow(Error);
});

it('Verifica se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});

});