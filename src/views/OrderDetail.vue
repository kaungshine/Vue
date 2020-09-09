<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12 my-5">
				<h2>Your Order Details</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<table class="table table-bordered shadow">
          <thead class="thead-dark">
            <tr>
              <th>Voucher No</th>
              <th>UserName</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,index) in orders" :key="index">
              <td class="text-left w-25">
            		<button
                  class="btn btn-sm btn-info rounded-circle px-3 py-2">
                  i
                </button>
            		<span class="pl-5">{{order.order_voucherno}}</span>
							</td>
              <td>{{order.order_user.user_name}}</td>
              <td>{{order.order_total}}</td>
            </tr>
          </tbody>
        </table>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import ItemService from '@/services/ItemService.js'
	
export default{
    data(){
      return{
        orders: []
      }
    },
    mounted(){
      this.getOrders();
    },
    methods:{
      getOrders(){
        ItemService.getOrders()
            .then(res => {
              this.orders = res.data.orders //api
            })
            .catch(err => {
              console.log('There was an error:',err.response)
            })
      }
    }
  }

</script>