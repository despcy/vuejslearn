<template>
    <div v-if="$route.params.type === 'movie'">

<el-card class="box-card" shadow="always">
  <div slot="header" class="clearfix">
    <span>{{movieData.title}}</span>
  </div>
  <div class="text item">
   <h4>Year:&nbsp;&nbsp;&nbsp;&nbsp;{{movieData.year}}</h4>  
  </div>
    <div class="text item">
   <h4>director:&nbsp;&nbsp;&nbsp;&nbsp;{{movieData.director}}</h4>  
  </div>

  <div class="text item">
   <h4>Rating:&nbsp;&nbsp;&nbsp;&nbsp;{{movieData.rating}}</h4>  
  </div>
    <div class="text item">

   <el-divider content-position="left"><h4>Stars:</h4></el-divider>
   <div v-for="(star, idx) in movieData.stars" v-bind:key="idx">
<el-link type="success"  @click="starClick(star.id)" ><h4>{{star.name}}</h4></el-link>

   </div>  


  </div>

    <div class="text item">
   <el-divider content-position="left"><h4>Genres:</h4></el-divider>
    <div v-for="(genre, idx) in movieData.genres" v-bind:key="idx">
<h4>{{genre}}&nbsp;</h4>

   </div>
  </div>
</el-card>

    </div>
    <div v-else-if="$route.params.type === 'star'">


<el-card class="box-card" shadow="always">
  <div slot="header" class="clearfix">
    <span>{{starData.name}}</span>
  </div>
    <div class="text item"><h4>BirthYear: {{starData.birthYear}}</h4></div>
   <el-divider content-position="left"><h4>Movies:</h4></el-divider>
   <div v-for="(movie, idx) in starData.movies" v-bind:key="idx">
<el-link type="success"  @click="movieClick(movie.id)" ><h4>{{movie.name}}</h4></el-link>

   </div> 
</el-card>
</div>
</template>

<script>
export default {
    name: 'Item',
    components:{

    },
    data: function(){
        return {
            movieData:{
                id:'1234',
                title:'titleeee',
                year: 2012,
                director: 'ycx',
                rating: 3.4,
                stars:[
                    {
                        id: 4,
                        name: 'fff'
                    },
                    {
                                        
                        id: 5,
                        name: 'ffdf'
                    }
                ],
                genres:[
                    "gen1",
                    "gen2",
                    "gen3",
                    "gen4"
                ]
            },
            starData:{
                id:'2233',
                name:'hahahha',
                birthYear:2020,
                movies:[
                    {
                        id:'2233',
                        name:'mov1'
                    },
                    {
                        id:'3344',
                        name:'mov2'
                    }
                ]
            }
        }
    },
    mounted() {
    
    },
    methods: {
        starClick(sid){
            this.$router.replace({name:'Item',params:{type:'star',id: sid}})
        },
         movieClick(mid){
            this.$router.replace({name:'Item',params:{type:'movie',id: mid}})
        }
    }

}
</script>