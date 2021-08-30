const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const divEl = document.querySelector('.wrapper__item_home');

async function getHotels(url) {
  const sessionStorageHotels = sessionStorage.getItem('data');
  if (!sessionStorageHotels) {
    const data = await fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
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

// data.forEach(element => {
//   divEl.innerHTML +=
//   `<div>
//   <img src=${element.imageUrl} alt=${element.name}/>
//   <a href="#">${element.name}</a>
//   <p>${element.country}, ${element.city}</p>
//   </div>`
// });
