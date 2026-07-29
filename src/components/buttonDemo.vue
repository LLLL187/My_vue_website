<template>
    <div>
<button v-for="(item,index) of projectName" v-bind:key="index" v-on:click="bC(item)"  v-bind:class="[btn1,{ButtonACTIVEl:item.TF}]">{{item.buttonName}} </button>
<div v-for="(item,index) of projectName " v-bind:key="index" v-bind:class="[div1,{Div2:item.TF2}]">{{item.divName}}
    <img src="D:/NodeJS/node_project/vue_1/public/OIP-C.webp">
</div>
    
</div>
</template>
<script>
export default{
    data(){
        return{
            projectName:[
                {
                    buttonName:'1111',
                    divName:'11111',
                    TF:true,
                    TF2:true
                },
                {
                    buttonName:'2222',
                    divName:'22222',
                    TF:false,
                    TF2:false  
                },
                {
                    buttonName:'3333',
                    divName:'33333',
                    TF:false,
                    TF2:false
                },
            ],
            btn1:'btn',
            div1:'Div'  
        }
    },
    methods:{
        
        bC(e){
            for(let i=0;i<this.projectName.length;i++){
                this.projectName[i].TF = false;
                this.projectName[i].TF2 = false;
            }
          e.TF = true
          e.TF2 = true
        },
    }
}
</script>
<style>
.btn{
    width:100px;
    margin-left: 10px;
}
.Div{
    display: none;
}
.ButtonACTIVEl{
    background-color: red;
}
.Div2{
    display: block;
    background-color: lightblue;color: black;margin-top: 10px;
}
</style>