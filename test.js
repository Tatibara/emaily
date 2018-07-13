// https://rallycoding.herokuapp.com/api/music_albums

// ES2015
function fetchAlbums(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(responce => responce.json()) // json should be resolved
    .then(json => console.log(json));
}

// ES2017 syntactic sugar
async function fetchAlbums(){ // to tell javascript interpreter that the function we declare containce an async code or any type of promises
    // const fetchAlbums = async () => {
    // identify promises 
    const responce = await fetch('https://rallycoding.herokuapp.com/api/music_albums'); // await keywort in front of all statement which produce a promise 
    const json = await responce.json();

    console.log(json);
}

fetchAlbums();
