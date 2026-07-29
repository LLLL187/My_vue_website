<template>
<div class="GSdiv" id="GS">
<h1>公司介绍</h1>
<p v-for="item of imformation">{{item}}</p>
</div>
</template>
<script>
export default{
    data(){
        return{
            imformation:[
                '深圳奥摄信息技术有限公司于2015年07月29日成立。公司经营范围包括：',
                '1.信息技术咨询；经济信息咨询（不含限制项目）；',
                '2.计算机系统的技术开发；',
                '3.电子产品、机械设备、计算机软件及辅助设备、日用百货、文化用品、体育用品、工艺品（象牙及其制品除外）、服装、玩具、乐器、照相器材、摄影器材、家用电器、通讯设备的销售；',
                '4.影视策划；',
                '5.摄影服务；',
                '6.计算机基础软件、应用软件的技术开发、技术咨询、销售；国内贸易，货物及技术进出口等。'
            ]
        }
    }

}
</script>
<style>
h1{
    text-align: center;
}
.GSdiv
{
    width: 1500px;
    /*height: 700px;*/
    border:3px solid black;
    margin-top:25px;
}
p{
    font-size: 30px;
    text-indent: 4%;
    text-align-last: left;
}
</style>