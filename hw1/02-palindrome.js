const elem = document.querySelector("input");
const resultPalindrome = document.querySelector(".resultPalindrome");

function handleInput(event) {
  event.preventDefault();
  resultPalindrome.innerHTML = "";

  const userInputValue = parseInt(elem.value);

  if (Number.isNaN(userInputValue)) {
    resultPalindrome.innerHTML = "";
    return;
  }

  if (userInputValue < 0) {
    resultPalindrome.innerHTML =
      '<p class="text-danger">Please enter a positive number.</p>';
    return;
  }

  const reversedValue = checkPalindrome(userInputValue);

  if (reversedValue) {
    resultPalindrome.innerHTML =
      '<p class="text-success">Yes. This is a palindrome!</p>';
  } else {
    resultPalindrome.innerHTML = '<p class="text-danger">No. Try again.</p>';
  }
}

let checkPalindrome = (inputValue) => {
  let reversedNumber = 0;
  let tempNumber = inputValue;
  let isPalindrome = false;

  while (tempNumber > 0) {
    const remainder = tempNumber % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    tempNumber = Math.floor(tempNumber / 10);
  }

  if (inputValue === reversedNumber) {
    isPalindrome = true;
  }

  return isPalindrome;
};

elem.addEventListener("input", handleInput);
