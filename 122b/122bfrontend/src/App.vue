


<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

 

    <!-- Wrap all page content here -->
    <div id="wrap" >

      


      <!-- Make page fluid -->
      <div class="row">
        




        <!-- Fixed navbar -->
        <div class="navbar navbar-default navbar-fixed-top navbar-transparent-black mm-fixed-top" role="navigation" id="navbar">
          


          <!-- Branding -->
          <div class="navbar-header col-md-2">
            <a class="navbar-brand" href="index.jsp">
              <strong>Fablix</strong>
            </a>
            <div class="sidebar-collapse">
              <a href="#">
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
          <!-- Branding end -->
          <div class="copyrights">Collect from <a href="https://github.com/yangchenxi"  title="CopyRights">CopyRights Chenxi Yang Jingwen Mo</a></div>


          <!-- .nav-collapse -->
          <div class="navbar-collapse">
                        
            <!-- Page refresh -->
            <ul class="nav navbar-nav refresh">
              <li class="divided">
                <a href="#" class="page-refresh"><i class="fa fa-refresh"></i></a>
              </li>
            </ul>
            <!-- /Page refresh -->



            <!-- Quick Actions -->
            <ul class="nav navbar-nav quick-actions">


              <li class="dropdown divided user" id="current-user">

                <a class="dropdown-toggle options" data-toggle="dropdown" href="#">
                  {{userName}} <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu arrow settings animated fadeInDown">

                  <li>
                    <a href="#"><i class="fa fa-power-off"></i> Logout</a>
                  </li>
                </ul>

              </li>

            </ul>
            <!-- /Quick Actions -->



            <!-- Sidebar -->
            <ul class="nav navbar-nav side-nav" id="sidebar">


              <li class="navigation" id="navigation">
                <a href="#" class="sidebar-toggle" data-toggle="#navigation">Navigation <i class="fa fa-angle-up"></i></a>
                
                <ul class="menu">
                  <li class="active">
                    <router-link to="/">
                      <i class="fa fa-home"></i>Home
    
                    </router-link>

                  </li>
                  <li class="inactive">
                    <router-link to="/search">
                      <i class="fa fa-search"></i>Search
    
                    </router-link>

                  </li>                  
                  <li class="inactive">
                    <router-link to="/shop">
                      <i class="fa fa-shopping-cart"></i>Shopping Cart
    
                        <span v-if="shopCart>0" class="badge badge-red">{{shopCart}}</span>
                    </router-link>
      
                  </li>
      

                </ul>

              </li>

              
            </ul>
            <!-- Sidebar end -->





          </div>
          <!--/.nav-collapse -->





        </div>
        <!-- Fixed navbar end -->
        





        

        <!-- Page content -->
        <div id="content" class="col-md-12">
          








          <!-- page header -->
          <div class="pageheader">
            

            <h2>Title</h2>

          <div class="breadcrumbs">
              <ol class="breadcrumb">
                <li>You are here</li>
                <li><a href="/">Home</a></li>
                <li><a href="#">Example Pages</a></li>
                <li class="active">Timeline</li>
              </ol>
            </div>

          </div>

          <!-- /page header -->
          
          

    <router-view></router-view>



<!-- add component here -->


        </div>
        <!-- Page content end -->











      </div>
      <!-- Make page fluid-->




    </div>
    <!-- Wrap all page content end -->



  </div>

</template>

<script>

export default {
data: function(){
  return {
    userName: 'TestUser',
    shopCart: 5,

  }
},
mounted() {
      // axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .then(response => (this.info = response))
      //if user is not login, return to login page
      this.shopCart=0;
}

}





</script>