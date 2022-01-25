Vue.component('tagbarback', {
	template:
	`<div class="tagbarbackBody">
		<div class="readAll" @click="readAllEssay" v-if="false">查看全部</div>
		<div class="tagbarbackList">
			<div :class="[{'active':activeIndex===index}]" class="tagbarbackItem" v-for="(item,index) in tagbarbackList" :key="'level1-'+index">
				<span @click="toEssayList(item)" :title="item.link">{{item.catalogName}}</span>
			</div>
		</div>
		<div class="menuIcon">
			<van-icon name="wap-nav" @click="openAllType" />
		</div>
		<van-popup v-model="showAllType" position="right" :style="{ width: '90%' }">
			<div class="allTypePopup">
				<div class="allTypeLabel">全部类型：</div>
				<div class="typeList">
					<div @click="toEssayList(item)" class="typeItem" v-for="(item,index) in tagbarbackList" :key="index">{{item.catalogName}}</div>
				</div>
			</div>
        </van-popup>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			list: [],
			activeIndex: -1,
			tagbarbackList:[
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}],
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}],
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}],
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}]
			],
			showAllType: false
		};
	},
	methods: {
		openAllType(){
			this.showAllType = true
		},
		readAllEssay(){
			location.href = './essayList.html?catalogId=all&catalogName=全部'
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toEssayList(item){
			location.href = './essayList.html?catalogId='+item.catalogId+'&catalogName='+item.catalogName
		},
		gettagbarbackList(){
			postModelListByName('学术').then(res => {
				if(res.data && res.data.msg === "success"){
					let list = res.data.data
					this.list = list
					this.tagbarbackList = list
					list.forEach((item,index) => {
						const catalogId = getUrlParam('catalogId')
						if(catalogId == item.catalogId){
							this.activeIndex = index
						}
					});
				}
			})
		}
	},
    mounted() {
		this.gettagbarbackList()
	}
});