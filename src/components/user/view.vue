<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看部门</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">部门编码</label>
		<span></span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">部门名称</label>
		<span></span>
	  </div>
	  <router-link to="/user/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"UserView",
		data(){
			return {
				user:{}
			};
		},
		created(){ //组件的创建生命周期函数
			
		},
		methods:{
			getUser(){
				
			}
		}
	}
</script>

<style>
</style>
