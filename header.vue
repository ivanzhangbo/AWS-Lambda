<template>
	<div class="app-head">
		<div class="app-head-inner">
			<router-link to="/">
        <img src="../assets/tj-logo.png" alt="">
      </router-link>
			<span> 天时在线</span>

      <!--//搜索栏目-->
      <!--<div class="search_box">-->
        <!--<input class="sea_input" type="text" name="keywords" id="keyword" v-model="searchWord">-->
        <!--<button  class="sea_submit" @click="searchSubmit">搜索</button>-->
      <!--</div>-->

			<div class="head-nav">
				<ul class="nav-list">
					<li>登录</li>
					<li class="nav-pile">|</li>
					<li>注册</li>
					<li class="nav-pile">|</li>
					<li>关于</li>
				</ul>
			</div>
		</div>

	</div>
</template>
<script>

export default{
	name:"headers",
	data(){
		return{

		}
	}
}

</script>

<style scoped>

.app-head {
  background: #03B0F0;
  color: #FFF;
  height: 90px;
  line-height: 90px;
  width: 100%;
}

.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner span{
  position: relative;
  top: -35px;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}


  .search_box {
    margin:0 auto;
    position:absolute;
    right:50%;
    top:35px;
    width:300px;
    height:29px;
    border:2px solid #1e9246;
    border-right:0;
    background-color:#fff;
    overflow:hidden;
    box-shadow:2px 1px 1px rgba(200,200,200,0.5) inset
}
.sea_input {
    float:left;
    width:228px;
    margin:5px;
    height:20px;
    line-height:20px;
    color:#bbb;
    outline:0;
    border:0;
    background:0
}
.sea_submit {
    font-size:15px;
    color:#fff;
    float:right;
    height:29px;
    width:62px;
    padding-left:6px;
    border:0;
    background-color:#1e9246;
    cursor:pointer;
    letter-spacing:5px;
    overflow:hidden
}
.sea_submit:hover {
    color:#ffd736
}

</style>
