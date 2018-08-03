let n;

do {
  n = parseInt(prompt('Введіть ціле число фібоначчі'));
} while(isNaN(n))

let a = 1;
let b = 1;

function fibonachi (n) {
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

const result = fibonachi(n);
alert('Число Фібоначчі ' + result);

// Рекурсивний

let r;

do {
  r = parseInt(prompt('Введіть ціле число фібоначчі'));
} while(isNaN(r))

function fibonachiR(r) {
  return r <= 1 ? r : fibonachiR(r - 1) + fibonachiR(r - 2);
}

alert('Число Фібоначчі Рекурсивний ' + fibonachiR(r));


