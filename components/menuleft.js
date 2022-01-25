Vue.component('menuleft', {
	template:
	`<div class="menuleftBox">
		<div class="menuBox">
			<div class="menuItem" v-for="(item,index) in navList" :key="index">
				<div class="menuLabel" @click="toPage(item.path,index)">
					<div class="menuName" @click="toPage(item.path)">{{item.name}}</div>
					<div class="menuIcon" :class="[{'open':item.open}]" v-if="item.children.length>0"></div>
				</div>
				<template v-if="item.open">
					<div class="menuSub" v-for="(subItem,subIndex) in item.children" :key="subIndex">
						<div class="menuSubName" @click="toPage(subItem.path)">- {{subItem.name}}</div>
					</div>
				</template>
			</div>
		</div>
		<div class="userCenter">
			<template v-if="userDetailInfo">
				<div class="ucText">个人中心</div>
				<img class="usImg" :src="'http://115.159.53.197:8080' + userDetailInfo.pictureStr"  @click="toUserCenter"/>
			</template>
			<template v-else>
				<span class="ucText" @click="toLogin">登录/注册</span>
			</template>
		</div>
		<van-list v-if="false">
			<van-cell v-for="item in navList" :key="item.name" :title="item.name" @click.stop="toPage(item.path)" />
		</van-list>
	</div>`,
	props: {
		backBar: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			navList: [
				{name:'首页',path:'./index.html',children:[]},
				{name:'学术',path:'./essayList.html?catalogId=all&catalogName=全部',children:[]},
				{name:'测评',path:'./assessIndex.html',children:[]},
				{name:'前沿通',open: false,children:[
					{name:'产品库',path:'./medicineHouse.html'},
					{name:'企业库',path:'./companyHouse.html'},
					{name:'附近药店',path:'./nearbyDrugstore.html'},
				]},
				{name:'医家号',open: false,children:[
					{name:'医生库',path:'./doctorHouse.html'},
					{name:'推荐医院',path:'./hospitalHouse.html'},
					{name:'人物访谈',path:'./doctorInterview.html'},
				]},
				{name:'资讯',path:'./messageIndex.html',children:[]},
				{name:'论坛',path:'http://bbs.qyyoo.com/',children:[]},
			],
			userDetailInfo: UserDetailInfo,
			userInfo: {},
		};
	},
	methods: {
		toPage(path,index){
			if(path)location.href = path
			else this.navList[index].open = !this.navList[index].open
		},
		toLogin(){
			location.href = `./login.html`
		},
		toUserCenter(){
			const userType = this.userInfo.userType
			if(userType === '企业'){
				location.href = './userCenterCompanyAccount.html'
			}else if(userType === '医院'){
				location.href = './userCenterHospitalAccount.html'
			}else if(userType === '用户'){
				location.href = './userCenterPersonAccount.html'
			}else if(userType === '医生'){
				location.href = './userCenterDoctor.html'
			}
		},
		getUserInfo(){
			const userInfo = getUserInfo()
			if(userInfo.data){
				this.userInfo = userInfo.data
			}else{
				this.userInfo = {}
				// this.toLogin()
			}
		},
	},
    mounted() {
		this.getUserInfo()
	}
});