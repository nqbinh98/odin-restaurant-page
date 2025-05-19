// .\src\menu.js
import meat1 from "./assets/images/meat1.jpg";
import meat2 from "./assets/images/meat2.jpg";
import salad1 from "./assets/images/salad1.jpg";
import dessert1 from "./assets/images/dessert1.jpg";

export function loadMenuPage () {
    const wrap = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    const sectionFirst = document.createElement('div');
    sectionFirst.classList.add('section');
    const titleFirst = document.createElement('p');
    titleFirst.classList.add('title-content');
    titleFirst.textContent = "Grilled lamp";
    const imgFirst = document.createElement('img');
    imgFirst.classList.add('img-section');
    imgFirst.src = meat1;
    sectionFirst.append(titleFirst, imgFirst);

    const sectionSecond = document.createElement('div');
    sectionSecond.classList.add('section');
    const titleSecond = document.createElement('p');
    titleSecond.classList.add('title-content');
    titleSecond.textContent = "Grilled lamp";
    const imgSecond = document.createElement('img');
    imgSecond.classList.add('img-section');
    imgSecond.src = meat2;
    sectionSecond.append(titleSecond, imgSecond);
    
    const sectionThird = document.createElement('div');
    sectionThird.classList.add('section');
    const titleThird = document.createElement('p');
    titleThird.classList.add('title-content');
    titleThird.textContent = "Salad";
    const imgThird = document.createElement('img');
    imgThird.classList.add('img-section');
    imgThird.src = salad1;
    sectionThird.append(titleThird, imgThird);
    
    const sectionFour = document.createElement('div');
    sectionFour.classList.add('section');
    const titleFour = document.createElement('p');
    titleFour.classList.add('title-content');
    titleFour.textContent = "Dessert";
    const imgFour = document.createElement('img');
    imgFour.classList.add('img-section');
    imgFour.src = dessert1;
    sectionFour.append(titleFour, imgFour);

    wrap.append(sectionFirst, sectionSecond, sectionThird, sectionFour);
    return wrap;
}