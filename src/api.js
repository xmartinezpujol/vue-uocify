const API = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

function getPlaylists() {
  return fetch(`${API}/chart/0/playlists`)
    .then(response => response.json());
}

function getPlaylist(id) {
  return fetch(`${API}/playlist/${id}`)
    .then(response => response.json());
}

function getTracks(query) {
  return fetch(`${API}/search/track?q=${query}`)
    .then(response => response.json());
}

function getAlbums(query) {
  return fetch(`${API}/search/album?q=${query}`)
    .then(response => response.json());
}

function getArtists(query) {
  return fetch(`${API}/search/artist?q=${query}`)
    .then(response => response.json());
}

export {
  getPlaylists,
  getPlaylist,
  getAlbums,
  getArtists,
  getTracks,
};
