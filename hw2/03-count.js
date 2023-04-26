const input = document.querySelector("input");
const container = document.querySelector(".text");

// key-up functino to highlight the input words
input.addEventListener("keyup", function (event) {
  const inputWord = event.target.value.toLowerCase();
  const wordsFromText = container.textContent.trim().split(/\s+/);
  const wordsHighlighted = wordsFromText.map(function (item) {
    if (inputWord === item.toLowerCase()) {
      return '<span class="bg-warning">' + item + "</span>";
    } else {
      return item;
    }
  });
  container.innerHTML = wordsHighlighted.join(" ");
});
