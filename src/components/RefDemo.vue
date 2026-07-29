<template>
<div class="red" ref="redDiv" v-on:mousedown="MD" v-bind:style="{left:X+'px',top:Y+'px'}" >111</div>
</template>
<script>
//这份代码做的是拖拽
export default{
    data(){
        return{
            TF:false,
            X:0,
            Y:0,
            X0:0,
            Y0:0
        }
    },
    methods:{
        MD(e){
            this.TF = true;
            this.X0 = e.clientX-this.$refs.redDiv.offsetLeft;
            this.Y0 = e.clientY-this.$refs.redDiv.offsetTop;
            document.addEventListener("mousemove",this.MM)
            document.addEventListener("mouseup",this.MU)
            
        },
        MM(e){
            if(this.TF==false)return;
            this.X = e.clientX - this.X0;
            this.Y = e.clientY - this.Y0;
        },
        MU(){
            this.TF = false;
            document.removeEventListener("mousemove",this.MM)
            document.removeEventListener("mouseup",this.MU)
        }
    }
}
</script>
<style>
.red{
    width:100px;
    height:100px;
    background-color: red;
    position: absolute;
}
</style>