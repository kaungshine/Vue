import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {
    addToCart(state,payload){
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    },
    saveCart(state){
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    getData(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    },
    removeFromCart (state, payload) {
      state.cart = [...state.cart.filter(item => item.id !== payload)]  
    },
    increase (state, payload) {
      let item = state.cart.find(item => item.id == payload)
      item.qty++;
    },
    decrease (state, payload) {
      let item = state.cart.find(item => item.id == payload)
      if (item.qty == 1) {
        let result = confirm('Are you sure to remove');
        if(result){
          state.cart = [...state.cart.filter(item => item.id !== payload)]
        }
      }else{
        item.qty--;
      }
    }
  },
  actions:{
    addToCart({commit},payload){
      commit('addToCart', payload)
      commit('saveCart')
    },
    getData({commit}){
      commit('getData')
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('saveCart')
    },
    increase({commit}, payload) {
      commit('increase', payload)
      commit('saveCart')
    },
    decrease({commit}, payload) {
      commit('decrease', payload)
      commit('saveCart')
    }
  },
  getters:{

  }
})

export default store