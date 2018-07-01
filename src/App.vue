<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
	margin:0;
	font-family:"宋体","microsoft yahei";
}
p{
	margin:0;
}
ul{
	margin:0;
	padding:0;
	list-style:none;
}
img{
	display:block;
}
a{
	color:#fff;
	text-decoration:none;
}
.clearfix{
	overflow:auto;
	height:100%;
}
h1,h2,h3,h4,h5,h6{
	margin:0;
}
input{
	display:block;
	padding:0;
}
</style>
