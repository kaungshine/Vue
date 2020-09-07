<template>
  <div class="my-5 shadow">
    <div class="row">
      <div class="col-md-6">
        <img :src="item.item_photo" class="card-img-top">
      </div>
      <div class="col-md-6">
        <h1 class="text-center font-weight-bold mt-5">{{item.item_name}}</h1>
        <p class="font-weight-bold mt-4" style="font-size: 20px;">{{item.item_price}} Kyats</p>
        <p class="font-weight-bold text-danger" style="font-size: 40px; letter-spacing: 5px;">*****</p>
        <p class="font-weight-bold mt-3 text-center px-5" style="font-size: 15px; letter-spacing: 1px;">Product slider is usually used to display all types of products in a particular category in a slider. Displaying products in the slider is a great functionality to highlight them.</p>
        <div class="text-center mt-5">
          <button class="btn btn-outline-dark rounded-pill w-50">Add To Cart</button>
        </div>
        <div class="text-center my-3">
          <button @click="goBack()" class="btn btn-outline-danger rounded-pill w-50">Go Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'

  export default{
    data (){
      return {
        item: Object
      }
    },
    mounted(){
      this.getDetail();
    },
    methods:{
      getDetail(){
        let id = this.$route.params.id;
        ItemService.getItem(id)
            .then(res => {
              this.item = res.data.item
            })
            .catch(err => {
              console.log('There was an error:',err.response)
            })
      },
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>
<style type="text/css">
 
</style>