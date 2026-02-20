import { calcularNuevoMarcador } from './rules';

test('Canasta de 2 puntos: 10 + 2 = 12', () => {
  const resultado = calcularNuevoMarcador(10, 2);
  expect(resultado).toBe(12);
});

test('Triple: 10 + 3 = 13', () => {
  const resultado = calcularNuevoMarcador(10, 3);
  expect(resultado).toBe(13);
});
