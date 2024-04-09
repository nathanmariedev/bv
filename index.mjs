let header = document.getElementById('header');
let menu = document.getElementsByClassName('menu')[0];
let about = document.getElementById('about');
let button = document.getElementById('scroll-btn');
header.style.justifyContent = 'center';

button.addEventListener('click', () => {
  console.log('click');
  about.classList.remove('hidden');
  about.scrollIntoView({ behavior: 'smooth' }) 
});

window.addEventListener('reload', () => {
  console.log('reload');
  header.classList.add('hidden');
  about.classList.add('hidden');
});

console.log(header);

window.addEventListener('scroll', () => {
  console.log('scroll');
  if (window.scrollY >= window.innerHeight) {
    header.classList.remove('center');
    header.classList.add('left');
    menu.classList.remove('hidden');
  }
});
