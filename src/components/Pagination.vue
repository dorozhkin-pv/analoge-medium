<template>
	<section @click="getCurrentPage">
		<hr>
		<b-pagination
			
			:total="totalCount"
			:current.sync="current"
			:range-before="rangeBefore"
			:range-after="rangeAfter"
			:order="order"
			:size="size"
			:simple="isSimple"
			:rounded="isRounded"
			:per-page="perPage"
			:icon-prev="prevIcon"
			:icon-next="nextIcon"
			aria-next-label="Next page"
			aria-previous-label="Previous page"
			aria-page-label="Page"
			aria-current-label="Current page">
			<b-pagination-button
					class="pagBtn"
					slot-scope="props"
					:page="props.page"
					:id="`page${props.page.number}`">
			</b-pagination-button>
		</b-pagination>
	</section>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'Pagination',

		props: {
			totalCount: Number
		},

		data() {
			return {
				//total: this.totalCount,
				current: 1,
				perPage: 1,
				rangeBefore: 1,
				rangeAfter: 1,
				order: 'is-centered',
				size: '',
				isSimple: false,
				isRounded: true,
				prevIcon: 'chevron-left',
				nextIcon: 'chevron-right'
			}
		},

		methods: {
			...mapActions('medium', ['getPosts']),
			getCurrentPage(e) {
				console.log(e.target.classList.contains('pagBtn'))
				let el = e.target
				if (el.classList.contains('pagBtn')) {
					console.log(typeof +el.innerHTML)
					let data = {page: +el.innerHTML, limit: this.perPage}
					
					this.getPosts(data)
				}
			}
		},

		computed: {
		},
	}
</script>