<template>
    <div>
         <h2>{{ title }}</h2>
        <fieldset class="filters" value = "recherche">
            <span>Recherche: <input v-model="filterName" /></span>
        </fieldset> 
        <button @click="prevPage" :disabled="pageNumber===1">
          &lt; Précédent
        </button>
        Page {{ pageNumber }}
        <button @click="nextPage" :disabled="pageNumber >= pageCount">
          Suivant &gt;
        </button>
         <ul class="films">
            <li v-for="film in sortedFilteredPaginatedFilms" :key="film.id"
             v-bind:class='{ discontinued: films.discontinued, selected: selectedFilm === film }'
                :title="JSON.stringify(film)"
                @click="selectedfilm = film">
                <span class="title">{{ film.title }} </span><br>
                <span><img :src="film.image ? film.image : 'https://placeimg.com/200/200/tech'" width="50" style="float:right" /></span>
                <span class="description">{{ film.description.substring(0,100)+"..." }}</span>
                <br>
                <span class="rating">rating: {{film.rating}}</span>
                <span class="detail"><button><router-link to="/" + film.id>Voir détail</router-link></button></span>
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
            },
            pageSize: {
                type: Number,
                required: false,
                default: 3
            }
        },
        data(){
            return{
                title: "Films",
                selectedFilm: null,
                filterName:'',
                sortDir: 'asc',
                pageNumber: 1,
                sortName: 'modifiedDate',
            }
        },
        
        computed:{
          filteredFilms() {
            let filter = new RegExp(this.filterName, 'i')
            return this.films.filter(el => el.title.match(filter))
          },
          sortedFilteredFilms() {
            return [...this.filteredFilms].sort((a,b) => {
              let modifier = 1;
              if(this.sortDir === 'desc') modifier = -1;
              if(a[this.sortName] < b[this.sortName]) return -1 * modifier;
              if(a[this.sortName] > b[this.sortName]) return 1 * modifier;
              return 0;
            })
          },
          sortedFilteredPaginatedFilms() {
            const start = (this.pageNumber-1) * this.pageSize,
                  end = start + this.pageSize;

            return this.sortedFilteredFilms.slice(start, end);
          },
          pageCount() {
            let l = this.filteredFilms.length,
              s = this.pageSize;
            return Math.floor(l / s);
          }
        },
        watch: {
          // reset pagination when filtering
          filterName() {
            this.pageNumber = 1;
          },
          // reset pagination when sorting
          sortName() {
            this.pageNumber = 1;
          },
          sortDir() {
            this.pageNumber = 1;
          }
        },
        methods: {  
          sort:function(s) {
            //if s == current sort, reverse order
            if(s === this.sortName) {
              this.sortDir = this.sortDir==='asc'?'desc':'asc';
            }
            this.sortName = s;
          },
          nextPage() {
            this.pageNumber++;
            this.selectedFilm = null;
          },
          prevPage() {
            this.pageNumber--;
            this.selectedFilm = null;
          }
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