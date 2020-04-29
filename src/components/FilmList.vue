<template>
    <div>
        <fieldset class="filters">
            <span>Recherche: <input v-model="filterName" /></span>
        </fieldset>
         <ul class="films">
            <li v-for="film in films" :key="film.id">
                <span class="title">{{ film.title }} </span><br>
                <span><img :src="film.image ? film.image : 'https://placeimg.com/200/200/tech'" width="50" style="float:right" /></span>
                <span class="description">{{ film.description.substring(0,100)+"..." }}</span>
                <!--<span class="detail"><button><router-link to="/" + Film.id>Voir détail</router-link></button>-->
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
                selectedProduct: null,
                filterName:''
            }
        },
        
        computed:{
          filteredFilms() {
            let filter = new RegExp(this.filterName, 'i')
            return this.films.filter(el => el.name.match(filter))
          },
        }
    }
</script>

<style >
 .films li{
     padding:10px;
     
 }
 .films .title{
       margin-right: .8em;

 }

</style> 