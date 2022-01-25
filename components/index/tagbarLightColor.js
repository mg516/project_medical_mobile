Vue.component('tagbarback', {
	template:
	`<div class="tagbarbackBody">
		<div class="readAll" @click="readAllEssay" v-if="false">查看全部</div>
		<div class="tagbarbackList">
			<div :class="[{'active':activeIndex===index}]" class="tagbarbackItem" v-for="(item,index) in tagList" :key="'level1-'+index">
				<span @click="toPage(item)" :title="item.link">{{item.catalogName}}</span>
			</div>
		</div>
		<div class="menuIcon">
			<van-icon name="wap-nav" @click="openAllType" />
		</div>
		<van-popup v-model="showAllType" position="right" :style="{ width: '90%' }">
			<div class="allTypePopup">
				<div class="allTypeLabel">全部类型：</div>
				<div class="typeList">
					<div @click="toPage(item)" class="typeItem" v-for="(item,index) in tagList" :key="index">{{item.catalogName}}</div>
				</div>
			</div>
        </van-popup>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
		tagList: {
			type: Array,
			default: []
		},
	},
	data() {
		return {
			showAllType: false,
			activeIndex: 0
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
		toPage(item){
			location.href = './essayList.html?catalogId='+item.catalogId+'&catalogName='+item.catalogName
		},
	},
    mounted() {
		
	}
});