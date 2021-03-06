// Task 1

let user = 'John Doe';
console.log(user);
const student = 'Masha';
console.log(student);
user = student;
console.log(user); // Masha

// Task 2
let test = 1;
test += 1;
test += '1';
console.log(test); // 21
test -= 1;
console.log(test); // 20
test = Boolean(test); // true
console.log(test);

// Task 3
const arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log('Ответ Task3:', result);

// Task4
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    // debugger;
    console.log('Ответ Task4:', arr2[i]);
  }
}

// Task 5
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (!(arr3[i] % 2) && arr3[i] !== 0) {
    console.log('Ответ Task5:', arr3[i]);
  }
}

// function: Task1
const palindrome = (word) => {
  if (word === word.split('').reverse().join('')) {
    return true;
  }
  return false;
};
console.log(palindrome('шалаш'));

// function: Task2
const min = (a, b) => (a > b ? b : a);
const max = (a, b) => (a > b ? a : b);
console.log(min(1, 8));
console.log(max(2, 7));
// function: Task3
const changeZero = (arrZero) => {
  let newArrZero = String(arrZero);
  newArrZero = newArrZero.replaceAll('0', 'zero').split(',');
  return newArrZero;
};
const arrZero = [1, 2, 10, 55, 40, 0, 7, 5, 8, 70];
console.log(changeZero(arrZero));

// function: Task 2.1
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(2));
// function: Task2.2
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

// const p = document.querySelectorAll('p');

// const changeColorP = () => {
//     let i=0;
//     return (e) => {
//         e.target.style.color = colors[i];
//         i++;
//         if (i >= colors.length) {
//             i = 0;
//         }
//     }
// }

// p.forEach((item) => {
//     const painter = changeColorP();
//     item.addEventListener('click', painter);
// });

// lesson-5: Task1.1
const date = '2020-12-27';

const newDate = (oldDate) => oldDate.split('-').reverse().join('.');

console.log(newDate(date));

// lesson-5: Task1.2
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const seachItem = (str) => {
  for (let i = 0; i < data.length; i++) {
    if ((data[i].country === str) || (data[i].city === str) || (data[i].hotel === str)) {
      return `${data[i].country} ${data[i].city} ${data[i].hotel}`;
    }
  }
};
console.log(seachItem('Germany'));

// lesson-6: Task1.1

const palindrome2 = (word) => {
  if (word === word.split('').reverse().join('')) {
    return true;
  }
  return false;
};
console.log(palindrome2('шалаш'));

// lesson-6: Task1.2
const hotels2 = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const seachString2 = (str) => {
  const arr2 = [];
  hotels2.forEach((item) => {
    const str2 = `${item.name}, ${item.city}, ${item.country}`;
    if (str2.includes(str)) {
      arr2.push(str2);
    }
  });
  return arr2;
};

console.log(seachString2('USA'));

// lesson-6: Task1.3

// НЕ РАБОТАЕТ, подскажи, пожалуйста, как сделать, чтобы заработало

// const seachString2 = arrNew.map((item) => {
//   const result = {};
//     for (let key in arrNew) {
//       if (item[key].country == undefined) {
//         result+= `${item[key].country} , ${item[key].city}`;
//       } else {
//         result += `${item[key].city}`;
//       }
//       return result;

//     }
// })

// console.log(seachString2(hotels2));

// lesson-7: Task1.1
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  if (object1 === null && object2 === null) {
    return true;
  }
  if (object1 === null || object2 === null) {
    return false;
  }
  const prop1 = Object.getOwnPropertyNames(object1);
  const prop2 = Object.getOwnPropertyNames(object2);
  if (prop1.length !== prop2.length) {
    return false;
  }
  for (let i = 0; i < prop1.length; i++) {
    const item = prop1[i]; // название свойства
    if (typeof (object1[item]) === 'object' && typeof (object2[item]) === 'object') {
      if (!deepEqual(object1[item], object2[item])) {
        return false;
      }
    } else if ((object1[item] !== object2[item])) {
      return false;
    }
  }
  return true;
};
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3));
console.log(deepEqual({}, {}));

// lesson-8: Task1.1
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor(params) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(params) {
    super(params);
    this.admissionYear = params.admissionYear;
    this.courseName = params.courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear - 1;
  }
}

class Students {
  constructor(studentsData) {
    this.students = studentsData;
  }

  getInfo() {
    return this.students.sort((student1, student2) => new Student(student1).course - new Student(student2).course).map((student) => `${new User(student).fullName} - ${new Student(student).courseName} - ${new Student(student).course} курс`);
  }
}
const students = new Students(studentsData);
console.log(students.getInfo());

/// /lesson-9: Task1.1

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
};

colors[Symbol.iterator] = function () {
  let index = 0;
  const { data } = this;
  const last = this.data.length;
  return {
    next() {
      if (index < last) {
        return {
          done: false,
          value: data[index++],
        };
      }
      index = 0;
      return {
        done: true,
        value: data[index++],
      };
    },

  };
};

const changeColorP = (item) => (e) => {
  e.target.style.color = item.next().value;
};

const p = document.querySelectorAll('p');

p.forEach((item) => {
  const iter = colors[Symbol.iterator]();
  item.addEventListener('click', changeColorP(iter));
});

// lesson-14
const formSendEl = document.querySelector('.form_send_file');

formSendEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fetchOption = {
    method: 'POST',
    body: new FormData(formSendEl),
  };

  const res = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOption)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));

  console.log(res);
});
