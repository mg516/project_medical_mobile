Vue.component('drugintroduce', {
	template:
	`<div class="drugIntroduceBody">
		<div class="drugIntroduceHeader">
			<div class="drugIHLabel">{{drugdata.name}}</div>
			<div class="drugIHMore" @click="toMedicineTypeDetail(drugdata.name)">查看全部</div>
		</div>
		<div class="drugIntroduceContent">
			<div class="drugICLHospital" @click="toCompanyDetail(drugdata.company)">
				<div class="drugICLHospitalInfo" v-if="drugdata.company">
					<div class="drugICLHospitalName">{{drugdata.company.enterpriseName}}</div>
					<div class="drugICLHospitalText">{{drugdata.company.addressStr}}</div>
					<div class="drugICLHospitalText">{{drugdata.company.remark}}</div>
				</div>
				<div class="drugICLHospitalImg">
					<img v-if="drugdata.company" :src="drugdata.company.pictureStr|httpStr" alt="">
				</div>
			</div>
			<div class="drugICRShowDrug" v-if="drugdata.showDrug">
				<div class="drugICRShowDrugItem" v-for="(sdItem,sdIndex) in drugdata.showDrug" :key="sdIndex" @click="toMedicineCompany('drugName',sdItem)">
					<div class="drugICRShowDrugImg">
						<img :src="sdItem.pictureStr|httpStr" alt="">
					</div>
					<div class="drugICRShowDrugName">{{sdItem.productName}}</div>
				</div>
			</div>
			<div class="drugLabelMore" v-if="drugdata.showDrug && drugdata.showDrug.length>0" @click="toMedicineTypeDetail(drugdata.name)">查看全部</div>
		</div>
	</div>`,
	props: {
		drugdata:{
			type: Object,
			default: () => {
				return {
					hospital: {
						drugList: []
					},
					showDrug: [],
					drugList: []
				}
			}
		}
	},
	data() {
		return {
			rankingList: [
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
			]
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		toCompanyDetail(data) {
			location.href = `./companyDetailEasy.html?id=${data.enterpriseId}&name=${data.enterpriseName}&enter=index`
		},
		toDrugDetail(data){
			location.href = `./medicineDetail.html?id=${data.productId}&name=${data.productName}&catalogName=${this.drugdata.name}`
		},
		toMedicineCompany(type,data){
			if(type === 'drugType'){
				location.href = `./medicineCompany.html?drugTypeName=${data}`
			}else if(type === 'drugName'){
				location.href = `./medicineCompany.html?drugName=${data.productName}`
			}
		},
		toMedicineTypeDetail(name){
			location.href = `./medicineTypeDetail.html?catalogName=${name}&type=company`
		}
	},
    mounted() {

	}
});