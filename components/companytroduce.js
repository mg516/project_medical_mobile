Vue.component('companytroduce', {
	template:
	`<div class="companytroduceBody">
		<div class="companytroduceHeader">
			<div class="companyHLabel">{{drugdata.name}}</div>
			<div class="companyHMore" @click="toCompanyTypeDetail(drugdata.name)">查看全部</div>
		</div>
		<div class="companytroduceContent">
			<template v-if="drugdata.companyList && drugdata.companyList.length>0">
				<div class="companyData">
					<div class="companyDataItem" v-for="(dnItem,dnIndex) in drugdata.companyList" :key="dnIndex" @click="tocompanyDetail(dnItem)">
						<div class="companyImg">
							<img :src="dnItem.pictureStr|httpStr" />
						</div>
						<div class="companyMsg">
							<div class="companyName">{{dnItem.enterpriseName}}</div>
							<div class="companyTel">{{dnItem.tel}}</div>
						</div>
					</div>
				</div>
				<div class="companyMore" v-if="drugdata.companyList && drugdata.companyList.length>0" @click="toCompanyTypeDetail(drugdata.name)">查看全部</div>
			</template>
			<template v-else>
				<div class="noData">暂无相关企业</div>
			</template>
		</div>
	</div>`,
	props: {
		drugdata:{
			type: Object,
			default: () => {
				return {
					showDrug: [],
					companyList: []
				}
			}
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
		toCompanyTypeDetail(name){
			location.href = `./companyTypeDetail.html?catalogName=${name}`
		},
		tocompanyDetail(data){
			location.href = `./companyDetail.html?id=${data.enterpriseId}&name=${data.enterpriseName}&catalogName=${this.drugdata.name}`
		}
	},
    mounted() {

	}
});