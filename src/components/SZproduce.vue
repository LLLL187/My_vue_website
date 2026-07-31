<template>
<div class="CPdiv" id="CP">
<h1 id="ProduceTitle">产品展示</h1>

<div class="buttonShow">
<button v-on:click="ALL">ALL</button>
<button v-on:click="CLASS1">class1</button>
<button v-on:click="CLASS2">class2</button>
</div>

<div style=" width:1500px;height:1300px; background-color:white; display: flex; justify-content: center; flex-wrap: wrap;" >
<img class="Show" v-for="item of whitchArray[pag].P" v-bind:src = 'item'>
</div> 

<div style="text-align: center;">
<a href="#ProduceTitle" v-on:click="btn2" class="btn">last</a>
<a>第{{pag+1}}页/共{{ whitchArray.length }}页</a>
<a href="#ProduceTitle" v-on:click="btn1" class="btn">next</a>
</div>

</div>
</template>
<script>
export default{
    data(){
        return{
            pag:0,
            AllP:[
                {
                    P:["/favicon.ico","/OIP-C.webp","/favicon.ico",
                        "/favicon.ico","/favicon.ico","/favicon.ico","/favicon.ico",
                        "/public/OIP-C.webp","/public/OIP-C.webp"
                    ],
                },
                {
                    P:["/public/OIP-C.webp","/public/favicon.ico","/public/favicon.ico",
                        "/public/OIP-C.webp","/public/OIP-C.webp","/public/OIP-C.webp","/public/OIP-C.webp",
                        "/public/OIP-C.webp","/public/OIP-C.webp"
                    ]
                },
                {
                    P:["/public/favicon.ico","/public/favicon.ico","/public/favicon.ico",
                        "/public/favicon.ico","/public/favicon.ico","/public/favicon.ico","/public/favicon.ico",
                        "/public/OIP-C.webp","/public/OIP-C.webp"
                    ]
                },
                {
                    P:["/public/OIP-C.webp","/public/OIP-C.webp","/public/OIP-C.webp","/public/youxitubiao.png"]
                },
            ],
            Pclass1:[
                {
                    P:["/public/OIP-D.webp"]
                },
                {
                    P:[ "/public/OIP-C.webp","/public/OIP-C.webp"]
                },
                {
                    P:["/public/OIP-D.webp","/public/OIP-C.webp"]
                },

            ] ,
             Pclass2:[
                {
                    P:["/public/OIP-D.webp","/public/OIP-D.webp","/public/OIP-D.webp"]
                },
                {
                    P:[ "/public/OIP-C.webp","/public/OIP-C.webp"]
                },
                {
                    P:["/public/OIP-D.webp","/public/OIP-C.webp"]
                },

            ] ,
            mode:1,
            
        }
    }, 
    computed:{
        whitchArray(){
            switch(this.mode){
                case 1:{
                    return this.AllP;
                    break;
                }
                case 2 :{
                    return this.Pclass1;
                    break;
                }
                case 3 :{
                    return this.Pclass2;
                    break;
                }
            }
        }
    },
    methods:{
        btn1(){
            const max = this.whitchArray.length-1
            this.pag = ++this.pag;
            if(this.pag>=max)this.pag=max;
            console.log(this.pag);
        },
        btn2(){
            this.pag = --this.pag;
            if(this.pag<=0)this.pag= 0;
           
            console.log(this.pag);
        },
       ALL(){
           this.mode = 1;
            this.pag = 0;
        },
         CLASS1(){
            this.mode = 2;
            this.pag = 0;
        },
        CLASS2(){
            this.mode = 3;
            this.pag = 0;
        }
    },
   
}
</script>
<style>
h1{
    text-align: center;
}
.CPdiv
{
    width: 1500px;
    height: 1700px;
    border:3px solid black;
    margin-top:25px;
}
.buttonShow{
    width:1500px;
    height:30px;
    display: flex;
    flex-direction: row;
    justify-content:  center;
    gap:15px;
}
.Show{
    width:400px;
    height:400px;
    border: 1px solid  black;
    /*float:left;*/
    margin:15px ;  
}
.Show:hover{
    border: 1px solid red;
}
.btn{
    min-width:100px;
    height:50px;
    font-size: 20px;
    background-color: lightgray;
    border: 1px solid black;
    text-align: center;
}
a{
    color:black;
    text-decoration: none;
}
</style>
