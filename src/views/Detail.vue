<template>
  <div class="my-5 shadow">
    <div class="row">
      <div class="col-md-6">
        <img :src="item.item_photo" class="card-img-top">
      </div>
      <div class="col-md-6">
        <h1 class="text-center font-weight-bold mt-5">{{item.item_name}}</h1>
        <p>
          <span class="mr-2" v-if="item.brand"> <b-icon icon="tag-fill" variant="info"></b-icon> {{item.brand.brand_name}}</span>
          <span v-if="item.subcategory"> <b-icon icon="tag-fill" variant="dark"></b-icon> {{item.subcategory.subcategory_name}}</span>
        </p>
        <p class="font-weight-bold mt-4" style="font-size: 20px;">{{item.item_price}} Kyats</p>
        <!-- <p><span style="text-decoration: line-through;">{{item.item_price}} Kyats</span>  - {{discount_price}}</p> -->
        <p class="font-weight-bold text-danger" style="font-size: 40px; letter-spacing: 5px;">*****</p>
        <p class="font-weight-bold my-3 text-center mb-5" style="font-size: 15px; letter-spacing: 1px;">{{item.item_desc}}</p>
        <input type="number" name="qty" v-model="qty" class="form-control w-25 d-inline-block" min="1" placeholder="Quantity">
        <div class="text-center mt-3">
          <button class="btn btn-outline-dark rounded-pill w-50" @click="addToCart()">Add To Cart</button>
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
      return{
        // discount_price: Number,
        qty: 1,
        item : {}
      }
    },
    mounted(){
      // this.discount_price = this.item.item_price - (this.item.item_price*(this.item.item_discount/100));
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
      },
      addToCart() {
        let item = {id:this.item.item_id,name:this.item.item_name,price:this.item.item_price,qty:this.qty};
        this.$store.dispatch('addToCart', item)
      }
    }
  }
</script>
<style type="text/css">
 
</style>