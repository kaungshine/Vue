<template>
  <div class="card shadow my-5">
    <img :src="item.item_photo" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title font-weight-bold my-2 mb-4">{{item.item_name}}</h4>
      <router-link class="btn btn-dark btn-block" :to="{ name: 'detail', params: { id: item.item_id }}">View Detail</router-link>
    </div>     
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      item: Object
    },
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
</style>