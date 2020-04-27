<template>
    <div>
        <film-list films="films"></film-list>
    </div>
</template>

<script>

import FilmList from '@/components/FilmList.vue';
import FilmService from '@/services/FilmService.js';
    export default {
        name:'app',
        components : {
            FilmList
        
        },
        data() {
          return {
             films: []
                  }   
             },
         created () {
             this.loading = true;
             FilmService.getFilms()
            .then(response => {
                this.films = response.data;
            
             })
         }
    }
     
</script>

<style lang="scss" scoped>

</style>