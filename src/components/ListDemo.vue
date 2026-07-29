<template>
<div class="div1">
<h1 style="color: black;">列表</h1>

<input type="text" v-model="text">
<button v-on:click="add">添加</button>
<button v-on:click="Delete">删除最后一个</button>
<ul >
    <li v-for="item of project1"  style="color:black">
        {{ item }}
        <button v-on:click="Delete(item)">删除</button>
    </li>
</ul>
</div>
</template>
<script>
//这份代码的作用是实现一个简单的列表功能，
// 用户可以在输入框中输入内容，点击“添加”按钮后，将输入的内容添加到列表中，并显示在页面上。具体实现如下：
   export default 
   {
    data()
    {
        return{
            project1:['vue','react','angular'],
            text:''
        }
    },
    methods:
    {
        add()
        {
            if(this.text=='')return;
            this.project1.push(this.text);
            this.text = '';
        },
        Delete(e)
        {
            this.project1.splice(this.project1.indexOf(e),1)
        }
    }
   }
</script>
<style scoped>
.div1
{
    background-color: yellow;
}
</style>