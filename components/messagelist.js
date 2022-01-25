Vue.component('messagelist', {
	template:
	`<div class="messageListBody">
		<div class="messageLabel">
			<div class="messageLabelText">{{messagedata.label}}</div>
		</div>
		<div class="messageBox" v-if="messagedata.message.length>0">
			<div class="messageItem" v-for="(mItem,mIndex) in messagedata.message" :key="mIndex" @click="toMessageDetail(mItem)">
				<div class="messageTitle">{{mItem.titileStr}}</div>
			</div>
		</div>
		<div class="messageBox" v-else>
			<div class="noData">暂无数据</div>
		</div>
		<div class="messageMore" @click="toMessageType(messagedata)" v-if="messagedata.message.length>0">更多</div>
	</div>`,
	props: {
		messagedata: {
			type: Object,
			default: {
				label:'',
				link:'',
				message:[]
			}
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		toMessageDetail(data){
			location.href = `./newsMessageDetail.html?titleId=${data.titleId}`
		},
		toMessageType(data){
			location.href = `${data.link}?label=${data.label}&id=${data.id}`
		}
	},
    mounted() {

	}
});