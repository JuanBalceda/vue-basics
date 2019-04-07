import config from './config'

const {
  apiKey
} = config

const url_artists = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
const url_countries = `https://restcountries.eu/rest/v2/all`

function getCountries() {
  return fetch(url_countries)
    .then(res => res.json())
    .then(json => json)
}

function getArtists(country) {
  const url = url_artists.replace(':country', country)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}

export {
  getCountries,
  getArtists
}
