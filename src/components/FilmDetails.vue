<template>
    <div>
        <h2>{{film.Title}}</h2>
        <img :src="film.image ? film.image : 'https://placeimg.com/200/200/tech'" width="200" style="float:right" />
       <!-- <p v-if"this.vote >=5" >Vote: {{film.vote}}</p>  nous ne savons pas comment avoir les vote-->
        <p>Synopsis:{{film.description}}</p>
        <p>Classement: {{film.rating}}</p>
        <p> Durée: {{film.length }}</p>
        <p> Année de parution: {{film.release_year }}</p>
    </div>
</template>

<script>
import FilmService from '@/services/FilmService.js';
    export default {
         data () {
            return {
                error: null,
                product: null
            }
         },
         props: {
            id: {
                type: Number,
                required: false
            }
        },
        created() {
            FilmService.getFilm(this.id)
                .then(response => {
                this.film = response.data
                })
                .catch(error => {
                this.error = error;
                })
        }
        
    }
</script>

<style lang="scss" scoped>
</style>