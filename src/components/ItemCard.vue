<template>
  <div class="card shadow my-5">
    <img :src="item.item_photo" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title font-weight-bold my-2 mb-3">{{item.item_name}}</h4>
      <p class="text-uppercase font-weight-bold"><span style="font-size: 20px;" class="text-danger">{{item.item_discount}}</span> % Discount</p>
      <div class="d-flex text-center">
        <router-link class="btn btn-dark mr-3" :to="{ name: 'detail', params: { id: item.item_id }}">View Detail</router-link>
        <button class="btn btn-success" @click="addToCart()">Add To Cart</button>
      </div> 
    </div>  
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      item: Object
    },
    methods:{
      addToCart(){
        let myitem = {id:this.item.item_id ,name:this.item.item_name , price:this.item.item_price , qty:1}
        this.$store.dispatch('addToCart', myitem)
      }
    }
  }
</script>

<style type="text/css">
  .card{
    transition: .5s;
    opacity: .9;
    overflow: hidden;
  }
  .card:hover{
    transform: translateY(-30px);
    opacity: 1; 
  }
  img{
    transition: .7s;
  }
  .card:hover img{
    transform: scale(1.1);
  }
  .btn {
    font-size: 14px;
  }
</style>