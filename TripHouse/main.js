const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const formPeopleEl = document.querySelector('.form__people');
const divEl = document.querySelector('.wrapper__item_home');

data.forEach((element) => {
  const div = document.createElement('div');

  const img = document.createElement('img');
  img.setAttribute('src', element.imageUrl);

  const a = document.createElement('a');
  a.textContent = `${element.name}`;
  a.href = '#';
  a.setAttribute('src', `#${element.name}`);

  const paragraph = document.createElement('p');
  paragraph.textContent = `${element.country}, ${element.city}`;

  div.appendChild(img);
  div.appendChild(a);
  div.appendChild(paragraph);
  divEl.appendChild(div);
});

// data.forEach(element => {
//   divEl.textContent +=
//   `<div>
//   <img src=${element.imageUrl} alt=${element.name}/>
//   <a href="#">${element.name}</a>
//   <p>${element.country}, ${element.city}</p>
//   </div>`
// });
const inputSearchFocus = document.querySelector('.form__search_3_input');

const countAdultsEl = document.querySelector('.form__people_1_count');
const countChildrenEl = document.querySelector('.form__people_2_count');
const countRoomsEl = document.querySelector('.form__people_3_count');

const inputPeopleForm = document.querySelector('.form__search_3_input');
const formChildrenAge = document.querySelector('.form_children_question');
// const ageChildrenSelect = document.querySelector('.ageChildrenForm');


const buttonMinus1 = document.querySelector('.form_people_minus1');
const buttonMinus2 = document.querySelector('.form_people_minus2');
const buttonMinus3 = document.querySelector('.form_people_minus3');

const buttonPlus1 = document.querySelector('.form_people_plus1');
const buttonPlus2 = document.querySelector('.form_people_plus2');
const buttonPlus3 = document.querySelector('.form_people_plus3');

countAdultsEl.textContent = 1;
countChildrenEl.textContent = 0;
countRoomsEl.textContent = 1;
inputPeopleForm.value = `${countAdultsEl.textContent} Adults - ${countChildrenEl.textContent} Children - ${countRoomsEl.textContent} Room`;

const showFormPeople = () => {
  formPeopleEl.classList.toggle('showed');
};

// const stopDefaultAct = (e) => {
//   debugger;
//   e.preventDefault();
// }

const countFunc = () => {
  let count = 0;

// debugger;
return (button) => {      
if (button === 'minus1') {
  if   (count > 0) {
    count -= 1; 
    }  
    countAdultsEl.textContent = count;
  } else if (button === 'plus1') {
    if   (count < 30) {
      count +=1; 
    }
      countAdultsEl.textContent = count;
    } else if (button === 'minus2') {
      if   (count > 0) {
      count -=1;
      }
      countChildrenEl.textContent = count; 
    } else if (button === 'plus2') {
      if   (count < 10) {
      count +=1; 
      }
      countChildrenEl.textContent = count;
    } else if (button === 'minus3') {
      if   (count > 0) {
      count -=1;
      }
      countRoomsEl.textContent = count; 
    } else if (button === 'plus3') {
      if   (count < 30) {
      count +=1; 
      }
      countRoomsEl.textContent = count;
    }
  }
};


const count1 = countFunc();
const count2 = countFunc();
const count3 = countFunc();

const updateFormPeople = () => {
  inputPeopleForm.value = `${countAdultsEl.textContent} Adults - ${countChildrenEl.textContent} Children - ${countRoomsEl.textContent} Room`;
};


inputSearchFocus.addEventListener('click', showFormPeople);
// обработкики увеличения/уменьшения кнопок
buttonPlus1.addEventListener('click', () => count1('plus1'));
buttonPlus2.addEventListener('click', () => count2('plus2'));
buttonPlus3.addEventListener('click', () => count3('plus3'));

buttonMinus1.addEventListener('click', () => count1('minus1'));
buttonMinus2.addEventListener('click', () => count2('minus2'));
buttonMinus3.addEventListener('click', () => count3('minus3'));
// обработчики обновления формы
buttonPlus1.addEventListener('click', updateFormPeople);
buttonPlus2.addEventListener('click', updateFormPeople);
buttonPlus3.addEventListener('click', updateFormPeople);
buttonMinus1.addEventListener('click', updateFormPeople);
buttonMinus2.addEventListener('click', updateFormPeople);
buttonMinus3.addEventListener('click', updateFormPeople);
