let header = document.getElementById('header');
let menu = document.getElementsByClassName('menu')[0];
let about = document.getElementById('about');
let button = document.getElementById('scroll-btn');
let conso = document.getElementsByClassName('console')[0];
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
    about.classList.remove('hidden');
  }
});

Array.from(conso.children).forEach((item) => {
  console.log(item.tagName); // Print the tag type
  if (item.tagName === 'DIV') {
    item.innerHTML = "björn@veldstra ~$ " + item.innerHTML;
  }
});

var consoleText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur labore veritatis tempore dolorem enim, doloribus ullam. Reprehenderit maxime minus dicta, nesciunt officia enim repudiandae libero alias quia, neque non.";
var index = 0;
var textSpan = document.querySelector('.console .text');
var cursorSpan = document.querySelector('.console .cursor');
var animation = "blink .5s infinite alternate";

function afficherTexteProgressivement() {
  if (index < consoleText.length) {
    cursorSpan.style.animation = "none"; // Hide the cursor while typing
    textSpan.textContent += consoleText.charAt(index);
    index++;
    cursorSpan.style.left = (textSpan.offsetWidth + 2) + "px";
    setTimeout(afficherTexteProgressivement, 50); // Change the delay value here (in milliseconds)
  } else {
    // When typing is finished, start blinking cursor
    cursorSpan.style.opacity = 1;
    cursorSpan.style.animation = animation;
  }
}

setTimeout(afficherTexteProgressivement, 1000); // Start after 1 second
