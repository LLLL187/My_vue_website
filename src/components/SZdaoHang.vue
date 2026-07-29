<template>
<nav id="nav">
    <div id="nav_div" ref='nav_div' v-on:click="left">
        <span id="nav_title_span">{{ company_name }}</span>
        <ul id="nav_ul_1" >
            <li v-for="item in nav"  class="li1"><a href="#" class="a1">{{ item.ul1 }}</a>
                <ul class="ul2">
                    <li v-for="subitem in item.ul2" class="li2"><a v-bind:href="subitem.where" class="a2">{{ subitem.name }}</a></li>
                </ul>
            </li>
        </ul>    
    </div>
</nav>
</template>
<script>
export default {
    data()
    {
        return{
            company_name:'深圳公司',
            nav:
            [
                {
                    ul1:"简介",
                    ul2:[
                        {
                            name:'公司介绍',
                            where:'#GS',
                        },
                        {
                            name:'员工介绍',
                            where:'#YG'
                        }
                    ]
                },
                {
                    ul1:"产品",
                    ul2:[
                        {
                            name:'产品展示',
                            where:'#CP',
                        },
                       /* {
                            name:'服务范围',
                            where:'https://www.baidu.com/'
                        }*/
                    ]
                },
                /*{
                    ul1:"合作",
                    ul2:[
                        {
                            name:'合作伙伴',
                            where:'https://www.jd.com/',
                        },
                        {
                            name:'合作项目',
                            where:'https://www.baidu.com/'
                        }
                    ]
                },
                {
                    ul1:"媒体",
                    ul2:[
                        {
                            name:'社交媒体',
                            where:'https://www.jd.com/',
                        },
                        {
                            name:'舆论媒体',
                            where:'https://www.baidu.com/'
                        }
                    ]
                }*/
            ],
        }
    },
}
</script>
<style scoped>
 *
 {
    margin:0;
    padding:0;  
    text-decoration: none;
 }
#nav
{
    width:100%;
    height: 500px;
    background-image:url("D:/NodeJS/node_project/vue_1/public/OIP-C.webp") ;
    background-repeat: no-repeat;
    background-size: 100% 500px;
    position: absolute;
    top:0;
    left:0;
}
#nav_div
{
    max-width: 1500px;
    height:500px;
    border: 5px solid blue;
    margin:0 auto;
    display: flex;
    position: relative;
    
}
 #nav_title_span
{
    height: 75px;
    /*border: 3px solid black;*/
    font-size:50px;
    font-weight: bolder;
    margin-top: 40px;
    color:black;
}
#nav_ul_1
{
    height: 150px;
    border: 3px dashed black;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 20%;
    width: 50%;
}
/*.li1
{
}*/
.li1:hover .ul2
{
   /* border: 3px solid black;*/
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100px;
    position: absolute;
    list-style: none;
    font-size: 20px;
}
.a1
{
    color: black;
    font-size: 30px;
    font-weight: bolder;
}
.a1:hover
{
    color: red;
    text-decoration: overline;
}
.ul2
{
    display: none;
}
.a2
{
    color: black;
}
.a2:hover
{
    color:red;
    font-weight: bolder;
}
#shadow_white
{
    width: 100%;
    height: 400px;
    background-color: white;
    position: absolute;
    top:0;
}
</style>