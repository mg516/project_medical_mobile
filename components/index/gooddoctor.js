Vue.component('gooddoctor', {
	template:
	`<div class="doctorBody">
		<div class="modelLabelBox">
			<div class="modelLabel">好医生</div>
			<div class="modelMore">查看全部</div>
		</div>
		<div class="doctorBox">
			<div class="doctorItem" v-for="(item,index) in doctorList" :key="index">
				<div class="doctorImg"><img :src="item.pictureStr | imgStr" /></div>
				<div class="doctorInfo">
					<div class="doctorName">
						{{item.doctorName}}
						<span class="doctorType">{{item.positionStr}}</span>
					</div>
					<div class="doctorDept">{{item.hospitalName}} {{item.officeStr}}</div>
					<div class="doctorSC">{{item.goodStr}}</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		data: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			// doctorList:[
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d4.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png'},
			// ]
		};
	},
	computed:{
		doctorList:function(){
			return this.data
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
    mounted() {

	}
});