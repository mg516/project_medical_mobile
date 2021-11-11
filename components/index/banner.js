Vue.component('banner', {
	template:
	`<div class="bannerBody">
		<van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
			<van-swipe-item v-for="(item,index) in bannerList" :key="index">
				<img :src="item.imgUrl" />
				<div class="bannerTitle">{{item.advertisementName}}</div>
			</van-swipe-item>
		</van-swipe>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			bannerList: []
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		getBanner(){
			postAdvertisementList().then(res => {
				if(res.data.msg === "success"){
					res.data.data.map(item => {
						item.imgUrl = baseUrl + item.pictureStr
					})
					this.bannerList = res.data.data.filter(item => item.isAble==="Y")
				}
			})
		}
	},
    mounted() {
		this.getBanner()
	}
});