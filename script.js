function onClick() {
  const background = document.querySelector("body > div > div.one");
  background.style.backgroundColor = 'black';
  console.log('hi');
}

const button = document.querySelector('button');
button.addEventListener('click', onClick);
