/**
 * La raíz digital es la suma recursiva de todos los dígitos de un
 * número.
 *
 * Dado n, tome la suma de los dígitos de n. Si ese valor tiene más de
 * un dígito, continúe reduciendo de esta manera hasta que se produzca
 * un número de un solo dígito. La entrada será un número entero no
 * negativo.
 */

export const digital_root = function (n = 0) {
    let sum = 0;
  
    let auxArr = n.toString().split('')
  
    while(auxArr.length > 1) {
      auxArr.forEach(num => sum += Number(num))
  
      if(sum.toString().split('').length > 1) {
        auxArr = sum.toString().split('')
        sum = 0
      } else {
        auxArr = sum.toString().split('')
      }
    }
  
    return sum;
  };
  
  console.log(digital_root(12));


//TESTS

/* import { digital_root } from "./index";

test("digital_root() should equal 0", () => {
  expect(digital_root(undefined)).toBe(0);
});

test("digital_root() should equal 16", () => {
  expect(digital_root(16)).toBe(7);
});

test("digital_root() should equal 456", () => {
  expect(digital_root(456)).toBe(6);
});

test("digital_root() should equal 999999999999999", () => {
  expect(digital_root(999999999999999)).toBe(9);
});
 */