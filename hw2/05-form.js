let form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("fullName").value;
  let email = document.getElementById("emailAddress").value;
  let registrationStatus = document.getElementById("registrationStatus").value;
  let anythingElse = document.getElementById("anythingElse").value;
  const nameValue = name == "" ? "No Submission" : name;
  const anythingElseValue = anythingElse == "" ? "No Submission" : anythingElse;

  const checkboxes = document.querySelectorAll(".coursesCheckbox");

  let checkedValue;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedValue = checkboxes[i].name;
      break;
    } else {
      checkedValue = "Not Selected";
    }
  }

  console.log(checkedValue);

  console.log("------------------Form-------------------");
  console.log("Name: " + nameValue);
  console.log("Email: " + email);
  console.log("Registration Status:" + registrationStatus);
  console.log("Course Name: " + checkedValue);
  console.log("Anything Else: " + anythingElseValue.trim());
});
