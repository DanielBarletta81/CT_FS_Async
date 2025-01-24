
const publicKey = 'fa26a08bd9aedc4213238725b70f4fe6';
const privateKey = '0cef7a5b4119407988bdb88ff3a08079099446b4';

const apiBaseURL = "https://gateway.marvel.com/v1/public";

/*

Task 2: Fetching Characters Using Fetch API

Implement a function to fetch Marvel Comics characters asynchronously from the API 
endpoint using the Fetch API and promises. Utilize the API key 
and configurations obtained in Task 1. Log the fetched characters to the console.

*/
async function fetchMarvelData() {
  try {
      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);
      const apiUrl = `${apiBaseURL}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      const marvelResponse = await fetch(apiUrl);
      if (!marvelResponse.ok) {
          throw new Error(`Marvel API Error: ${marvelResponse.status}`);
      }
      const marvelData = await marvelResponse.json();
      console.log('Marvel Character Data:', marvelData);
        
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

fetchMarvelData();


/*

Task 3: Updating User Interface Dynamically

Write a function to dynamically update the user interface with 
the fetched characters' information. 
Utilize promises and the Fetch API to ensure that the UI updates 
only after the characters are successfully fetched. */

async function displayMarvelCharacters() {
    try {
        const ts = new Date().getTime();
        const hash = md5(ts + privateKey + publicKey);
        const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        const characters = data.data.results;

        const characterList = document.getElementById('character-list');
        characterList.innerHTML = '';

        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            
            characterCard.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
                <p>${character.description || 'No description available'}</p>
            `;
            
            characterList.appendChild(characterCard);
        });
    } catch (error) {
        console.log('Error fetching characters:', error);
    }
}

displayMarvelCharacters();
