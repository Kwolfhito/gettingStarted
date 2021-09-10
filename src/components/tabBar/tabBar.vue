<template>
  <div id="tab-bar">
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Home'"></tab-nav-item>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Orders'"></tab-nav-item>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Products'"></tab-nav-item>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Customers'"></tab-nav-item>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Analytics'"></tab-nav-item>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Marketing'"></tab-nav-item>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Discounts'"></tab-nav-item>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Apps'"></tab-nav-item>
      <div class="sales-channel">
        <span>SALES CHANNELS</span>
        <img src="./search.png" alt="">
      </div>
      <tab-nav-item :imgUrl="'./search.png'" :navName="'Oneline Store'"></tab-nav-item>
  </div>
</template>

<script>
import tabNavItem from "./tabNavItem.vue"
export default {
  components:{
    tabNavItem,
  }
}
</script>

<style>
#tab-bar{
  width: 24rem;
    padding-top:1rem;
    background-color: #f6f6f7;
    border-right:1px solid #ccc;
}

.sales-channel{
  color:#6D7175;
  font-size: 1.2rem;
  margin-top:2rem;
  font-weight: 600;
  display:flex;
  align-items: center;
  height:3.2rem;
}

</style>