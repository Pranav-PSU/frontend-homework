const inputElement = document.querySelector('input');
const containerElement = document.querySelector('.text');

inputElement.addEventListener('keyup', (event) => {
  const inputWord = event.target.value.trim();
  const wordsFromText = containerElement.textContent.trim().split(/\s+/);

  const wordsHighlighted = wordsFromText.map((item) => {
    const tempVariable = `<span class="bg-warning">${item}</span>`;
    if (inputWord === item.trim()) {
      `<span class="bg-warning">${item}</span>`;
      return tempVariable;
    }
    return item;
  });
  containerElement.innerHTML = wordsHighlighted.join(' ');
});
