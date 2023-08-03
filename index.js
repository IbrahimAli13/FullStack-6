function changeColor(color) {
    document.body.style.backgroundColor = color;
    const sloganImg = document.querySelector('.slogan-container img');
    sloganImg.src = `pepsi-can-${color}.png`;
  }
  