function switchButton(index) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  const img = document.getElementById('canhquat');
  img.className = 'm' + index; // Thêm class 'm' + index vào thẻ img
}
