<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style>
#app{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}
.primary-btn{
  height: 4rem;
  font-size: 1.4rem;
  width: 10rem;
  background-color: #008060;
  color:#fff;
  font-weight: 500;
  border: none;
  border-radius: 0.4rem;
}

.primary-btn:hover{
  background-color: #026e53;
  cursor: pointer;
}
</style>
