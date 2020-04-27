<template>
    <div>
         <ul class="products">
            <li v-for="film in films" :key="film.id">
                <span class="name">{{ film.title }}</span>
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
        data(){
           return{
               title
           }
        }
    }
</script>

<style lang="scss" scoped>

</style>