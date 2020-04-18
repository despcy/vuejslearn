<template>
  <div class="search">

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
</template>




<script>
// @ is an alias to /src


export default {
  name: 'Search',
  components: {

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
        alert(this.form.title+this.form.year+this.form.director+this.form.name)
      }
    }
}
</script>
