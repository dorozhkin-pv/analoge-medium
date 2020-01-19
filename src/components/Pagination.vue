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
			<b-pagination-button
					slot="previous"
					slot-scope="props"
					:page="props.page">
					Previous
			</b-pagination-button>

			<b-pagination-button
					slot="next"
					slot-scope="props"
					:page="props.page">
					Next
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
				current: 1,
				perPage: 10,
				rangeBefore: 1,
				rangeAfter: 1,
				order: 'is-centered',
				size: '',
				isSimple: false,
				isRounded: false,
				prevIcon: 'chevron-left',
				nextIcon: 'chevron-right'
			}
		},

		methods: {
			...mapActions('medium', ['getPosts']),
			getCurrentPage(e) {
				let el = e.target
				if (el.classList.contains('pagBtn') || el.classList.contains('pagination-previous') || el.classList.contains('pagination-next')) {
					let options = {page: this.current, limit: this.perPage}
					this.getPosts(options)
				}
			}
		}
	}
</script>
<style lang="scss">
	
</style>