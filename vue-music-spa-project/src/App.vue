<template>
  <div id="app">
    <h1>{{ name }}</h1>
    <select v-model="selectedCountry">
      <option v-for="country in countries" v-bind:value="country.name" :key="country.alpha2Code">{{ country.name }}</option>
    </select>
    <spinner v-show="loading"></spinner>
    <ul>
      <artist v-for="artist in artists" :artist="artist" :key="artist.mbid"></artist>
    </ul>
  </div>
</template>

<script>
import Artist from "./components/Artist.vue"
import Spinner from "./components/Spinner.vue"
import { getArtists, getCountries } from "./api"

export default {
  name: "app",
  data() {
    return {
      name: "Vue Music",
      artists: [],
      countries: [],
      selectedCountry: "Peru",
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists() {
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry).then(function(artists) {
        self.loading = false
        self.artists = artists
      })
    }
  },
  mounted: function() {
    const self = this
    this.refreshArtists()
    getCountries().then(function(countries) {
      self.countries = countries
    })
  },
  watch: {
    selectedCountry: function() {
      this.refreshArtists()
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
