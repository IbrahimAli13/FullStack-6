function changeColor(color) {
  document.body.style.backgroundColor = color;
  const sloganImg = document.querySelector('.slogan-container img');
  sloganImg.src = `pepsi-can-${color}.png`;

  const header = document.querySelector('header');
  header.style.backgroundColor = color;

  const footer = document.querySelector('footer');
  footer.style.backgroundColor = color;
}