const elem = document.querySelector('input');
const resultPalindromeString = document.querySelector(
  '.resultPalindromeString'
);

function handleInput(event) {
  resultPalindromeString.classList.add('text-danger');
  event.preventDefault();
  resultPalindromeString.innerHTML = '';

  const userInputValue = parseInt(elem.value);

  if (Number.isNaN(userInputValue)) {
    resultPalindromeString.innerHTML = '';
    return;
  }

  if (userInputValue < 0) {
    resultPalindromeString.innerHTML = 'Please enter a positive number.';
    return;
  }

  const reversedValue = checkPalindrome(userInputValue);

  if (reversedValue) {
    resultPalindromeString.classList.replace('text-danger', 'text-success');
    resultPalindromeString.innerHTML = 'Yes. This is a palindrome!';
  } else {
    resultPalindromeString.innerHTML = 'No. Try again.';
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

elem.addEventListener('input', handleInput);
