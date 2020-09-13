<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/itemlist">
          <img src="./assets/logo.png" width="30" height="30" alt="" loading="lazy">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item active">
              <router-link class="nav-link hvr-bob" to="/testing">Testing<span class="sr-only">(current)</span></router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link hvr-wobble-vertical text-danger" to="/itemlist">Items</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link hvr-wobble-vertical" to="/cart">
                <i class="fas fa-shopping-cart mr-2 text-danger"></i>
                <span class="badge badge-pill badge-danger" v-if="cartCount > 0">{{cartCount}}
                </span>
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <span v-if="isLoggedIn" style="display: inherit;">
              <li class="nav-item">
                <router-link :to="{name:'order-list'}" class="nav-link mr-2 hvr-wobble-vertical text-danger">Order List</router-link>
              </li>
              <li class="nav-item">
                <a @click="logout()" class="nav-link mr-2 text-danger hvr-wobble-vertical" style="cursor: pointer;">Logout</a>
              </li>
              <b-nav-item-dropdown right>
                <template v-slot:button-content>
                  <em v-if="authUser">{{authUser.name}} </em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#" @click="logout()">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </span>
            <span v-else style="display: inherit;">
              <li class="nav-item">
                <router-link if :to="{name:'login'}" class="nav-link hvr-wobble-vertical text-danger">Login</router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{name:'register'}" class="nav-link hvr-wobble-vertical text-danger">Register</router-link>
              </li>  
            </span>
          </ul>
        </div>
      </div>
    </nav>
    <img v-if="currentRoutePath === '/itemlist'" src="@/assets/images/cover3.jpg" class="mb-5 w-100" style="background-position: center; background-repeat: no-repeat; background-size: cover;">
    <div class="container">
      <div class="row my-3">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
        <!-- <div class="col-md-6">
          <Testing msg="This is inherient data"></Testing>
        </div>
        <div class="col-md-6">
          <Exercise></Exercise>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
      // this.$router.replace('/home')
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed:{
    cartCount(){
      this.$store.dispatch('getData')
      return this.$store.state.cart.length
    },
    isLoggedIn() { 
      return this.$store.getters.isLoggedIn
    },
    authUser(){
        return this.$store.state.user
    },
    currentRoutePath() {
        return this.$route.path;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.nav-link {
  margin-right: 30px;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
