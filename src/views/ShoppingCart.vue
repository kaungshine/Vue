<template>
  <div class="container">
    <section v-if="orderDone" class="my-3">
      <h2 class="text-success">Order Completed Successfully!</h2>
    </section>
    <section v-else>
      <div class="row">
        <div class="col-md-12 my-5">
          <h2>Your Shopping Cart</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered shadow">
            <thead class="thead-dark">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in cart" :key="index">
                <td>{{++index}}</td>
                <td>{{item.name}}</td>
                <td>{{formattingNumber(item.price)}} MMK</td>
                <td>
                  <button class="btn btn-sm px-2 btn-outline-danger px-3 mr-2" @click="decrease(item.id)"> - </button>
                  {{item.qty}}
                  <button class="btn btn-sm px-2 btn-outline-success px-3 ml-2" @click="increase(item.id)"> + </button>
                  <button
                    @click="removeFromCart(item.id)"
                    class="btn btn-sm btn-danger ml-3">
                    Remove
                  </button>
                </td>
                <td>{{formattingNumber(item.price*item.qty)}} MMK</td>
              </tr>
              <tr>
                <td colspan="4">Total</td>
                <td>{{formattingNumber(total)}} MMK</td>
              </tr>
            </tbody>
          </table>

          <div class="form-group shadow">
            <textarea class="form-control" placeholder="Your Message Here!" v-model="notes"></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4">
          <router-link class="btn btn-danger rounded-pill w-75 nav-link hvr-icon-forward" to="/itemlist">Continue Shopping<i class="fa fa-chevron-circle-right hvr-icon ml-3"></i></router-link>
        </div>
        <div class="col-4">
          <button class="btn btn-dark rounded-pill w-75 hvr-icon-grow nav-link" @click="order()">
          Check Out<i class="far fa-check-circle hvr-icon ml-3"></i></button>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'

  export default{
    data () {
      return {
        notes: '',
        orderDone: 0,
      }
    },
    computed:{
      cart(){
        // this.$store.dispatch('getData')
        return this.$store.state.cart;
      },
      total(){
        return this.cart.reduce((total, item) => total + (item.price * item.qty), 0);
      }
    },
    methods: {
      removeFromCart(itemId) {
        this.$store.dispatch('removeFromCart', itemId)
      },
      increase(itemId) {
        this.$store.dispatch('increase', itemId)
      },
      decrease(itemId) {
        this.$store.dispatch('decrease', itemId)
      },
      order(){
        let data = {shop_data: JSON.stringify(this.$store.state.cart),
                  notes: this.notes};
        ItemService.createOrder(data)
        .then(response => {
          console.log(response)
          localStorage.removeItem('cart');
          this.orderDone = 1;
          this.$store.dispatch('getData')
        })
        .catch(error => {
          if(error.response.status === 401)
          {
            this.$router.push({path: '/login?redir=true'})
          }
        })
      },
      formattingNumber(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    },
  }
</script>

<style type="text/css">
  
</style>