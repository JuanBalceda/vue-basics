import config from './config'

const { apiKey } = config
const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=${apiKey}&format=json`

export default function getArtists(){
    return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}