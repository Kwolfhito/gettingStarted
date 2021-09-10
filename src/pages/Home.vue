<template>
  <div id="home">
    <Header></Header>
    <div class="main">
      <tab-bar></tab-bar>
      <div class="right">
      <switch-tab></switch-tab>
      <appp></appp>
      </div>
 </div>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import tabBar from "../components/tabBar/tabBar.vue";
import switchTab from "../components/switchTab/switchTab.vue";
import appp from "../components/appp/appp.vue";
export default {
  components: {
    Header,
    tabBar,
    switchTab,
    appp,
  },
};
</script>

<style>
.main{
  display:flex;
  height: calc(100vh - 5.6rem);
}
.right{
  display: flex;
  flex-direction: column;
}

</style>