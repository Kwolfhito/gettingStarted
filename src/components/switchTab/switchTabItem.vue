<template>
  <div class="switch-tab-item" @click="showRoute">
      <slot></slot>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route);
    },
    methods:{
        showRoute(){
            console.log(this.$route);
        }
    }
}
</script>

<style>
  .switch-tab-item a{
     color: #999;
     text-decoration: none;
 }

 .switch-tab-item{
  margin-left: 4rem;
  height: 6.8rem;
  line-height: 6.8rem;
  position: relative;
}
.switch-tab-item a:hover{
  color:#202223;
  
}

.switch-tab-item:first-child{
  margin-left: 3rem;
}

.selected a{
  color:#202223;
}

.selected::before{
  content:'';
  width: 120%;
  height: 0.4rem;
  background-color: green;
  position: absolute;
  bottom:0;
  left:-10%;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
}
</style>