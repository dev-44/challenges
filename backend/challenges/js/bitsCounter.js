/**
 * Escriba una función que tome un número entero como entrada
 * y devuelva el número de bits que son iguales a uno en la
 * representación binaria de ese número. Puede garantizar que
 * la entrada no sea negativa.
 *
 * Ejemplo: la representación binaria de 1234 es 10011010010, por
 * lo que la función debería devolver 5 en este caso
 */

export const countBits = function (n = 0) {

    console.log("El número ingresado es: ", n);
    let amount = 0;
    let binary = 0
  
    binary = n.toString(2)
    let aux = binary.toString().split('')
  
    aux.forEach((el) => {
      el === '1' && amount++
    })
  
    console.log(amount)
  
  
  
    return amount;
  };
  
  console.log(countBits(1234));

//TEST

/* import { countBits } from "./index.js";

test("countBits(1234) should equal 5", () => {
  expect(countBits(1234)).toBe(5);
});

test("countBits() should equal 0", () => {
  expect(countBits(undefined)).toBe(0);
});

test("countBits(85995) should equal 12", () => {
  expect(countBits(85995)).toBe(12);
});

test("countBits(57719994) should equal 15", () => {
  expect(countBits(57719994)).toBe(15);
});

 */
  