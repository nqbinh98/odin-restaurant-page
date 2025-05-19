// .\src\home.js
export function loadHomePage () {
    const wrap = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Breakfast Restaurant';
    const intro = document.createElement('div');
    intro.classList.add('section');
    intro.id = 'intro';
    const paraIntro = document.createElement('p');
    paraIntro.classList.add('para-content');
    paraIntro.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    const paraAuthor = document.createElement('p');
    paraAuthor.classList.add('author-intro');
    paraAuthor.textContent = "Goldilocks";
    intro.append(paraIntro, paraAuthor)

    const time = document.createElement('div');
    time.classList.add('section');
    time.id = 'time';
    const titleTime = document.createElement('p');
    titleTime.classList.add('title-content');
    titleTime.textContent = "Hours";
    const pMon = document.createElement('p');
    const pTue = document.createElement('p');
    const pWed = document.createElement('p');
    const pThu = document.createElement('p');
    const pFri = document.createElement('p');
    const pSat = document.createElement('p');
    const pSun = document.createElement('p');
    pMon.classList.add('para-content');
    pTue.classList.add('para-content');
    pWed.classList.add('para-content');
    pThu.classList.add('para-content');
    pFri.classList.add('para-content');
    pSat.classList.add('para-content');
    pSun.classList.add('para-content');
    pMon.textContent = "Sunday: 8am - 8pm";
    pTue.textContent = "Monday: 6am - 6pm";
    pWed.textContent = "Tuesday: 6am - 6pm";
    pThu.textContent = "Wednesday: 6am - 6pm";
    pFri.textContent = "Thursday: 6am - 10pm";
    pSat.textContent = "Friday: 6am - 10pm";
    pSun.textContent = "Saturday: 8am - 10pm";
    time.append(titleTime, pMon, pTue, pWed, pThu, pFri, pSat, pSun);

    const location = document.createElement('div');
    location.classList.add('section');
    location.id = 'location';
    const titleLocation = document.createElement('p');
    titleLocation.classList.add('title-content');
    titleLocation.textContent = 'Location';
    const paraLocation = document.createElement('p');
    paraLocation.classList.add('para-content');
    paraLocation.textContent = "123 Forest Drive, Forestville, Maine";
    location.append(titleLocation, paraLocation);

    wrap.append(h1, intro, time, location);
    return wrap;
}