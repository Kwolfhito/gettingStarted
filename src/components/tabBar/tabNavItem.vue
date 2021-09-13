<template>
  <div class="tab-nav-item">
      <img src="./search.png" alt="">
      <span>{{navName}}</span>
  </div>
</template>

<script>
export default {
    props:['imgUrl', 'navName']
}
</script>

<style>
img{
    width: 2rem;
    height: 2rem;
    margin-left:0.8rem;
}
.tab-nav-item{
    display: flex;
    align-items: center;
    width: 20.6rem;
    height:3.3rem;
    font-size: 1.4rem;
    font-weight: 600;
    padding-left:1.2rem;
    position: relative;
}

.tab-nav-item:hover{
    background-color: #edeeef;
    color:#007B5C;
    cursor:pointer;
}

.tab-nav-item:hover::before{
    content:'';
    height: 3.3rem;
    width: 0.3rem;
    background-color: #007B5C;
    position: absolute;
    left:0;
}

span{
    padding-left: 1.6rem;
}


</style>