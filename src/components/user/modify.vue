<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改部门</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputEmail1">用户编码</label>
		<input type="text" class="form-control" v-model="user.id" >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">用户名称</label>
		<input type="text" class="form-control" v-model="user.name">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">密码</label>
	  		<input type="text" class="form-control" v-model="user.password" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputSex1">性别</label>
	  		<input type="text" class="form-control" v-model="user.sex" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputAge1">年龄</label>
	  		<input type="text" class="form-control" v-model="user.age" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputEmail1">邮件</label>
	  		<input type="text" class="form-control" v-model="user.email" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPhone1">手机号</label>
	  		<input type="text" class="form-control" v-model="user.phone" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputAddress1">地址</label>
	  		<input type="text" class="form-control" v-model="user.address" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/user/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	import axios from "axios";
	//部门修改组件
	export default {
		name:"UserModify",
		data(){
			return {
				user:{
					id:"",
					name:"",
					password:"",
					sex:"",
					age:"",
					email:"",
					phone:"",
					address:"",
					no:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let userNo=this.$route.params.no;
			this.getUser(userNo);
			
		},
		methods:{
			getUser(no){
				
				axios.get("http://localhost:8080/user/get?no="+no).then(result=>{
					this.user=result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8080/user/modify",this.user).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/user/list"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
