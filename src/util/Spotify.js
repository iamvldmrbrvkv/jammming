const client_id = 'c1387cb2da0a45b4b1f522a4142834f6';
const scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';
const redirect_uri = 'http://localhost:3000/';

const auth = () => {
  try {
    const generateRandomString = length => {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    const state = generateRandomString(16);
    let url = 'https://accounts.spotify.com/authorize';
    const urlToSend = () => {
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state);
      return url;
    };

    const urlToSpotify = urlToSend();
    window.location.replace(urlToSpotify);
  } catch (error) {
    console.log(error);
  }
};

const getHashParams = () => {
  let hashParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

const getAccessToken = () => {
  const params = getHashParams();
  const access_token = params.access_token;
  return access_token;
};

const getSearchParams = () => {
  let searchParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.search.substring(1);
  while (e = r.exec(q)) {
     searchParams[e[1]] = decodeURIComponent(e[2]);
  }
  return searchParams;
};

const getAccessError = () => {
  const params = getSearchParams();
  const error = params.error;
  return error;
};

export { auth, getAccessToken, getAccessError };