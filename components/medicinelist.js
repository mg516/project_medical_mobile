Vue.component('medicinelist', {
	template:
	`<div class="medicinelistBody">
		<div class="medicinelistTital">全部产品</div>
		<div class="medicineListBox">
			<div class="medicineItem" v-for="(item,index) in list" :key="index" @click="toMedicineDetail(item)">
				<div class="medicineImg">
					<img :src="item.pictureStr|httpStr" />
				</div>
				<div class="medicineInfo">
					<div class="medicineName" :title="item.productName">
						<div class="medicineNameText" :title="item.productName">{{item.productName}}</div>
					</div>
					<div class="medicineMsg">
						<div class="medicinemItem">批准文号：{{item.approvalNumber}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		list:{
			type:Array,
			default:()=>[]
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			medicineList:[
				{id:'1',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:['招商区域：全国']},
				{id:'2',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:['招商区域：全国','招商区域：全国']},
				{id:'3',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:[]},
				{id:'4',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:[]},
				{id:'5',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:[]},
			],
			activeIndex: 0,
		};
	},
	methods: {
		checkAddress(index) {
			this.activeIndex = index
		},
		toMedicineDetail(data){
			if(decodeURI(getUrlParam('type')) === 'company'){
				location.href = `./medicineCompany.html?drugName=${data.productName}&id=${data.productId}`
			}else{
				location.href = `./medicineDetail.html?id=${data.productId}&name=${data.productName}&catalogName=${decodeURI(getUrlParam('catalogName'))}`
			}
		}
	},
    mounted() {

	}
});