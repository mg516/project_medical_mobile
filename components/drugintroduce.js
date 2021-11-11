Vue.component('drugintroduce', {
	template:
	`<div class="drugIntroduceBody">
		<div class="drugIntroduceHeader">
			<div class="drugIHLabel">{{drugdata.name}}</div>
			<div class="drugLabelBox">
				<div class="drugLabelItem" v-for="(lItem,lIndex) in drugdata.label" :key="lIndex">
					<div class="drugLabelText">{{lItem}}</div>
					<div class="drugLabelLine" v-if="drugdata.label.length - 1 > lIndex">|</div>
				</div>
				<div class="drugLabelMore" @click="toMedicineTypeDetail(drugdata.name)">更多>></div>
			</div>
		</div>
		<div class="drugIntroduceContent">
			<div class="drugICLeft">
				<div class="drugICLHospital">
					<div class="drugICLHospitalImg">
						<img v-if="drugdata.hospital" :src="drugdata.hospital.pictureStr|httpStr" alt="">
					</div>
					<div class="drugICLHospitalInfo" v-if="drugdata.hospital">
						<div class="drugICLHospitalName">{{drugdata.hospital.enterpriseName}}</div>
						<div class="drugICLHospitalText">{{drugdata.hospital.addressStr}}</div>
						<div class="drugICLHospitalText">{{drugdata.hospital.remark}}</div>
					</div>
				</div>
				<div class="drugICLDrug" v-if="drugdata.hospital">
					<div class="drugICLDrugItem" v-for="(dItem,dIndex) in drugdata.hospital.drugList" :key="dIndex">
						<div class="drugICLDrugName">{{dItem.productName}}</div>
						<div class="drugICLDrugAsk">询问</div>
					</div>
				</div>
			</div>
			<div class="drugICRight">
				<div class="drugICRAddress">
					<div class="drugICRAddressItem" v-for="(aItem,aIndex) in drugdata.addressList" :key="aIndex">
						<div class="drugICRAddressItemText">{{aItem}}</div>
						<div class="drugICRAddressItemLine" v-if="drugdata.addressList.length - 1 > aIndex">|</div>
					</div>
					<div class="drugICRAddressMore" @click="toMedicineCompany('drugType',drugdata.name)">更多>></div>
				</div>
				<div class="drugICRShowDrug" v-if="drugdata.showDrug">
					<div class="drugICRShowDrugItem" v-for="(sdItem,sdIndex) in drugdata.showDrug" :key="sdIndex" @click="toMedicineCompany('drugName',sdItem)">
						<div class="drugICRShowDrugImg">
							<img :src="sdItem.pictureStr|httpStr" alt="">
						</div>
						<div class="drugICRShowDrugName">{{sdItem.productName}}</div>
					</div>
				</div>
				<div class="drugICRDrugData" v-if="drugdata.drugList">
					<div class="drugICRDrugDataItem" v-for="(dnItem,dnIndex) in drugdata.drugList" :key="dnIndex">
						<span class="drugICRDrugDataName">{{dnItem.productName}}</span>
						<span class="drugICRDrugDataNum">（{{dnItem.num}}）</span>
					</div>
				</div>
			</div>
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
		toMedicineCompany(type,data){
			if(type === 'drugType'){
				location.href = `./medicineCompany.html?drugTypeName=${data}`
			}else if(type === 'drugName'){
				location.href = `./medicineCompany.html?drugName=${data.productName}`
			}
		},
		toMedicineTypeDetail(name){
			location.href = `./medicineTypeDetail.html?catalogName=${name}`
		}
	},
    mounted() {

	}
});