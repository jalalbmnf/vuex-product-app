import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {
        name: "Banana",
        price: 50
      },
      {
        name: "Lemon",
        price: 60
      },
      {
        name: "Watermelon",
        price: 30
      }
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(item => {
        return {
          name: `**${item.name}**`,
          price: `${item.price / 2} USD`
        };
      });

      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit("reducePrice", payload);
      }, 3000);
    }
  }
});
