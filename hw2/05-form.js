const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('emailAddress').value;
  const registrationStatus = document.getElementById('registrationStatus').value;
  const anythingElse = document.getElementById('anythingElse').value;
  const anythingElseValue = anythingElse == '' ? 'No Submission' : anythingElse;
  const checkboxesValues = document.querySelectorAll('.coursesCheckbox');

  let checkedValue = 'Not Selected';
  checkboxesValues.forEach((checkboxItem) => {
    if (checkboxItem.checked) {
      checkedValue = checkboxItem.name;
    }
  });

  console.log(checkedValue);

  console.log('------------------Form-------------------');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Registration Status:${registrationStatus}`);
  console.log(`Course Name: ${checkedValue}`);
  console.log(`Anything Else: ${anythingElseValue.trim()}`);
});
