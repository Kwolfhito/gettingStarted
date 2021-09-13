<template>
    <div class="getting-started">
        <div class="content">
        <h2>Welcome to Boom app!</h2>
        <h3>A few steps to start your points & rewards program.</h3>
        <card>
            <div class="card-title" slot="card-title">Step 1: Enable customer checkout</div>
            <div class="card-explaination" slot="card-explaination">To allow members to join your program, customer accounts must be optional or required on your Shopify store.</div>
            <button class="enablebtn primary-btn custom" slot="custom">Enable Now</button>
        </card>
        <card>
            <div class="card-title" slot="card-title">Step 2: Name your program</div>
            <div class="card-explaination" slot="card-explaination">To allow members to join your program, customer accounts must be optional or required on your Shopify store.</div>
        </card>
        <card>
            <div class="card-title" slot="card-title">Step 3: Set up ways to earn points</div>
            <div class="card-explaination" slot="card-explaination">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolores alias autem, asperiores, nam mollitia expedita optio est natus tenetur incidunt maiores magnam unde. Optio praesentium dolore eos delectus modi.</div>
        </card>
        <card>
            <div class="card-title" slot="card-title">Step 4: Set up ways to redeem points</div>
            <div class="card-explaination" slot="card-explaination">To allow members to join your program, customer accounts must be optional or required on your Shopify store.</div>
        </card>
        </div>
    </div>
</template>

<script>
import card from "../../components/common/card.vue"
export default {
    components:{
        card,
    }
}
</script>

<style scoped>
.content{
    width: 89rem;
    margin-top: 3.2rem;
}
.enablebtn{
    margin-left:1.6rem;
    font-weight: 600;
}
h2{
    font-size: 2rem;
}
.content h3{
    margin-top: 1.2rem;
    font-size: 1.4rem;
    padding-left:0;
    font-weight: normal;
}
.getting-started{
    background-color: #f6f6f7;
}

</style>