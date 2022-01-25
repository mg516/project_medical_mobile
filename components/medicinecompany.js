Vue.component('medicinecompany', {
	template:
	`<div class="medicinecompanyBody">
		<div class="medicinecompanyTital">拥有{{medicinedata.name}}的企业（{{medicinedata.company.length}}家）</div>
		<div class="medicinecompanyBox">
			<div class="companyItem" v-for="(item,index) in medicinedata.company" :key="index" @click="toCompanyDetail(item)">
				<div class="companyImg">
					<img :src="item.pictureStr|httpStr" />
				</div>
				<div class="companyMsg">
					<div class="companyName">{{item.enterpriseName}}</div>
					<div class="companyTel">{{item.tel}}</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		medicinedata:{
			type: Object,
			default: () => {}
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		toCompanyDetail(data) {
			location.href = `./companyDetailEasy.html?id=${data.enterpriseId}&name=${data.enterpriseName}&enter=index`
		}
	},
    mounted() {

	}
});