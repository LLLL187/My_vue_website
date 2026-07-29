<template>
<div>
<p v-for="(item,index) of names" v-bind:key="index" v-on:click="printfName(item)">{{ item }}</p>
</div>
</template>
<script>
export default{
    data(){
        return{
            names:["1",'2','3']
        }
    },
    methods:{
       printfName(e){
        console.log(e);
       }
    }
}
</script>
<style scoped>
p
{
    color:black;
    width: 50px;
    background-color: lightblue;
    margin-bottom: 10px;
}
</style>