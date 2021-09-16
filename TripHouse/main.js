import { countFunc } from './modules/module1';

const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const divEl = document.querySelector('.wrapper__item_home');
const formPeopleEl = document.querySelector('.form__people');

async function getHotels(url) {
  const sessionStorageHotels = sessionStorage.getItem('data');
  if (!sessionStorageHotels) {
    const data = await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => data)
      .catch((err) => console.log(err.message));
    sessionStorage.setItem('data', JSON.stringify(data));
    return data;
  }
  const data = JSON.parse(sessionStorageHotels);
  return data;
}

async function createHotels() {
  const data = await getHotels(url);
  data.forEach((element) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', element.imageUrl);
    const a = document.createElement('a');
    a.innerHTML = `${element.name}`;
    a.href = '#';
    a.setAttribute('src', `#${element.name}`);
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `${element.country}, ${element.city}`;
    div.appendChild(img);
    div.appendChild(a);
    div.appendChild(paragraph);
    divEl.appendChild(div);
  });
}
createHotels();

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

const colorActiv = '#3077C6';
const colorDesabled = '#CECECE';
const borderActiv = '1px solid #3077C6';
const borderDesabled = '1px solid #CECECE';

inputPeopleForm.value = `${countAdultsEl.textContent} Adults - ${countChildrenEl.textContent} Children - ${countRoomsEl.textContent} Room`;

const showFormPeople = () => {
  // debugger;
  formPeopleEl.classList.toggle('showed');
};

// const filterParam = {
//   adults: {
//     min: 1,
//     max: 30,
//     default: 1,
//   },
//   children: {
//     min: 0,
//     max: 10,
//     default: 0,
//   },
//   rooms: {
//     min: 1,
//     max: 30,
//     default: 1
//   }
// }

const count1 = countFunc(1);
const count2 = countFunc(0);
const count3 = countFunc(1);

const updateFormPeople = (e) => {
  e.preventDefault();
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
