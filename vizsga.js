// 1.
// Primitív adattípusok:
// string
const a = 'szöveg';

// szám, integer vagy float
const b = 4;
const c = 10.23;

// boolean, logikai érték
const d = true;
const e = false;

// összetett adattípusok:
// tömb (array)
const f = [1, 2, 'text', true, null];

// mátrix, több dimenziós tömb
const g = [[1, 2, 3], ['egy', 'ketto', 'harom'], [true, false, null]];

// object (kulcs: érték párok)
const h = { name: 'Eszter', age: '7', address: 'Szeged' };

// Az adattípusok lehetnek még konstansok, vagy változók
// Konstansokat const-tal hozzuk létre (deklaráljuk) és nem kaphatnak
// új értéket.
// A változókat let-tel deklaráljuk, nem kötelezően kell kezdeti értéket,
// kapnia, de később új értéket(ket) kaphatnak.

// 2.
// A függvények meghívásakor paramétereket adunk át,
// ezeket olykor módosítjuk a függvényen belül. A primitív
// adattípusokat az értékük szerint adjuk át, tehát a módosításuk
// nem érintik az eredeti változó értékét.
// A referencia szerinti átadás esetén (tömbök)
// a függvényen belüli változtatások hatással vannak tömbre is.

const v = 7;

const fruits = ['apple', 'grape', 'orange'];

const myFunction = (variable, array) => {
  variable = 100;
  array.push('melone');
  console.log(variable); // itt a függvényben kapott új érték kerül kiíratásra
};

myFunction(v, fruits);
console.log(v); // ekkor az eredeti érték kerül kiírásra
console.log(fruits); // a függvényben végzett módosítás is kiíródik
console.log();

// 3.
// Eldöntés tétele

const array = [1087, 10, 16, 41, 35];

const finder = 35;
// console.log(finder);
let i = 0;

while (i < array.length && array[i] !== finder) { i++; }
// console.log(array[i]);
if (i < array.length) {
  console.log('you got it');
} else {
  console.log('nincs benne');
}

// 4.
// maximum kiválasztás
const array2 = [2, 3, 5, 7, 8, 1, 43, 23, 8];

const size = array2.length;
let max = 0;

for (let i = 0; i < size; i++) {
  if (size[i] > max)
    {max = array2[i];}
}
console.log(max);




// 6.
// metszet tétele
const array6 = [2, 3, 4, 5, 7, 10, 8, 9, 15];
let size6 = array6.length;
const array66 = [34, 5, 13, 10, 7, 14, 9];
let size66 = array66.length;
let sectionArray = [];

let j;
let k = 0;

for (let i < 0; i < size66; i++) {
  j =0;
  while (j < size66 && array66[j] != array6[i]);
    j++;
  if (j < array66) {
    sectionArray[k++] = array6[i];
  }
};
// ennek az ellenőrzése lehet
for (let h = 0; h < sectionArray.length; h++);
console.log(sectionArray[h]);


// 7. 
// összeadás, szorzás, hatványozás
// ha jól értem egy számológép

const add = (num1, num2) => {
  return num1 + num2;
};
const mult = (num1, num2) => {
  return num1 * num2;
};
const div = (num1, num2) => {
  return num1 / num2;
};
module.export = {
  add: add,
  multi: mult, 
  div: div
};
console.log('Összead, 6+9 = ' + aritm.add(6, 9));
console.log('Szoroz, 6*9 = ' + aritm.mult(6, 9));
console.log('Oszt, 6/9 = ' + aritm.div(6, 9));
console.log();


// 8.
kétdimenziós tömb

const create2dArray = (n, m) => {
  let multip = 0;

  const matrix = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < m; j++) {
      arr.push(Math.imul(2, multip));
      multip++;
    }
    matrix.push(arr);
  }
  return matrix;
};

console.log(create2dArray(3, 3));
;
