<template>
    <div>
      <!--  <film-details></film-details>-->
    </div>
</template>

<script>
    export default {
        created () {
            DetailService.getFilm()
           .then(response => {this.film = response.data})
            
         }
    }
</script>

<style lang="scss" scoped>

</style>