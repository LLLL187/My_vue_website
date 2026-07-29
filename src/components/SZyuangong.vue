<template>
<div class="YGdiv" id="YG">
<h1>员工介绍</h1>
<button class="btn btnL" v-on:click="LeftTurn"><</button>
<button class="btn btnR" v-on:click="RightTurn">></button>
<div style="width:150px;
    height:200px;
    margin-left:675px;
    margin-top:100px;" 
    v-bind:class="imgYG"></div>
<div></div>
</div>
</template>
<script>
export default{
    data(){
        return{
            YGNO:0,
            imgYG:{
                YGimg7:false,
                YGimg2:false,
                YGimg3:false,
                YGimg4:false,
                YGimg5:false,
                YGimg6:false,
                YGimg1:true,
            }
        }
    },
    methods:{
        
    
        chooseImg(e){
            switch(e%7){
                case 0 :{
                this.imgYG.YGimg1=true;
                this.imgYG.YGimg2=false;
                this.imgYG.YGimg3=false;
                this.imgYG.YGimg4=false;
                this.imgYG.YGimg5=false;
                this.imgYG.YGimg6=false;
                this.imgYG.YGimg7=false;
                break;
                }
                case 1 :{
                this.imgYG.YGimg2=true;
                this.imgYG.YGimg1=false;
                this.imgYG.YGimg3=false;
                this.imgYG.YGimg4=false;
                this.imgYG.YGimg5=false;
                this.imgYG.YGimg6=false;
                this.imgYG.YGimg7=false;
                break;
                }
              case 2 :{
                this.imgYG.YGimg3=true;
                this.imgYG.YGimg2=false;
                this.imgYG.YGimg1=false;
                this.imgYG.YGimg4=false;
                this.imgYG.YGimg5=false;
                this.imgYG.YGimg6=false;
                this.imgYG.YGimg7=false;
                break;
                }
                case 3 :{
                this.imgYG.YGimg4=true;
                this.imgYG.YGimg1=false;
                this.imgYG.YGimg3=false;
                this.imgYG.YGimg2=false;
                this.imgYG.YGimg5=false;
                this.imgYG.YGimg6=false;
                this.imgYG.YGimg7=false;
                break;
                }
                case 4 :{
                this.imgYG.YGimg5=true;
                this.imgYG.YGimg1=false;
                this.imgYG.YGimg3=false;
                this.imgYG.YGimg4=false;
                this.imgYG.YGimg2=false;
                this.imgYG.YGimg6=false;
                this.imgYG.YGimg7=false;
                break;
                }
                case 5 :{
                this.imgYG.YGimg6=true;
                this.imgYG.YGimg1=false;
                this.imgYG.YGimg3=false;
                this.imgYG.YGimg4=false;
                this.imgYG.YGimg5=false;
                this.imgYG.YGimg2=false;
                this.imgYG.YGimg7=false;
                break;
                }
               case 6 :{
                this.imgYG.YGimg7=true;
                this.imgYG.YGimg1=false;
                this.imgYG.YGimg3=false;
                this.imgYG.YGimg4=false;
                this.imgYG.YGimg5=false;
                this.imgYG.YGimg6=false;
                this.imgYG.YGimg2=false;
                break;
                }
            }
        },
        /*chooseCycle(){
            window.setInterval(()=>{
                
                this.YGNO = ++this.YGNO;
                this.chooseImg(this.YGNO);
            },3000)
        },*/
        
        LeftTurn(){
            this.YGNO = --this.YGNO;
            if(this.YGNO<0)this.YGNO=6; 
            this.chooseImg(this.YGNO);
            this.chooseCycle();
        },
        RightTurn(){
            this.YGNO = ++this.YGNO;
            if(this.YGNO>6)this.YGNO=0; 
            this.chooseImg(this.YGNO)
        },
    }
}

</script>
<style>
h1{
    text-align: center;
}
.YGdiv
{
    width: 1500px;
    height: 600px;
    border:3px solid black;
    margin-top:25px;
}
.btn{
    width:50px;
    height:80px;
    position: relative;
    margin-top: 160px;
}
.btnL{
    position: absolute;
    margin-left: 0;
}
.btnR{
    position: absolute;
    margin-left: 1400px;
}
.YGimg{
    width:150px;
    height:200px;
    margin-left:675px;
    margin-top:100px;
}
.YGimg1{
    background-color: red;
}
.YGimg2{
    background-color: lightblue;
}
.YGimg3{
    background-color: black;
}
.YGimg4{
    background-color: yellow;
}
.YGimg5{
    background-color: green;
}
.YGimg6{
    background-color: lightpink;
}
.YGimg7{
    background-color: purple;
}
</style>