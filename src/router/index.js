import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件
//首页区组件

//引入部门的组件
import DepartmetnMain  from "./../components/department/main.vue";
import DepartmetnList  from "./../components/department/list.vue";
import DepartmetnAdd  from "./../components/department/add.vue";
import DepartmetnModify  from "./../components/department/modify.vue";
import DepartmetnView  from "./../components/department/view.vue";

import UserMain  from "./../components/user/main.vue";
import UserList  from "./../components/user/list.vue";
import UserAdd  from "./../components/user/add.vue";
import UserModify  from "./../components/user/modify.vue";
import UserView  from "./../components/user/view.vue";






Vue.use(VueRouter)

  const routes = [
	{path:"/department",name:"departmentmain", component:DepartmetnMain,children:[
		{path:"list",name:"departmentlist",component:DepartmetnList},
		{path:"add",name:"departmentadd",component:DepartmetnAdd},
		{path:"modify/:no",name:"departmentmodify",component:DepartmetnModify},
		{path:"view/:no",name:"departmentview",component:DepartmetnView},
		{path:"", redirect: "list" }
	]},
	
	{path:"/user",name:"usermain", component:UserMain,children:[
		{path:"list",name:"userlist",component:UserList},
		{path:"add",name:"useradd",component:UserAdd},
		{path:"modify/:no",name:"usermodify",component:UserModify},
		{path:"view/:no",name:"userview",component:UserView},
		{path:"", redirect: "list" }
	]}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
