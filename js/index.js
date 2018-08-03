const n = prompt('Введіть число фібоначчі :');

function fibonachi (n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

const result = (fibonachi(n));
alert('Число ' + fibonachi(n) + ' Фібоначчі');