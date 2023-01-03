const menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach((item) => {
  //   let newString = '';
  let itemText = item.children[0].children[0].innerText.split('');
  item.children[0].innerHTML = '';
  itemText.forEach((letter, idx) => {
    item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
  });
  let cloneDiv = item.children[0].cloneNode(true);
  cloneDiv.style.display = 'flex';
  cloneDiv.style.justifyContent = 'flex-end';
  cloneDiv.style.top = '-20px';
  cloneDiv.style.position = 'relative';
  item.appendChild(cloneDiv);
});
