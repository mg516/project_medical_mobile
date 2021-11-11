Vue.component('meetingshowlist', {
	template:
	`<div class="meetingListBody">
		<div class="meetingLabel">
			<div class="meetingNum">共有 {{meetingdata.length}} 次展会</div>
		</div>
		<div class="meetingBox">
			<div class="meetingItem" v-for="(mItem,mIndex) in meetingdata" :key="mIndex">
				<div class="meetingTitle">{{mItem.titileStr}}</div>
				<div class="meetingCountry">中国</div>
				<div class="meetingTime">{{mItem.updateTime}}</div>
			</div>
		</div>
	</div>`,
	props: {
		meetingdata: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		toMeetingType(link){
			location.href = link
		}
	},
    mounted() {

	}
});