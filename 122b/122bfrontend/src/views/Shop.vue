<template>
  <div class="shop">
<el-steps :space="200" :active="active" simple>
  <el-step title="Cart Items" icon="el-icon-shopping-cart-full"></el-step>
  <el-step title="Payment Information" icon="el-icon-bank-card"></el-step>
  <el-step title="Confirm" icon="el-icon-check"></el-step>
</el-steps>

  <div v-if="active === 0">
    <el-table
      :data="cartData"
      style="width: 100%">
      <el-table-column
        prop="movieTitle"
        label="Title">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price">
      </el-table-column>
      <el-table-column
        label="Quantity">
      <template slot-scope="scope">
        <el-input-number v-model="cartData[scope.$index].quantity" @change="handleQuantity(scope.$index)" :min="1" :max="100"></el-input-number>       
      </template>

      </el-table-column>
      <el-table-column
        label="Price Total">
      <template slot-scope="scope">
        {{cartData[scope.$index].quantity*cartData[scope.$index].price}}    
      </template>

      </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index)">Delete</el-button>
      </template>
    </el-table-column>  
  </el-table>
  <el-row type="flex"><h3>Total: {{totalMoney}}</h3></el-row>
  </div>
  <div v-else-if="active === 1">


  </div>
  <div v-else-if="active === 2">


  </div>

  <el-button-group>
  <el-button @click="active--" v-if="cartData.length > 0 && active != 0" type="primary" icon="el-icon-arrow-left">Previous Step</el-button>
  <el-button @click="active++" v-if="cartData.length > 0 && active != 2" type="primary">Next Step<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</el-button-group>
  </div>
</template>




<script>
// @ is an alias to /src

import cData from '../assets/cartdata.json'
export default {
  name: 'Shop',
  components: {

  },
  data: function(){
    return {
      active:0,
      cartData:[]
    }
  },
  computed:{
    totalMoney: function(){
      var count=0;
      for(let i=0;i<this.cartData.length;i++){
        count+=this.cartData[i].price*this.cartData[i].quantity;
      }
      return count;
    }
  },
  mounted() {
    this.cartData=cData;
  },
  methods: {
    handleDelete(index){
      //var data=cartData[index];
      this.cartData.splice(index,1);
    },
    handleQuantity(index){
      
      console.log(this.cartData[index].quantity);
    }
  },
}
</script>

