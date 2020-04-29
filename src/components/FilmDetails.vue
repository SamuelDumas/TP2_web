<template>
    <div>
        <h2>{{film.Title}}</h2>
        <img :src="film.image ? film.image : 'https://placeimg.com/200/200/tech'" width="200" style="float:right" />
        <h3>{{film.description}}</h3>
        <p>Vote: {{film.rating}}</p>
        <p>Synopsis:{{film.description}}</p>
        <p>Classement: {{film.rating}}</p>
        <p> Durée: {{film.length }}</p>
        <p> Année de parution: {{film.release_year }}</p>
        <p> Durée: {{film.length }}</p>
    </div>
</template>

<script>
    export default {
         props: {
            film: {
                type: Object,
                default: null
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>