<template>
    <div>
         <ul class="films">
            <li v-for="film in films" :key="film.id">
                <span class="title">{{ film.title }}</span>
                <span class="description">{{ film.description }}</span>
            </li>
        </ul>

    </div>
</template>

<script>


    export default {
        props: {
            films:{
                type:Array,
                default:() =>[]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>