<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-md-5 mx-auto">
        <h2 class="mb-4">Login Page!</h2>

        <p v-if="auth=='fail'" class="text-danger">{{errMsg}}</p>

        <form v-on:submit.prevent="Login">
          <div class="form-group text-left">
            <label for="exampleInputEmail1" style="font-size: 18px;">Email address</label>
            <input type="email" class="form-control rounded-pill py-4" id="exampleInputEmail1" v-model="email">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputPassword1" style="font-size: 18px;">Password</label>
            <input type="password" class="form-control rounded-pill py-4" id="exampleInputPassword1" v-model="password">
          </div>
          <div class="form-group form-check text-left">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-dark btn-block rounded-pill py-3" style="font-size: 17px;">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  // import ItemService from '@/services/ItemService.js'

  export default{
    data(){
      return {
        email: '',
        password: '',
        errMsg: '',
        redir: false
      }
    },
    mounted(){
    },
    methods:{
      Login(){
        if(this.$route.query && this.$route.query.redir == 'true')
        {
          this.redir = true
        }
        let user = {username: this.email, password: this.password}
                this.$store.dispatch('login',user)
                  .then(() => {
                    if(this.redir) 
                      this.$router.go(-1)
                    else
                      this.$router.push('/orders')
                  })
                  .catch(err => {
                      console.log('There was an error:',err.response)
                      this.errMsg = 'Login Failed!, Incorrect Email and Password'
        });
      }
    },
    computed:{
      auth(){
        return this.$store.getters.authStatus
      }
    }
  }
</script>

<style type="text/css">
  
</style>