<template>
    <div>
        <film-list :films="films" :page-size="20"></film-list>
        
    </div>
</template>

<script>

import FilmList from '@/components/FilmList.vue';
//import FilmService from '@/services/FilmService.js';

    export default {
        name:'app',
        components : {
            FilmList
        
        },
    
        data() {
          return {
             films: [
                 {"id":1,"title":"ACADEMY DINOSAUR","release_year":"2006","description":"A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies","rating":"PG","length":86,"image":"","special_features":"Deleted Scenes,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"}
                 ,{"id":2,"title":"ACE GOLDFINGER","release_year":"2006","description":"A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China","rating":"G","length":48,"image":"","special_features":"Trailers,Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"}
                 ,{"id":3,"title":"ADAPTATION HOLES","release_year":"2006","description":"A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory","rating":"NC-17","length":50,"image":"","special_features":"Trailers,Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"}
                 ,{"id":4,"title":"AFFAIR PREJUDICE","release_year":"2006","description":"A Fanciful Documentary of a Frisbee And a Lumberjack who must Chase a Monkey in A Shark Tank","rating":"G","length":117,"image":"","special_features":"Commentaries,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"}
                 ,{"id":5,"title":"AFRICAN EGG","release_year":"2006","description":"A Fast-Paced Documentary of a Pastry Chef And a Dentist who must Pursue a Forensic Psychologist in The Gulf of Mexico","rating":"G","length":130,"image":"","special_features":"Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"}
                 ,{"id":6,"title":"AGENT TRUMAN","release_year":"2006","description":"A Intrepid Panorama of a Robot And a Boy who must Escape a Sumo Wrestler in Ancient China","rating":"PG","length":169,"image":"","special_features":"Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":7,"title":"AIRPLANE SIERRA","release_year":"2006","description":"A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat","rating":"PG-13","length":62,"image":"","special_features":"Trailers,Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":8,"title":"AIRPORT POLLOCK","release_year":"2006","description":"A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India","rating":"R","length":54,"image":"","special_features":"Trailers","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":9,"title":"ALABAMA DEVIL","release_year":"2006","description":"A Thoughtful Panorama of a Database Administrator And a Mad Scientist who must Outgun a Mad Scientist in A Jet Boat","rating":"PG-13","length":114,"image":"","special_features":"Trailers,Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":10,"title":"ALADDIN CALENDAR","release_year":"2006","description":"A Action-Packed Tale of a Man And a Lumberjack who must Reach a Feminist in Ancient China","rating":"NC-17","length":63,"image":"","special_features":"Trailers,Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":11,"title":"ALAMO VIDEOTAPE","release_year":"2006","description":"A Boring Epistle of a Butler And a Cat who must Fight a Pastry Chef in A MySQL Convention","rating":"G","length":126,"image":"","special_features":"Commentaries,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":12,"title":"ALASKA PHANTOM","release_year":"2006","description":"A Fanciful Saga of a Hunter And a Pastry Chef who must Vanquish a Boy in Australia","rating":"PG","length":136,"image":"","special_features":"Commentaries,Deleted Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":13,"title":"ALI FOREVER","release_year":"2006","description":"A Action-Packed Drama of a Dentist And a Crocodile who must Battle a Feminist in The Canadian Rockies","rating":"PG","length":150,"image":"","special_features":"Deleted Scenes,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":14,"title":"ALICE FANTASIA","release_year":"2006","description":"A Emotional Drama of a A Shark And a Database Administrator who must Vanquish a Pioneer in Soviet Georgia","rating":"NC-17","length":94,"image":"","special_features":"Trailers,Deleted Scenes,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":15,"title":"ALIEN CENTER","release_year":"2006","description":"A Brilliant Drama of a Cat And a Mad Scientist who must Battle a Feminist in A MySQL Convention","rating":"NC-17","length":46,"image":"","special_features":"Trailers,Commentaries,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":16,"title":"ALLEY EVOLUTION","release_year":"2006","description":"A Fast-Paced Drama of a Robot And a Composer who must Battle a Astronaut in New Orleans","rating":"NC-17","length":180,"image":"","special_features":"Trailers,Commentaries","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":17,"title":"ALONE TRIP","release_year":"2006","description":"A Fast-Paced Character Study of a Composer And a Dog who must Outgun a Boat in An Abandoned Fun House","rating":"R","length":82,"image":"","special_features":"Trailers,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":18,"title":"ALTER VICTORY","release_year":"2006","description":"A Thoughtful Drama of a Composer And a Feminist who must Meet a Secret Agent in The Canadian Rockies","rating":"PG-13","length":57,"image":"","special_features":"Trailers,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":19,"title":"AMADEUS HOLY","release_year":"2006","description":"A Emotional Display of a Pioneer And a Technical Writer who must Battle a Man in A Baloon","rating":"PG","length":113,"image":"","special_features":"Commentaries,Deleted Scenes,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"},
                 {"id":20,"title":"AMELIE HELLFIGHTERS","release_year":"2006","description":"A Boring Drama of a Woman And a Squirrel who must Conquer a Student in A Baloon","rating":"R","length":79,"image":"","special_features":"Commentaries,Deleted Scenes,Behind the Scenes","language_id":1,"created_at":"2006-02-15T15:03:42.000000Z"}
                 ]
            } 
               
             },
             //Retourne un arrau vide , je ne sais pas pourquoi
    //       created () {
    // FilmService.getFilms()
    //   .then(response => {
    //     this.films = response.data;
    //   })
    //   .catch(error => {
    //     this.error = error;
    //   })
    
  
        
          /*  getderniersfilms(){
                  let l = Object.keys(this.films).length
                   return l
            }*/
        
    }
     
</script>

<style lang="scss" scoped>

</style>