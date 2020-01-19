<template>
	<footer class="card-footer">
		<p class="card-footer-item column is-2 is-offset-10">
		<span>
			<div class="buttons">
				<b-button type="is-primary" class="btn__text" @click="increment">
					<i class="mdi mdi-heart mdi-24px"></i>
					{{ getPost.claps }}	
				</b-button>
			</div>
		</span>
	</p>
	</footer>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'Claps',

		props: {
			id: Number
		},

		methods: {
			...mapActions('medium', ['incrementClap']),
			increment() {
				this.incrementClap({payload: this.getPost})
			}
		},

		computed: {
			...mapGetters('medium', ['getPostById']),
			getPost() {
				return this.getPostById(this.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn__text {
		line-height: 0;
	}
</style>