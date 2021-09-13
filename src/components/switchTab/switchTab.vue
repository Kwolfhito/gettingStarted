<template>
  <div class="switch-tab">
    <switch-tab-item><router-link to="/home/GettingStarted">Getting Started</router-link></switch-tab-item>>
    <switch-tab-item><router-link to="/home/Dashboard">Dashboard</router-link></switch-tab-item>>
    <switch-tab-item><router-link to="/home/Settings">Settings</router-link></switch-tab-item>>
    <switch-tab-item><router-link to="/home/WhatsNew">What's New</router-link></switch-tab-item>>
  </div>
</template>

<script>
import switchTabItem from './switchTabItem.vue'
export default {
  components: { switchTabItem },

}
</script>

<style>
.switch-tab{
    font-size: 1.6rem;
    display:flex;
    align-items:center;
    color: #202223;
    height: 6.8rem;
    border-bottom: 1px solid #ccc;
    background-color: #f6f6f7;
    width: 100%;
}
</style>