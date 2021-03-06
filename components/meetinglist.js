Vue.component('meetinglist', {
	template:
	`<div class="meetingListBody">
		<template v-for="(item,index) in meetingdata" :key="index">
			<div class="meetingLabel">
				<div class="meetingLabelText">{{item.label}}</div>
				<div class="meetingNum">共有 {{item.meeting.length}} 次会议</div>
			</div>
			<div class="meetingBox">
				<div @click="toMessageMeetingDetail(mItem)" class="meetingItem" v-for="(mItem,mIndex) in item.meeting" :key="mIndex">
				<img class="meetingImg" :src="mItem.contextImg | httpStr" />
				<div class="meetingMsg">
					<div class="meetingTitle">{{mItem.titileStr}}</div>
					<div class="meetingTime">{{mItem.updateTime}}</div>
				</div>
			</div>
		</template>
	</div>`,
	props: {
		meetingdata: {
			type: Array,
			default: () => []
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
		toMeetingType(link){
			location.href = link
		},
		toMessageMeetingDetail(data){
			location.href = `./messageMeetingDetail.html?titleId=${data.titleId}`
		}
	},
    mounted() {

	}
});