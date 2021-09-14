<template>
  <div id="home">
    <Header></Header>
    <Header class="fixed-header"></Header>
    <div class="main">
      <tab-bar class="fixed-tabbar"></tab-bar>
      <div class="right">
        <app-info></app-info>
      <switch-tab></switch-tab>
      <router-view class="current-tab"></router-view>
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
.current-tab{
  background-color: #f6f6f7;
  flex-grow: 1;
  height: calc(100vh - 19.5rem);
  display:flex;
  flex-direction: column;
  align-items:center;
}

.fixed-header{
  position:fixed;
  top: 0;
  left:0;
  width: 100vw;
  background-color: #fff;
}

.fixed-header .user{
  padding-right:3rem;
}

.fixed-tabbar{
}

</style>