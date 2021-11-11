Vue.component('navbar', {
	template:
	`<van-nav-bar
		class="navbarBody"
		:left-arrow="backBar"
	>
		<template #left>
			<van-icon name="wap-nav" color="#212429" size="2.4rem" />
		</template>
		<template #title>
			<div class="navLogo"></div>
		</template>
		<template #right>
			<van-icon name="search" color="#212429" size="2.4rem" />
		</template>
	</van-nav-bar>`,
	props: {
		backBar: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			activeLink: '1',
			keyword: '',
			userInfo: {name:'张三'},
			menulist1: []
		};
	},
	methods: {
		onClickLeft() {
			Toast('返回');
		},
		onClickRight() {
			Toast('按钮');
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toUserCenter(type) {
			if(type === 'person'){
				location.href = './userCenterPerson.html'
			}else if(type === 'company'){
				location.href = './userCenterCompany.html'
			}else if(type === 'hospital'){
				location.href = './userCenterHospital.html'
			}else if(type === 'doctor'){
				location.href = './userCenterDoctor.html'
			}

			return
			const userInfo = {
				// type: 'company'
				type: 'hospital'
			}
			if(userInfo.type === 'company') {
				location.href = './userCenterCompany.html'
			}else if(userInfo.type === 'hospital') {
				location.href = './userCenterHospital.html'
			}
		},
		toPage(path){
			location.href = path
		},
		toSearchResult() {
			if(this.keyword){
				location.href = `./searchResult.html?keyword=${this.keyword}`
			}
		},
		toLogin(){
			location.href = './login.html'
		},
		getMenuItem(){
			postModelListByName('学术').then(res => {
				if(res.data && res.data.msg === "success"){
					this.menulist1 = res.data.data
				}
			})
		}
	},
    mounted() {
		const hrefArr = location.href.split('/')
		let html = hrefArr[hrefArr.length - 1].split('?')[0]
		if(html === 'hospitalHouse.html'){
			html = html + getUrlParam('tab') || 0
		}
		this.activeLink = html
		this.getMenuItem()
	}
});