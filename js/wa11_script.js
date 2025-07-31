const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
// const altArr = ["close up on an eye", "some sort of rock formation", "purple flowers", "Egyptian wall art", "a butteryfly on a leaf"];
const alts = {
    'pic1.jpg' : 'close up on an eye',
    'pic2.jpg' : 'some sort of rock formation',
    'pic3.jpg' : 'purple flowers',
    'pic4.jpg' : 'Egyptian wall art',
    'pic5.jpg' : 'a butterfly on a leaf'
  }

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>
{
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0,0,0,0.5)";
    }
    else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      }
    }
);