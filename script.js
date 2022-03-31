function onClick() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  const background = document.querySelector("body > div > div.one");
  background.style.backgroundColor = "#" + randomColor;
  console.log('hi');
}

const button = document.querySelector('button');
button.addEventListener('click', onClick);
