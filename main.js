// Task 1

let user = 'John Doe';
console.log(user);
let student ='Masha';
console.log(student);
user = student;
console.log(user); //Masha

//Task 2
let test = 1;
test += 1; 
test += '1';
console.log(test); //21
test -= 1;
console.log(test); //20
test = Boolean(test); //true
console.log(test);

//Task 3
const arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
}
console.log('Ответ Task3:', result);

//Task4
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        // debugger;
        console.log('Ответ Task4:', arr2[i]);
    }
}

//Task 5
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (!(arr3[i] % 2) && arr3[i] !== 0) {
        console.log('Ответ Task5:', arr3[i]);
    }
}

//function: Task1
const palindrome = (word) => {
  if (word === word.split('').reverse().join('')) {
      return true;
  }
  return false;
}

//function: Task2
const min = (a, b) => a > b ? b : a;
const max = (a, b) => a > b ? a : b;

//function: Task3
const changeZero = (arrZero) => {
    let newArrZero = String(arrZero);
    newArrZero = newArrZero.replaceAll("0", "zero").split(',');
         return newArrZero;
}
let arrZero = [1, 2, 10, 55, 40, 0, 7, 5, 8, 70];
console.log(changeZero(arrZero));

//function: Task 2.1
function sum(a) {
    return function (b) {
      return a + b;
    };
  }

//function: Task2.2
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const p = document.querySelectorAll('p');

const changeColorP = () => {
    let i=0;
    return (e) => {
        e.target.style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
    }
}

p.forEach((item) => {
    const painter = changeColorP();
    item.addEventListener('click', painter);
});