Vue.component('messagelist', {
	template:
	`<div class="messageListBody">
		<div class="messageLabel">
			<div class="messageLabelText">{{messagedata.label}}</div>
			<div class="messageMore" @click="toMessageType(messagedata)">更多</div>
		</div>
		<div class="messageBox" v-if="messagedata.message.length>0">
			<div class="messageItem" v-for="(mItem,mIndex) in messagedata.message" :key="mIndex">
				<div class="messageTitle">{{mItem.titileStr}}</div>
				<div class="messageTime">{{mItem.updateTime}}</div>
			</div>
		</div>
		<div class="messageBox" v-else>
			<div class="noData">暂无数据</div>
		</div>
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
		toMessageType(data){
			location.href = `${data.link}?label=${data.label}&id=${data.id}`
		}
	},
    mounted() {

	}
});