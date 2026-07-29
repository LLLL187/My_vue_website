<template>
<main id="main">
<div id="main_div">
    
    <SZcompany/>
   <!--<SZyuangong/>-->
   <SZproduce/>
</div>
</main>

</template>
<script>
import SZyuangong from './SZyuangong.vue';
import SZcompany from './SZcompany.vue';
import SZproduce from './SZproduce.vue';
export default{
    data(){
        return{
           
        }
    },
    components:{
       SZyuangong,
       SZcompany,
       SZproduce,
    }
}
</script>
<style scoped>
#main
{
    width:100%;
    height: 2000px;
    background-color: white;
    position: absolute;
    top:500px;
    left:0;
}
#main_div
{
    max-width: 1500px;
    height: 5000px;
    /*border: 5px solid red;*/
    margin:0 auto;
}
</style>