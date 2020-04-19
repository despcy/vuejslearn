<template>
  <div class="list">
<!-- //Browse By
//Page Number
//sort By

//table


//page
list -->

<el-row type="flex">
  <el-col :span="20"><div class="grid-content">
      <el-pagination
      @size-change="onPageSizeChange"
      @current-change="onPageChange"
      :page-sizes="[5,10,15,20,18,1000]"
      hide-on-single-page:true
      background:true
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
    </div></el-col>
  <el-col :span="4" v-if="sortDrop || this.$route.name=== 'List' "><div class="grid-content" justify="end">
      <el-select v-model="sortFirst" clearable:false @change="onSortChange"  placeholder="Browse By">
      <el-option
      label="Title First"
      value="title">
      </el-option>
       <el-option
      label="Genre First"
      value="genre">
      </el-option>
  </el-select>
  
    </div></el-col>
</el-row>




    <br>

    <el-table
      :data="tableData"
      style="width: 100%"
      height=800>
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        label="Title">
        <template slot-scope="scope">

             <el-link type="success"  @click="onMovieClick(scope.$index)" >{{tableData[scope.$index].title}}</el-link>
   
    
        </template>          
      </el-table-column>
      <el-table-column
        prop="year"
        label="Year">
      </el-table-column>
      <el-table-column
        prop="director"
        label="Director">
      </el-table-column>            
      <el-table-column
        label="Genres">
        <template slot-scope="scope">
          
        <div v-for="(genreitem,idx) in tableData[scope.$index].genres" v-bind:key="idx">
          <el-col :span="6">
             <el-tag type="success">{{genreitem.name}}</el-tag>
           </el-col>
         </div>      
    
        </template>  
      </el-table-column>
      <el-table-column
        label="Stars">
        <template slot-scope="scope">
        <div v-for="(staritem,idx) in tableData[scope.$index].stars" v-bind:key="idx">
          <el-col :span="6">
           <el-link type="warning"  @click="onStarClick(staritem.id)" >{{staritem.name}}</el-link>
          </el-col>
        </div>      
        </template>  
      </el-table-column>
      <el-table-column
        prop="rating"
        label="Rating">
      </el-table-column>            
    </el-table>

  </div>


</template>




<script>
// @ is an alias to /src

import movieData from '../assets/testdata.json'
export default {
  name: 'List',
  props: {
    sortDrop: Boolean
  },
  components: {

  },
  methods:{
    onMovieClick: function(index){

        this.$router.push({name:'Item',params:{type:'movie',id: this.tableData[index].id}});
    },
    onStarClick: function(starId){
        this.$router.push({name:'Item',params:{type:'star',id: starId}});
    },
    onPageSizeChange: function(newSize){
      alert(newSize);
    },
    onPageChange: function(pageNum){
      alert(pageNum);
    },
    onSortChange: function(field){
      console.log(field);
    }    
  },
  mounted() {
    this.tableData=movieData;
  },
  data: function() {
    return {
        sortFirst:'title',
        tableData: []

    }
  }
}


</script>
