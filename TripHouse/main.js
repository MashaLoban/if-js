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
const adultsValue = document.querySelector('.form__people_1_buttons span');
const childrensValue = document.querySelector('.form__people_2_buttons span');
const roomsValue = document.querySelector('.form__people_3_buttons span');
const inputPeopleForm = document.querySelector('.form__search_3_input');
const formChildrenAge = document.querySelector('.form_children_question');
// const ageChildrenSelect = document.querySelector('.ageChildrenForm');

const buttonMinus1 = document.querySelector('.form_people_minus1');
const buttonMinus2 = document.querySelector('.form_people_minus2');
const buttonMinus3 = document.querySelector('.form_people_minus3');

const buttonPlus1 = document.querySelector('.form_people_plus1');
const buttonPlus2 = document.querySelector('.form_people_plus2');
const buttonPlus3 = document.querySelector('.form_people_plus3');

adultsValue.textContent = 1;
childrensValue.textContent = 0;
roomsValue.textContent = 1;
inputPeopleForm.value = `${adultsValue.textContent} Adults - ${childrensValue.textContent} Children - ${roomsValue.textContent} Room`;

const showFormPeople = () => {
  formPeopleEl.classList.toggle('showed');
};

const createAdultsPlus = (e) => {
  e.preventDefault();
  if (adultsValue.textContent < 31) {
    const count = Number(adultsValue.textContent);
    adultsValue.textContent = count + 1;
  }
};
const createChildrensPlus = (e) => {
  e.preventDefault();
  if (childrensValue.textContent >= 0) {
    formChildrenAge.style.display = 'block';
  }
  // let newSelectAge = ageChildrenSelect.cloneNode(true);
  // newSelectAge.after(ageChildrenSelect);
  if (childrensValue.textContent < 11) {
    const count = Number(childrensValue.textContent);
    childrensValue.textContent = count + 1;
  }
// const newSelectAge = document.querySelector('.ageChildrenForm').cloneNode(true);
// newSelectAge.after('.ageChildrenSelect');
};

const createRoomsPlus = (e) => {
  e.preventDefault();
  if (roomsValue.textContent < 31) {
    const count = Number(roomsValue.textContent);
    roomsValue.textContent = count + 1;
  }
};

const createAdultsMinus = (e) => {
  e.preventDefault();
  if (adultsValue.textContent > 0) {
    const count = Number(adultsValue.textContent);
    adultsValue.textContent = count - 1;
  }
};

const createChildrensMinus = (e) => {
  e.preventDefault();
  if (childrensValue.textContent < 2) {
    formChildrenAge.style.display = 'none';
  }
  if (childrensValue.textContent > 0) {
    const count = Number(childrensValue.textContent);
    childrensValue.textContent = count - 1;
  }
};

const createRoomsMinus = (e) => {
  e.preventDefault();
  if (roomsValue.textContent > 0) {
    const count = Number(roomsValue.textContent);
    roomsValue.textContent = count - 1;
  }
};

const updateFormPeople = () => {
  inputPeopleForm.value = `${adultsValue.textContent} Adults - ${childrensValue.textContent} Children - ${roomsValue.textContent} Room`;
};

// const showFormChildrenAge = () => {

// };

// const showFormChildrenAge = () =>{
//   formChildrenAge.classList.toggle('showed');
// }

inputSearchFocus.addEventListener('click', showFormPeople);
// обработкики увеличения/уменьшения кнопок
buttonPlus1.addEventListener('click', createAdultsPlus);
buttonPlus2.addEventListener('click', createChildrensPlus);
buttonPlus3.addEventListener('click', createRoomsPlus);

buttonMinus1.addEventListener('click', createAdultsMinus);
buttonMinus2.addEventListener('click', createChildrensMinus);
buttonMinus3.addEventListener('click', createRoomsMinus);
// обработчики обновления формы
buttonPlus1.addEventListener('click', updateFormPeople);
buttonPlus2.addEventListener('click', updateFormPeople);
buttonPlus3.addEventListener('click', updateFormPeople);
buttonMinus1.addEventListener('click', updateFormPeople);
buttonMinus2.addEventListener('click', updateFormPeople);
buttonMinus3.addEventListener('click', updateFormPeople);
