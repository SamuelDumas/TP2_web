<template>
    <div>
         <h1>{{ title }}</h1>
        <fieldset class="filters" value = "recherche">
            <span class="search">Recherche: <input v-model="filterName" /></span>
        </fieldset> 
        <div class="page">
        <button @click="prevPage" :disabled="pageNumber===1">
          &lt; Précédent
        </button>
        Page {{ pageNumber }}
        <button  @click="nextPage" :disabled="pageNumber >= pageCount">
          Suivant &gt;
        </button>
        </div>
      <div v-if="this.filterName === ''">
          <table class="films" align="center">
            <tr><td colspan="3"><h2> Les derniers films ajoutés</h2></td></tr>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Rating</th>
              <th>image</th>
            </tr>
            <tr  v-for="film in mostRecentAddedFilms" :key="film.id"
             v-bind:class='{ discontinued: films.discontinued, selected: selectedFilm === film }'
                :title="JSON.stringify(film)"
                @click="selectedfilm = film">
                <th class="title">{{ film.title }}</th>
                <td class="description">{{ film.description.substring(0,100)+"..." }}</td>
                <td class="rating">{{film.rating}}</td>
                <td><img :src="film.image ? film.image : 'https://placeimg.com/200/200/tech'" width="100" style="float:right" /></td>
                <td><button @click="onSelect(film)">Voir détail </button></td>
            </tr>
          </table>
        </div>
         <table class="films" align="center">
           <tr v-if="sortedFilteredPaginatedFilms.length === 0" >Il n'y a pas de film qui correspond à cette description</tr>
           <div v-if="this.filterName !== ''">
             <tr>Nombre de films trouvés: {{sortedFilteredPaginatedFilms.length}}</tr>
             <tr>
               <th>image</th>
              <th>Titre</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Longueur</th>
              
            </tr>
            <tr  v-for="film in sortedFilteredPaginatedFilms" :key="film.id"
             v-bind:class='{ discontinued: films.discontinued, selected: selectedFilm === film }'
                :title="JSON.stringify(film)"
                @click="selectedfilm = film">
                 <td><img :src="film.image ? film.image : 'https://placeimg.com/200/200/tech'" width="100" style="float:right" /></td>
                <th class="title">{{ film.title }}</th>
                <td class="description">{{ film.description.substring(0,100)+"..." }}</td>
                <td class="rating"> {{film.rating}}</td>
                <td class="rating"> {{film.length}} min</td>
                <td><button @click="onSelect(film)">Voir détail </button></td>
            </tr>

         </div>
        </table>
        
        

    </div>
</template>

<script>
//import FilmDetails from '@/views/FilmDetails.vue';

    export default {
        props: {
            films:{
                type:Array,
                default:() =>[]
            },
            pageSize: {
                type: Number,
                required: false,
                default: 20
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
          },
          mostRecentAddedFilms(){
            let filmsLength = this.films.length
            var mostRecentFilm = this.films[filmsLength -1]
            var secondMostRecentFilm = this.films[filmsLength -2]
            var thirdMostRecentFilm = this.films[filmsLength -3]
            var mostRecentFilms =[mostRecentFilm,secondMostRecentFilm,thirdMostRecentFilm]
            return mostRecentFilms
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
          },
          onSelect(film) {
            this.$router.push({ name: "films", params: { id: film.id } });
          }
        }
    }
</script>

<style >

th, td {
  padding: 15px;
  text-align: left;
   font-family: "Times New Roman", Times, serif;
   font-size: 30px;
}
fieldset{
  padding: 15px;
  font-size: 30px;
}
.page{
  padding: 15px;
}


</style> 