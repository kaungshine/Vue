<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-md-5 mx-auto">
        <h2>Register Page!</h2>
        <form>
          <div class="form-group text-left">
            <label for="exampleInputName">Name</label>
            <input type="text" v-model="form.name" class="form-control rounded-pill py-4" id="exampleInputName">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="form.email" class="form-control rounded-pill py-4" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group text-left">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="form.password" class="form-control rounded-pill py-4" id="exampleInputPassword1">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputConfirmPassword">Confirm Password</label>
            <input type="password" v-model="form.password_confirmation" class="form-control rounded-pill py-4" id="exampleInputConfirmPassword">
          </div>
          <button @click="onSubmit($event)" type="submit" class="btn btn-dark btn-block rounded-pill py-3" style="font-size: 17px;">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import ItemService from '@/services/ItemService.js'
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        show: true,
        errors: []
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        console.log(this.form)
        ItemService.registerUser(this.form)
        .then(resp => {
          if(resp.data.errors){
            this.errors = resp.data.errors
          }
          else
          {
            this.$router.push({ path: '/login'})  
          }
        })
        .catch(err => {
          console.log(err)
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.password = ''
        this.password_confirmation = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style type="text/css">
label{
  font-size: 18px;
}
</style>