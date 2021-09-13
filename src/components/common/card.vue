<template>
  <div class="card">
      <slot class="card-title" name="card-title"></slot>
      <slot class="card-explaination" name="card-explaination"></slot>
      <slot class="custom" name="custom"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card{
    margin: 2rem 0 0 0;
    width: 80rem;
    background-color: #fff;
    border-radius: 0.5rem;
    padding-bottom:2rem;
    padding-top:2rem;
    box-shadow: 0 1 5 #ccc;
}
.card-title{
    margin: 0 0 1.6rem 1.6rem;
    font-size: 1.6rem;
    color:#202223;
    font-weight: 500;
}

.card-explaination{
    margin: 0 0 0 1.6rem;
    font-size: 1.2rem;
    color:#ccc
}

.custom{
    margin-top:1.6rem;
}
</style>