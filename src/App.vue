<template>
  <div id="app">
    <product-list-one />
    <product-list-two />
  </div>
</template>

<script>

import ProductListOne from "./components/ProductListOne.vue"
import ProductListTwo from "./components/ProductListTwo.vue"
export default {
  name: 'app',
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  },
  data() {
    return {

    }
  }
}
</script>

<style>
body{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:#555
}
</style>
