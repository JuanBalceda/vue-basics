<template>
  <li class="artist">
      <h2><a :href="artist.url" target="_blank"> {{ artist.name }}</a></h2>
      <img :src="artist.image[2]['#text']" alt="artist_img">
  </li>
</template>

<script>
export default {
    name: 'artist',
    props: ['artist']
}
</script>

<style scoped>
    li .artist{
        display: block;
        margin: 10px 0;
    }
</style>
