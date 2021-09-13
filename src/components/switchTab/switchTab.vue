<template>
  <div class="switch-tab">
    <switch-tab-item 
    :class="$route.name == item.path ? 'switch-tab-item selected' : 'switch-tab-item'"
    @click.native="showRoute()"
    v-for="item in tabItem" 
    :key="item.id">
    <router-link :to="'/home/' + item.path">{{item.name}}</router-link>
    </switch-tab-item>
    <!-- <switch-tab-item><router-link to="/home/Dashboard">Dashboard</router-link></switch-tab-item>
    <switch-tab-item><router-link to="/home/Settings">Settings</router-link></switch-tab-item>
    <switch-tab-item><router-link to="/home/WhatsNew">What's New</router-link></switch-tab-item> -->
  </div>
</template>

<script>
import switchTabItem from './switchTabItem.vue'
import {nanoid} from 'nanoid'
export default {
  data(){
    return{
      tabItem: []
    }
  },
  methods:{
    showRoute(){
      console.log(this.$route);
    }
  },
  components: { switchTabItem },
  mounted(){
    this.tabItem = [{
      id: nanoid(),
      name: 'Getting Started',
      path: 'GettingStarted'
    },
    {
      id: nanoid(),
      name: 'Dashboard',
      path: 'Dashboard',
    },
    {
      id: nanoid(),
      name: 'Settings',
      path: 'Settings',
    },
    {
      id: nanoid(),
      name: "What's New",
      path: 'WhatsNew'
    },
    ]
  }

}
</script>

<style>
.switch-tab{
    font-size: 1.6rem;
    display:flex;
    align-items:center;
    color: #ccc;
    height: 6.8rem;
    border-bottom: 1px solid #ccc;
    background-color: #f6f6f7;
    width: 100%;
}


/* 
.selected:before{
  content:'';
  position: absolute;
  width: 120%;
  height: 0.4rem;
} */


</style>