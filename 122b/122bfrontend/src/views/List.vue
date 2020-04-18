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
  <el-col :span="4" v-if="enableSortFirst"><div class="grid-content" justify="end">
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
        prop="title"
        label="Title">
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
             <el-link type="success"  @click="onGenreClick(genreitem.id)" >{{genreitem.name}}</el-link>
           </el-col>
         </div>      
    
        </template>  
      </el-table-column>
      <el-table-column
        label="Stars">
        <template slot-scope="scope">
        <div v-for="(staritem,idx) in tableData[scope.$index].stars" v-bind:key="idx">
          <el-col :span="6">
           <el-link type="warning"  @click="onGenreClick(staritem.id)" >{{staritem.name}}</el-link>
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
  components: {

  },
  methods:{
    onGenreClick: function(genreId){
        alert(genreId);
    },
    onStarClick: function(starId){
        alert(starId);
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
        enableSortFirst:true,
        tableData: []

    }
  }
}


</script>
