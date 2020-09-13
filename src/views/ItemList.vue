<template>
  <div>
    <h2 class="text-dark mt-3">Best Seller Items</h2><hr class="col-md-3 mx-auto bg-danger">
    <div class="row">
      <div class="col-md-3" v-for="(item,index) in items" :key="index">
        <ItemCard :item="item"></ItemCard>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ItemCard from '@/components/ItemCard.vue'
  import ItemService from '@/services/ItemService.js'

  export default{
    components:{
      ItemCard
    },
    data(){
      return{
        items: []
      }
    },
    mounted(){
      this.getItems();
    },
    methods:{
      getItems(){
        ItemService.getItems()
            .then(res => {
              this.items = res.data.items
            })
            .catch(err => {
              console.log('There was an error:',err.response)
            })
      }
    }
  }
</script>

<style type="text/css">

</style>