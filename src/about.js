// .\src\about.js
export function loadAboutPage () {
    const wrap = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact us';

    const sectionFirst = document.createElement('div');
    sectionFirst.classList.add('section');
    sectionFirst.classList.add('section-about');
    const titleFirst = document.createElement('p');
    titleFirst.classList.add('title-content');
    titleFirst.textContent = "Gordon Ramsay";
    const descFirst = document.createElement('p');
    const phoneFirst = document.createElement('p');
    const emailFirst = document.createElement('p');
    descFirst.textContent = "Chef";
    phoneFirst.textContent = "555-555-555";
    emailFirst.textContent = "contact@email.com";
    sectionFirst.append(descFirst, phoneFirst, emailFirst);

    const sectionSecond = document.createElement('div');
    sectionSecond.classList.add('section');
    sectionSecond.classList.add('section-about');
    const titleSecond = document.createElement('p');
    titleSecond.classList.add('title-content');
    titleSecond.textContent = "Hugh Jackman";
    const descSecond = document.createElement('p');
    const phoneSecond = document.createElement('p');
    const emailSecond = document.createElement('p');
    descSecond.textContent = "Manager";
    phoneSecond.textContent = "555-555-555";
    emailSecond.textContent = "contact@email.com";
    sectionSecond.append(descSecond, phoneSecond, emailSecond);

    const sectionThird = document.createElement('div');
    sectionThird.classList.add('section');
    sectionThird.classList.add('section-about');
    const titleThird = document.createElement('p');
    titleThird.classList.add('title-content');
    titleThird.textContent = "Hugh Jackman";
    const descThird = document.createElement('p');
    const phoneThird = document.createElement('p');
    const emailThird = document.createElement('p');
    descThird.textContent = "Manager";
    phoneThird.textContent = "555-555-555";
    emailThird.textContent = "contact@email.com";
    sectionThird.append(descThird, phoneThird, emailThird);


    wrap.append(sectionFirst, sectionSecond, sectionThird);
    return wrap;
}