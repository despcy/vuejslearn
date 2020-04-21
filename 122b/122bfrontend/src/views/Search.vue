<template>
  <div class="search">
<div v-if="this.$route.query.title == null && this.$route.query.year == null && this.$route.query.director == null &&this.$route.query.star == null">
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Title">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="Year">
    <el-input type="number" v-model="form.year"></el-input>
  </el-form-item>
    <el-form-item label="Director">
    <el-input v-model="form.director"></el-input>
  </el-form-item>
    <el-form-item label="Star Name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Search</el-button>
  </el-form-item>
</el-form>
</div>
<div v-else>
<list-view></list-view>
</div>
  </div>
</template>




<script>
// @ is an alias to /src

import ListView from './List.vue'
export default {
  name: 'Search',
  components: {
ListView
  },
  data() {
      return {
        form: {
          title:'',
          year:'',
          director:'',
          name:''
        }
      }
    },
  methods: {
      onSubmit() {
       // alert(this.form.title+this.form.year+this.form.director+this.form.name)
         this.$router.push({name:'Search',query:{
           title:this.form.title,
           year:this.form.year,
           director:this.form.director,
           star:this.form.name
         }})
      }
    }
}
</script>
