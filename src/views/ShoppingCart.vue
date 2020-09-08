<template>
  <div class="container">
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
              <td>{{item.price}}</td>
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
              <td>{{item.price*item.qty}} MMK</td>
            </tr>
            <tr>
              <td colspan="4">Total</td>
              <td>{{total}} MMK</td>
            </tr>
          </tbody>
        </table>

        <!-- <div class="form-group shadow">
          <textarea class="form-control" placeholder="Your Message Here!" v-model="notes"></textarea>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default{
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
      }
    }
  }
</script>

<style type="text/css">
  
</style>