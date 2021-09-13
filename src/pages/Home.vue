<template>
  <div id="home">
    <Header></Header>
    <div class="main">
      <tab-bar></tab-bar>
      <div class="right">
        <app-info></app-info>
      <switch-tab></switch-tab>
      <router-view></router-view>
      </div>
 </div>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import tabBar from "../components/tabBar/tabBar.vue";
import switchTab from "../components/switchTab/switchTab.vue";
import appInfo from '../components/appInfo/appInfo.vue';
export default {
  components: {
    Header,
    tabBar,
    switchTab,
    appInfo},
};
</script>

<style>
.main{
  display:flex;
  height: calc(100vh - 5.7rem);
}
.right{
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 24rem);
  align-content: flex-start;
}

</style>