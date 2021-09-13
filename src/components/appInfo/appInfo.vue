<template>
  <div class="app-info">
      <div class="app-basic">
      <img src="" alt="">
      <span class="app-name">{{appName}}</span>
      </div>
      <span class="app-developer">by {{appDeveloper}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            appName:'',
            appDeveloper: '',
        }
    },
    methods:{
        getAppInfo(){
            this.appName = 'Boom | Points & Rewards'
            this.appDeveloper = 'Boomapps'
        }
    },
    mounted(){
        this.getAppInfo();
    }
}
</script>

<style scoped>
.app-info{
    font-size: 1.6rem;
    display:flex;
    align-items:center;
    color: #202223;
    height: 6.8rem;
    border-bottom: 1px solid #ccc;
    background-color: #f6f6f7;
    width: 100%;
    justify-content:space-between;
}
.app-basic{
    display:flex;
    align-items:center;
    margin-left: 2rem;
}
img{
    background-color: pink;
    width: 5rem;
    height: 5rem;
}
.app-developer{
    color: #ccc;
    justify-self: flex-end;
    margin-right: 2rem;;
}
</style>