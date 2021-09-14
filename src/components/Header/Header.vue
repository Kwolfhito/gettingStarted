<template>
  <div id="head">
    <div class="store">Beautify</div>
    <div class="search">
      <div class="search-bar">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='Search'"
          style="background-color: #f1f2f3"
        />
      </div>
    </div>
    <div class="user">
      <div class="user-icon">{{userIcon}}</div>
      <div class="user-name">{{ userName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userIcon: "",
    };
  },
  methods: {
    getUser() {
      this.userName = "SellingBoom@shopify.com";
    },
    getUserIcon(){
      this.userIcon = this.userName.substr(0, 1);
    }
  },
  mounted() {
    this.getUser();
    this.getUserIcon();
  },
};
</script>

<style>
#head {
  display: flex;
  justify-content: space-between;
  height: 5.6rem;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 2px #ccc;
  align-items: center;
  color:#202223;
  z-index: 10;
  font-size: 1.4rem;
}
.store {
  background: transparent
    url("https://cdn.shopify.com/shopifycloud/web/assets/v1/2217fb04df073033ccce8d125b0ea020.svg")
    no-repeat;
  background-size: 2.5rem 2.8rem;
  background-position: 0.8rem center;
  width: 11.2rem;
  text-align: right;
  padding: 1.28rem;
  box-sizing: border-box;
  margin-left: 0.64rem;
  font-weight: 500;
  font-size: 1.4rem;
}

.store:hover {
  background-color: #f6f6f7;
  cursor: pointer;
}

.search{
  display: flex;
  align-items: center;
  padding:0.64rem;
  margin-left: -8rem;
}

.search .search-bar input{
  background-color: #f1f2f3;
  color: #202223;
  background: transparent url("../../../resources/search.png") no-repeat 0.8rem center ;
  background-size: 2rem 2rem;
  border:none;
  height:3.6rem;
  width: 57.8rem;
  padding-left:3.52rem;
  border-radius: 0.32rem;
}

::-webkit-input-placeholder{
  color:#202223;
}
.search .search-bar input:focus{
  border-color:#458fff
}

.user{
  font-weight: 500;
  display:flex;
  align-items: center;
}

.user-icon{
  background-color: orange;
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  line-height: 3.2rem;
  text-align: center;
  margin-right:1.28rem;
}
</style>