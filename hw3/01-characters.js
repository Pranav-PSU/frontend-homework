async function addCharacters(charactersInformation) {
  const dataContainerElement = document.querySelector('.dataContainer');
  const row = document.createElement('div');
  row.className = 'row';

  charactersInformation.forEach((character) => {
    // Creating the main div with Bootstrap column classes
    const parentDivElement = document.createElement('div');
    parentDivElement.className = 'col-6 col-md-4 col-lg-3 mt-2 mx-0';

    // div element for an image
    const imageDivEement = document.createElement('div');
    imageDivEement.className = 'pt-2 justify-content-center mx-auto imageDivEementClass';

    // Add hover background color change
    imageDivEement.addEventListener('mouseover', () => {
      imageDivEement.style.backgroundColor = 'var(--blue)';
      imageDivEement.style.color = 'var(--white)';
    });

    imageDivEement.addEventListener('mouseout', () => {
      imageDivEement.style.backgroundColor = '';
      imageDivEement.style.color = 'var(--black)';
    });

    // Creating the image
    const img = document.createElement('img');
    img.src = character.imageUrl;
    img.className = 'imageElement';
    img.alt = `Portrait of ${character.fullName}`;

    // Creating h2 element for name of the character
    const characterName = document.createElement('h2');
    characterName.className = 'mt-3 fw-bold text-center mx-auto';
    characterName.textContent = character.fullName;

    // Creating h6 element for title of the character
    const characterTitle = document.createElement('h6');
    characterTitle.className = 'mt-1 fw-bold text-center mx-auto';
    characterTitle.textContent = character.title;

    // Appending all the custom elements in their respective parent div
    imageDivEement.append(img, characterName, characterTitle);
    parentDivElement.appendChild(imageDivEement);

    // Appending parent div element in the row
    row.appendChild(parentDivElement);
  });

  // Appending the row to the data container
  dataContainerElement.appendChild(row);
}

function fetchData(apiUrl, callback) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log('Fetch Failed:', error);
      alert('Fetch Failed: Something went wrong', error);
    });
}

const apiUrl = 'https://thronesapi.com/api/v2/Characters';
fetchData(apiUrl, addCharacters);
